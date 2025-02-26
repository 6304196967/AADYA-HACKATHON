import React, { useState, useEffect } from "react";
import "../../styles/intern.css"; // Ensure the correct extension is used
import Sidebar from "../Components/studentsidebar"; // Ensure the correct path

const InternPortal = () => {
    const [activeTab, setActiveTab] = useState("jobs");
    const [jobs, setJobs] = useState([]);
    const [hackathons, setHackathons] = useState([]);
    const [jobSearch, setJobSearch] = useState("");
    const [hackathonSearch, setHackathonSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [jobsRes, hackathonsRes] = await Promise.all([
                fetch("http://localhost:3000/api/intern/all?type=job").then((res) => res.json()).catch(() => defaultJobs),
                fetch("http://localhost:3000/api/intern/all?type=hackathon").then((res) => res.json()).catch(() => defaultHackathons),
            ]);

            setJobs(jobsRes);
            setHackathons(hackathonsRes);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleApply = async (id) => {
        alert(`Application submitted for Job ID: ${id}`);
    };

    const handleJoin = async (id) => {
        alert(`Request sent for Hackathon ID: ${id}`);
    };

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(jobSearch.toLowerCase()) || 
        job.companyOrOrganizer.toLowerCase().includes(jobSearch.toLowerCase())
    );

    return (
        <div className="portal-container">
            <Sidebar />
            <nav className="tab-nav">
                <button 
                    className={`tab-btn ${activeTab === "jobs" ? "active" : ""}`} 
                    onClick={() => setActiveTab("jobs")}
                >
                    Jobs & Internships
                </button>
                <button 
                    className={`tab-btn ${activeTab === "hackathons" ? "active" : ""}`} 
                    onClick={() => setActiveTab("hackathons")}
                >
                    Hackathons
                </button>
            </nav>

            {activeTab === "jobs" && (
                <div className="section">
                    <input 
                        type="text" 
                        className="search-box" 
                        placeholder="Search jobs..." 
                        value={jobSearch} 
                        onChange={(e) => setJobSearch(e.target.value)} 
                    />
                    <div className="card-container">
                        {filteredJobs.map((job) => (
                            <div key={job._id} className="card">
                                <h3>{job.title}</h3>
                                <p>{job.companyOrOrganizer} - {job.location || "N/A"}</p>
                                <button className="apply-btn" onClick={() => handleApply(job._id)}>Apply</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "hackathons" && (
                <div className="section">
                    <input 
                        type="text" 
                        className="search-box" 
                        placeholder="Search hackathons..." 
                        value={hackathonSearch} 
                        onChange={(e) => setHackathonSearch(e.target.value)} 
                    />
                    <div className="card-container">
                        {hackathons.map((hackathon) => (
                            <div key={hackathon._id} className="card">
                                <h3>{hackathon.title}</h3>
                                <p>Organizer: {hackathon.companyOrOrganizer}</p>
                                <button className="join-btn" onClick={() => handleJoin(hackathon._id)}>Join</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// Default data when API is unavailable
const defaultJobs = [
    { _id: 1, title: "Frontend Developer Intern", companyOrOrganizer: "Google", location: "Remote" },
    { _id: 2, title: "Cybersecurity Intern", companyOrOrganizer: "Microsoft", location: "Hybrid" },
    { _id: 3, title: "Data Analyst Intern", companyOrOrganizer: "Amazon", location: "New York" }
];

const defaultHackathons = [
    { _id: 1, title: "Hack the Future", companyOrOrganizer: "Facebook" },
    { _id: 2, title: "AI for Good", companyOrOrganizer: "IBM" },
    { _id: 3, title: "Cybersecurity CTF", companyOrOrganizer: "DEF CON" }
];

export default InternPortal;
