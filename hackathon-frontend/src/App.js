import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./Pages/Forgot";
import ADashboard from "./Pages/Admin/Dashboard";
import Aschedule from "./Pages/Admin/schedule";
import Aclubs from "./Pages/Admin/Clubs";
import Adiscussions from "./Pages/Admin/Discussions";
import Aalumni from "./Pages/Admin/Alumni";
import Aclubsh from "../src/Pages/Admin/Clubs"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />}/>
        <Route path="/admin" element={< ADashboard/>} />
        <Route path="/admin/dashboard" element={<ADashboard />} />
        <Route path="/admin/schedule" element={<Aschedule />} />
        <Route path="/admin/clubs" element={<Aclubs />} />
        <Route path="/admin/discussions" element={<Adiscussions />} />
        <Route path="/admin/alumni" element={<Aalumni />} />       
        <Route path="/ClubPage" element={<Aclubsh />} />
      
      </Routes>
    </Router>
  );
}

export default App;
