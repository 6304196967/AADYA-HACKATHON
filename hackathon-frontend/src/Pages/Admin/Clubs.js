import React, { useState } from "react";
import "../../styles/ClubPage.css";

const clubsData = [
  {
    id: 1,
    name: "Coding Club",
    image: "coding.jpeg",
    description: "A club for coding enthusiasts to enhance their programming skills.",
    totalStudents: 120,
    studentsByYear: {
      E1: [{ name: "Alice", branch: "CSE" }, { name: "Bob", branch: "IT" }],
      E2: [{ name: "Charlie", branch: "ECE" }, { name: "David", branch: "EEE" }],
      E3: [{ name: "Eve", branch: "CSE" }, { name: "Frank", branch: "MECH" }],
      E4: [{ name: "Grace", branch: "CSE" }, { name: "Hank", branch: "CIVIL" }],
    },
  },
  {
    id: 2,
    name: "Robotics Club",
    image: "robotics.jpg",
    description: "A club for robotics lovers to build and innovate.",
    totalStudents: 90,
    studentsByYear: {
      E1: [{ name: "Ian", branch: "ECE" }],
      E2: [{ name: "Jack", branch: "EEE" }],
      E3: [{ name: "Karen", branch: "MECH" }],
      E4: [{ name: "Leo", branch: "CIVIL" }],
    },
  },
  {
    id: 3,
    name: "Cybersecurity Club",
    image: "cybersecurity.jpeg",
    description: "A club focused on ethical hacking and cybersecurity skills.",
    totalStudents: 75,
    studentsByYear: {
      E1: [{ name: "Mike", branch: "CSE" }],
      E2: [{ name: "Nancy", branch: "IT" }],
      E3: [{ name: "Oscar", branch: "ECE" }],
      E4: [{ name: "Paul", branch: "EEE" }],
    },
  },
  {
    id: 4,
    name: "AI ML Club",
    image: "ai_ml.jpeg",
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

function ClubPage() {
  const [selectedClub, setSelectedClub] = useState(null);

  const handleCardClick = (club) => {
    setSelectedClub(club);
  };

  return (
    <div className="container">
      <h2 className="title">College Clubs</h2>
      <div className="club-list">
        {clubsData.map((club) => (
          <div
            className={`club-card ${selectedClub && selectedClub.id === club.id ? "expanded" : ""}`}
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
      </div>

      {selectedClub && (
        <div className="modal expanded-card">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedClub(null)}>&times;</span>
            <h2>{selectedClub.name}</h2>
            <p><strong>Description:</strong> {selectedClub.description}</p>
            <p><strong>Total Students:</strong> {selectedClub.totalStudents}</p>
            <p><strong>Students co-ordinators by Year:</strong></p>
            {Object.keys(selectedClub.studentsByYear).map((year) => (
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
            <button className="join-btn" onClick={() => alert(`Joined ${selectedClub.name}`)}>Join Club</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClubPage;
