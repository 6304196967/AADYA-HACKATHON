import { useState, useEffect } from "react";
import "./schedule.css";
import Sidebar from "../Components/sidebar";

const SchedulePage = () => {
    // Static Schedule Data
    const SCHEDULE_DATA = [
        { subject: "Math", time: "9:00 AM", faculty: "Prof. Sharma", year: "1st", branch: "CSE" },
        { subject: "Physics", time: "11:00 AM", faculty: "Dr. Singh", year: "2nd", branch: "ECE" },
        { subject: "DBMS", time: "2:00 PM", faculty: "Prof. Rao", year: "3rd", branch: "EEE" },
        { subject: "Thermodynamics", time: "10:30 AM", faculty: "Dr. Patel", year: "4th", branch: "MECH" },
        { subject: "DLD", time: "12:00 PM", faculty: "Prof. Reddy", year: "1st", branch: "CSE" },
        { subject: "FLAT", time: "3:00 PM", faculty: "Dr. Kumar", year: "2nd", branch: "ECE" },
        { subject: "P&S", time: "4:30 PM", faculty: "Prof. Verma", year: "3rd", branch: "EEE" },
        { subject: "Robotics", time: "1:00 PM", faculty: "Dr. Mehta", year: "4th", branch: "MECH" }
    ];

    const [filteredSchedule, setFilteredSchedule] = useState(SCHEDULE_DATA);
    const [year, setYear] = useState("");
    const [branch, setBranch] = useState("");

    useEffect(() => {
        let filtered = SCHEDULE_DATA;

        if (year) filtered = filtered.filter(item => item.year === year);
        if (branch) filtered = filtered.filter(item => item.branch === branch);

        setFilteredSchedule(filtered);
    }, [year, branch]);

    return (
        <div className="schedule-container">
            <Sidebar />
            <div className="main-content">
                <h2 className="title">Class Schedule</h2>

                <div className="filters">
                    <select onChange={(e) => setYear(e.target.value)} value={year}>
                        <option value="">Select Year</option>
                        <option value="1st">1st Year</option>
                        <option value="2nd">2nd Year</option>
                        <option value="3rd">3rd Year</option>
                        <option value="4th">4th Year</option>
                    </select>

                    <select onChange={(e) => setBranch(e.target.value)} value={branch}>
                        <option value="">Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                    </select>
                </div>

                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Time</th>
                            <th>Faculty</th>
                            <th>Year</th>
                            <th>Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSchedule.length > 0 ? (
                            filteredSchedule.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.subject}</td>
                                    <td>{item.time}</td>
                                    <td>{item.faculty}</td>
                                    <td>{item.year}</td>
                                    <td>{item.branch}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="no-data">No schedule found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SchedulePage;