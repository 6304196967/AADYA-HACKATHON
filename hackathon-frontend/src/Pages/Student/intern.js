import React, { useState, useEffect } from "react";
import "../../styles/intern.css"; // Ensure the correct extension is used
import Sidebar from "../Components/studentsidebar"; // Ensure the correct path
const InternPortal = () => {
    const [activeTab, setActiveTab] = useState("jobs");
    const [jobs, setJobs] = useState([]);
    const [hackathons, setHackathons] = useState([]);
    const [projects, setProjects] = useState([]);
    const [jobSearch, setJobSearch] = useState("");
    const [hackathonSearch, setHackathonSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [jobsRes, hackathonsRes, projectsRes] = await Promise.all([
                fetch("http://localhost:3000/api/jobs").then((res) => res.json()).catch(() => defaultJobs),
                fetch("http://localhost:3000/api/hackathons").then((res) => res.json()).catch(() => defaultHackathons),
                fetch("http://localhost:3000/api/projects").then((res) => res.json()).catch(() => defaultProjects),
            ]);

            setJobs(jobsRes);
            setHackathons(hackathonsRes);
            setProjects(projectsRes);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleApply = async (id) => {
        alert(`Application submitted for Job ID: ${id}`);
    };

    const handleJoin = async (id) => {
        alert(`Request sent for Team ID: ${id}`);
    };

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(jobSearch.toLowerCase()) || 
        job.company.toLowerCase().includes(jobSearch.toLowerCase())
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
                <button 
                    className={`tab-btn ${activeTab === "projects" ? "active" : ""}`} 
                    onClick={() => setActiveTab("projects")}
                >
                    Research Projects
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
                            <div key={job.id} className="card">
                                <h3>{job.title}</h3>
                                <p>{job.company} - {job.location}</p>
                                <button className="apply-btn" onClick={() => handleApply(job.id)}>Apply</button>
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
                            <div key={hackathon.id} className="card">
                                <h3>{hackathon.title}</h3>
                                <p>Organizer: {hackathon.organizer}</p>
                                <button className="join-btn" onClick={() => handleJoin(hackathon.id)}>Join</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "projects" && (
                <div className="section">
                    <div className="card-container">
                        {projects.map((project) => (
                            <div key={project.id} className="card">
                                <h3>{project.title}</h3>
                                <p>Leader: {project.leader}</p>
                                <button className="join-btn" onClick={() => handleJoin(project.id)}>Join Project</button>
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
    { id: 1, title: "Frontend Developer Intern", company: "Google", location: "Remote" },
    { id: 2, title: "Cybersecurity Intern", company: "Microsoft", location: "Hybrid" },
    { id: 3, title: "Data Analyst Intern", company: "Amazon", location: "New York" }
];

const defaultHackathons = [
    { id: 1, title: "Hack the Future", organizer: "Facebook" },
    { id: 2, title: "AI for Good", organizer: "IBM" },
    { id: 3, title: "Cybersecurity CTF", organizer: "DEF CON" }
];

const defaultProjects = [
    { id: 1, title: "Aetificial-Powered Chatbot", leader: "Dr. Smith" },
    { id: 2, title: "Blockchain for Supply Chain", leader: "Prof. Johnson" },
    { id: 3, title: "IoT-Based Smart Agriculture", leader: "Dr. Williams" }
];

export default InternPortal;