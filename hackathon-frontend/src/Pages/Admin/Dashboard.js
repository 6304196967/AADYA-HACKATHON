import React, { useState, useEffect } from "react";
import "../../styles/dashboard.css";
import Sidebar from "../Components/adminsidebar";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch notifications
    fetch("http://localhost:3000/api/noti/notification")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error("Error fetching notifications:", err));

    // Fetch reminders
    fetch("http://localhost:3000/api/noti/reminder")
      .then((res) => res.json())
      .then((data) => setReminders(data))
      .catch((err) => console.error("Error fetching reminders:", err));
  }, []);

  useEffect(() => {
    // Configure chatbot
    window.chtlConfig = { chatbotId: "9648262883" };

    // Create script element
    const script = document.createElement("script");
    script.src = "https://chatling.ai/js/embed.js";
    script.async = true;
    script.dataset.id = "9648262883";
    script.id = "chatling-embed-script";

    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const WelcomeSection = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    
    let greeting;
    if (hours < 12) {
      greeting = "Good Morning";
    } else if (hours < 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    return (
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>{greeting}, {localStorage.getItem("username")}</h1>
          <p>Welcome to your dashboard. Here's your overview for today.</p>
        </div>
        <div className="welcome-image">
          <div className="image-placeholder"></div>
        </div>
      </div>
    );
  };

  const NotificationsSection = () => {
    const getIcon = (type) => {
      switch (type) {
        case "message":
          return "💬";
        case "alert":
          return "⚠️";
        case "task":
          return "📝";
        default:
          return "🔔";
      }
    };

    return (
      <div className="notifications-section">
        <div className="notifications-header">
          <h2>Notifications</h2>
          <button className="mark-all-btn" onClick={markAllAsRead}>
            Mark all as read
          </button>
        </div>

        <div className="notifications-list">
          {notifications.length === 0 ? (
            <div className="no-notifications">You have no notifications</div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`notification-item ${notification.read ? "read" : "unread"}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="notification-icon">{getIcon(notification.type)}</div>
                <div className="notification-content">
                  <div className="notification-title">{notification.title}</div>
                  <div className="notification-time">{notification.time}</div>
                </div>
                {!notification.read && <div className="unread-indicator"></div>}
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  const Dashboard = () => {
    return (
      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="search-bar">
            {/* <input type="text" placeholder="Search..." /> */}
          </div>
          <div className="header-actions">
            {/* <button className="notification-btn">
              <span className="notification-count">
                {notifications.filter((n) => !n.read).length}
              </span>
            </button> */}
          </div>
        </header>

        <main className="main-content">
          <WelcomeSection />
          <NotificationsSection />
        </main>
      </div>
    );
  };

  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
