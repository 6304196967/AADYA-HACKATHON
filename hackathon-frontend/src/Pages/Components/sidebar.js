import { NavLink } from "react-router-dom";
import { Home, Calendar, Users, Bell, MessageSquare, GraduationCap } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Portal</h2>
            <nav className="sidebar-nav">
                <NavLink to="/dashboard" className="sidebar-link">
                    <Home className="icon" /> Dashboard
                </NavLink>
                <NavLink to="/schedule" className="sidebar-link">
                    <Calendar className="icon" /> Schedule
                </NavLink>
                <NavLink to="/clubs" className="sidebar-link">
                    <Users className="icon" /> Clubs
                </NavLink>
                <NavLink to="/notifications" className="sidebar-link">
                    <Bell className="icon" /> Notifications
                </NavLink>
                <NavLink to="/discussions" className="sidebar-link">
                    <MessageSquare className="icon" /> Discussions
                </NavLink>
                <NavLink to="/alumni" className="sidebar-link">
                    <GraduationCap className="icon" /> Alumni
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
