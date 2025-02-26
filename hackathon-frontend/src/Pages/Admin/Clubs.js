import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/ClubPage.css";
import Sidebar from "../Components/adminsidebar";

const API_URL = "http://localhost:3000/api/clubs"; // Update this with your backend URL

function ClubPage() {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);

  useEffect(() => {
    // Fetch clubs data from backend
    const fetchClubs = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setClubs(response.data);
      } catch (error) {
        console.error("Error fetching clubs:", error);
      }
    };

    fetchClubs();
  }, []);

  const handleCardClick = (club) => {
    setSelectedClub(club);
  };

  const handleJoinClub = async () => {
    if (!selectedClub) return;
    
    try {
      const response = await axios.post(`${API_URL}/join`, {
        clubId: selectedClub._id,
        name: localStorage.getItem("username"), 
        email: localStorage.getItem("email"),
        year: "E2",
        branch: "CSE",
      });

      alert(response.data.message);

      // 🔥 Update selected club with new data
      setSelectedClub(response.data.club);

      // 🔥 Update clubs list so UI refreshes properly
      setClubs((prevClubs) =>
        prevClubs.map((club) =>
          club._id === selectedClub._id ? response.data.club : club
        )
      );
    } catch (error) {
      console.error("Error joining club:", error);
      alert(error.response?.data?.message || "Failed to join club.");
    }
  };

  return (
    <div className="container">
      <Sidebar />
      <h2 className="title">College Clubs</h2>

      <div className="club-list">
        {clubs.length > 0 ? (
          clubs.map(
            (club) =>
              club && (
                <div
                  className={`club-card ${
                    selectedClub && selectedClub._id === club._id ? "expanded" : ""
                  }`}
                  key={club._id}
                  onClick={() => handleCardClick(club)}
                >
                  <img
                    src={club.image || "default-image-url.jpg"}
                    alt={club.name || "Club"}
                    className="club-img"
                  />
                  <div className="club-info">
                    <h3>{club.name || "Unnamed Club"}</h3>
                    <p>{club.description || "No description available"}</p>
                  </div>
                </div>
              )
          )
        ) : (
          <p>Loading clubs...</p>
        )}
      </div>

      {selectedClub && (
        <div className="modal expanded-card">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedClub(null)}>&times;</span>
            <h2>{selectedClub.name}</h2>
            <p><strong>Description:</strong> {selectedClub.description}</p>
            <p><strong>Total Students:</strong> {selectedClub.totalStudents}</p>
            <p><strong>Students Coordinators by Year:</strong></p>
            {Object.keys(selectedClub.studentsByYear || {}).map((year) => (
              <div key={year}>
                <h4>{year}</h4>
                <table className="students-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Branch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedClub.studentsByYear[year].map((student, index) => (
                      <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.branch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
            <button className="join-btn" onClick={handleJoinClub}>Join Club</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClubPage;
