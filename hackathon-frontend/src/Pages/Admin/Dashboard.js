import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Sidebar from '../Components/adminsidebar';

function App() {
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
      document.body.removeChild(script);
    };
  }, []);

  const adminName = "Admin"; // Fetch dynamically if needed
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState("");

  const sendNotification = () => {
    if (newNotification.trim() === "") return;

    setNotifications((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        type: 'message',
        title: newNotification,
        time: 'Just now',
        read: false,
      },
    ]);

    setNewNotification(""); // Reset input field
  };

  const handleInputChange = (e) => {
    setNewNotification(e.target.value);
  };

  return (
    <div className="app">
      <Sidebar />
      <Dashboard
        adminName={adminName}
        notifications={notifications}
        newNotification={newNotification}
        handleInputChange={handleInputChange}
        sendNotification={sendNotification}
      />
    </div>
  );
}

const WelcomeSection = ({ adminName }) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="welcome-section">
      <h1>{greeting}, {adminName}! 👋</h1>
      <p>Manage your notifications efficiently from the dashboard.</p>
    </div>
  );
};

const SendNotificationSection = ({ newNotification, handleInputChange, sendNotification, notifications }) => {
  return (
    <div className="send-notification-section">
      <h2>📢 Send a Notification</h2>
      <div className="send-notification-form">
        <input
          type="text"
          placeholder="Enter notification message..."
          value={newNotification}
          onChange={handleInputChange}
        />
        <button className="send-btn" onClick={sendNotification}>
          🚀 Send
        </button>
      </div>

      {notifications.length > 0 && (
        <div className="sent-notifications">
          <h3>📩 Sent Notifications</h3>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>
                <span>{notification.title}</span>
                <span className="time">{notification.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Dashboard = ({ adminName, notifications, newNotification, handleInputChange, sendNotification }) => {
  return (
    <div className="dashboard-content">
      <header className="dashboard-header">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>

      <main className="main-content">
        <WelcomeSection adminName={adminName} />
        <SendNotificationSection
          newNotification={newNotification}
          handleInputChange={handleInputChange}
          sendNotification={sendNotification}
          notifications={notifications}
        />
      </main>
    </div>
  );
};

export default App;
