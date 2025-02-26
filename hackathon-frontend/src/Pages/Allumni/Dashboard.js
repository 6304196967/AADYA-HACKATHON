import React, { useState, useEffect} from 'react';
import '../../styles/dashboard.css'
import Sidebar from '../Components/alumnisidebar';
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
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      title: 'New message from John',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'alert',
      title: 'System update scheduled',
      time: '2 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'task',
      title: 'Project deadline approaching',
      time: 'Yesterday',
      read: true
    },
    {
      id: 4,
      type: 'message',
      title: 'Team meeting at 3 PM',
      time: '2 days ago',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  // Welcome Section Component
  const WelcomeSection = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    
    let greeting;
    if (hours < 12) {
      greeting = 'Good Morning';
    } else if (hours < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }

    return (
      <div className="welcome-section">
        <div className="welcome-content">
          <h1>{greeting}, User!</h1>
          <p>Welcome to your dashboard. Here's your overview for today.</p>
          <button className="action-button">View Reports</button>
        </div>
        <div className="welcome-image">
          <div className="image-placeholder"></div>
        </div>
      </div>
    );
  };

  // Notifications Section Component
  const NotificationsSection = () => {
    const getIcon = (type) => {
      switch (type) {
        case 'message': return '💬';
        case 'alert': return '⚠️';
        case 'task': return '📝';
        default: return '🔔';
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
            <div className="no-notifications">
              You have no notifications
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="notification-icon">
                  {getIcon(notification.type)}
                </div>
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

  // Sidebar Component
 

  // Dashboard Component
  const Dashboard = () => {
    return (
      <div className="dashboard-content">
        <header className="dashboard-header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              <span className="notification-count">
                {notifications.filter(n => !n.read).length}
              </span>
            </button>
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