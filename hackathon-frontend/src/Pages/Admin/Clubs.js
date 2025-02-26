import React, { useState } from "react";
import "../../styles/ClubPage.css"; // Ensure the correct path
import Sidebar from "../Components/adminsidebar"; // Ensure the correct path
const clubsData = [
  {
    id: 1,
    name: "Coding Club",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400",
    description: "A club for coding enthusiasts to enhance their programming skills.",
    totalStudents: 120,
    studentsByYear: {
      E1: [{ name: "Alice", branch: "CSE" }, { name: "Bob", branch: "IT" }],
      E2: [{ name: "Charlie", branch: "ECE" }, { name: "David", branch: "EEE" }],
      E3: [{ name: "Eve", branch: "CSE" }, { name: "Frank", branch: "MECH" }],
      E4: [{ name: "Grace", branch: "CSE" }, { name: "Hank", branch: "CIVIL" }],
    },
  },
];

function AdminClubPage() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newClub, setNewClub] = useState({
    name: "",
    image: "",
    description: "",
    totalStudents: 0,
    studentsByYear: { E1: [], E2: [], E3: [], E4: [] },
  });
  const [clubs, setClubs] = useState(clubsData);

  const handleCardClick = (club) => {
    setSelectedClub(club);
  };

  const handleCreateClub = () => {
    setShowCreateForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewClub({ ...newClub, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClubWithId = { ...newClub, id: clubs.length + 1 };
    setClubs([...clubs, newClubWithId]);
    setShowCreateForm(false);
    setNewClub({
      name: "",
      image: "",
      description: "",
      totalStudents: 0,
      studentsByYear: { E1: [], E2: [], E3: [], E4: [] },
    });
  };

  return (
    <div className="container">
        <Sidebar />
      <h2 className="title">College Clubs (Admin)</h2>
      <div className="club-list">
        {clubs.map((club) => (
          <div
            className="club-card"
            key={club.id}
            onClick={() => handleCardClick(club)}
          >
            <img src={club.image} alt={club.name} className="club-img" />
            <div className="club-info">
              <h3>{club.name}</h3>
              <p>{club.description}</p>
            </div>
          </div>
        ))}

        <div className="club-card add-club-card" onClick={handleCreateClub}>
          <div className="add-icon">+</div>
          <p>Add New Club</p>
        </div>
      </div>

      {showCreateForm && (
        <div className="modal">
          <div className="modal-content club-form-container">
            <span className="close" onClick={() => setShowCreateForm(false)}>&times;</span>
            <h2>Create New Club</h2>
            <form onSubmit={handleSubmit} className="club-form">
              <div className="form-group">
                <label>Club Name</label>
                <input
                  type="text"
                  name="name"
                  value={newClub.name}
                  onChange={handleInputChange}
                  placeholder="Enter club name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={newClub.image}
                  onChange={handleInputChange}
                  placeholder="Paste image URL"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={newClub.description}
                  onChange={handleInputChange}
                  placeholder="Briefly describe the club"
                  required
                />
              </div>
              <div className="form-group">
                <label>Total Students</label>
                <input
                  type="number"
                  name="totalStudents"
                  value={newClub.totalStudents}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Create Club</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminClubPage;
