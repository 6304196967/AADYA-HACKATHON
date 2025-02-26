import React, { useState } from "react";
import "../../styles/ClubPage.css";
import Sidebar from "../Components/csidebar";


const clubsData = [
  {
    id: 1,
    name: "Coding Club",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://media.istockphoto.com/id/1287582736/photo/robot-humanoid-use-laptop-and-sit-at-table-for-big-data-analytic.jpg?s=1024x1024&w=is&k=20&c=NfRIbklwwZy8kKnOWgYrMI4yCrqNma-xp-RnMBLJ6ko=",
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
    image: "https://media.istockphoto.com/id/1777088857/photo/digital-security-concept.jpg?s=1024x1024&w=is&k=20&c=Ddw_NWLAGc5lMWTBfyYa5fKneY4pBmtFU-QD5CJ3uY8=",
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
    image: "https://media.istockphoto.com/id/1976099664/photo/artificial-intelligence-processor-concept-ai-big-data-array.jpg?s=1024x1024&w=is&k=20&c=dPwo-_Pp_00e1D4iIQz3hEXqsaT409ZiSePfytWYIxI=",
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
      <Sidebar />
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
