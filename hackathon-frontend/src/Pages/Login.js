import { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import "../styles/Login.css";
    import { Link } from 'react-router-dom';

    export default function LoginPage() {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const navigate = useNavigate();

      const handleLogin = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/user/signin", { // Updated endpoint
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              password: password
            }),
          });

          const data = await response.json();

          if (response.ok) {
            localStorage.setItem("token", data.token);
            alert("Login successful");
            navigate("/dashboard"); // Navigate to dashboard or desired route
          } else {
            const errorData = await response.json();
            alert(errorData.message || "Login failed"); // Display server message
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Network error occurred"); // Handle network errors
        }
      };

      return (
        <div className="login-container">
          <div className="login-card">
            <h2 className="login-title">Welcome Back!</h2>
            <div className="login-input-container">
              <label className="login-label" htmlFor="email">
                Email
              </label>
              <input
                className="login-input"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-input-container">
              <label className="login-label" htmlFor="password">
                Password
              </label>
              <input
                className="login-input"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-actions">
              <button
                className="login-button"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
              <Link className="login-forgot-password" to="/forgot">
                Forgot Password?
              </Link>
            </div>
            <div className="login-signup-container">
              <p className="login-signup-text">
                Don't have an account?
                <Link to="/signup" className="login-signup-button">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }
