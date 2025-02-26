import React, { useState } from "react";
import axios from "axios";
import "../../styles/Alumni.css";
import Sidebar from "../Components/studentsidebar";

const alumniData = [
  {
    id: 1,
    name: "Sarah Chen",
    profession: "Senior Software Engineer",
    company: "Google",
    location: "San Francisco, CA",
    bio: "Specialized in cloud architecture and distributed systems. Previously worked at AWS and Microsoft.",
    experience: 8,
    email: "sarah.chen@example.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    expertise: ["Cloud Computing", "System Design", "Python", "Kubernetes"]
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    profession: "AI Research Scientist",
    company: "DeepMind",
    location: "London, UK",
    bio: "Working on cutting-edge AI research. PhD in Machine Learning from Stanford.",
    experience: 6,
    email: "m.rodriguez@example.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    expertise: ["Machine Learning", "Neural Networks", "PyTorch", "Research"]
  }
];

export default function AlumniConnect() {
  const [view, setView] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [connectionSent, setConnectionSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "", reason: "" });
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const filteredAlumni = alumniData.filter(alumni =>
    alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConnect = (alumni) => {
    setSelectedAlumni(alumni);
    setShowModal(true);
  };

  const submitConnectionRequest = async () => {
    if (!formData.name || !formData.description || !selectedAlumni) {
      alert("Please fill all the details before submitting.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/api/alumni/add", {
        title: formData.name,
        description: formData.description
      });

      setShowModal(false);
      setConnectionSent(true);
      setTimeout(() => setConnectionSent(false), 3000); // Reset message after 3 seconds
    } catch (error) {
      console.error("Error sending connection request:", error);
      alert("Failed to send connection request.");
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <h1 className="title">Alumni Connect</h1>
      <p className="subtitle">Bridge the gap between academia and industry</p>

      {view === "home" && (
        <div className="menu">
          <button className="menu-item" onClick={() => setView("alumni")}>👨‍🎓 Alumni Directory</button>
          <button className="menu-item" onClick={() => setView("events")}>📅 Events & Webinars</button>
          <button className="menu-item" onClick={() => setView("jobs")}>💼 Job Opportunities</button>
        </div>
      )}

      {view === "alumni" && (
        <div>
          <button className="back-button" onClick={() => setView("home")}>⬅ Back</button>
          <input
            type="text"
            className="search-bar"
            placeholder="Search alumni by name, profession, or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="alumni-list">
            {filteredAlumni.map(alumni => (
              <div key={alumni.id} className="alumni-card">
                <img src={alumni.image} alt={alumni.name} className="alumni-image" />
                <h3>{alumni.name}</h3>
                <p>{alumni.profession} at {alumni.company}</p>
                <p>📍 {alumni.location}</p>
                <button className="connect-button" onClick={() => handleConnect(alumni)}>💬 Connect</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Connect with {selectedAlumni?.name}</h2>
            <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <textarea placeholder="Short Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
            <button className="submit-button" onClick={submitConnectionRequest}>Submit</button>
            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      {connectionSent && <div className="confirmation-message">Connection Sent, Wait for Response</div>}
    </div>
  );
}
