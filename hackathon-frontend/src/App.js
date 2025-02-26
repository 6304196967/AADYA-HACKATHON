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
import Aclubsh from "../src/Pages/Admin/Clubs";
import Alumni from "./Pages/Admin/Alumni";
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
        {/* <Route path="/ClubPage" element={<Aclubsh />} />
        <Route path="/alumini" element={<Alumni />} />  */}
        

        <Route path="/faculty" element={< ADashboard/>} />
        <Route path="/faculty/dashboard" element={<ADashboard />} />
        <Route path="/faculty/schedule" element={<Aschedule />} />
        <Route path="/faculty/clubs" element={<Aclubs />} />
        <Route path="/faculty/discussions" element={<Adiscussions />} />
        <Route path="/faculty/alumni" element={<Aalumni />} />  
       
        <Route path="/student" element={< ADashboard/>} />
        <Route path="/student/dashboard" element={<ADashboard />} />
        <Route path="/student/schedule" element={<Aschedule />} />
        <Route path="/student/clubs" element={<Aclubs />} />
        <Route path="/student/discussions" element={<Adiscussions />} />
        <Route path="/student/alumni" element={<Aalumni />} /> 

        <Route path="/clubc" element={< ADashboard/>} />
        <Route path="/clubc/dashboard" element={<ADashboard />} />
        <Route path="/clubc/schedule" element={<Aschedule />} />
        <Route path="/clubc/clubs" element={<Aclubs />} />
        <Route path="/clubc/discussions" element={<Adiscussions />} />
        <Route path="/clubc/alumni" element={<Aalumni />} /> 

        <Route path="/allumni" element={< ADashboard/>} />
        <Route path="/allumni/dashboard" element={<ADashboard />} />
        <Route path="/allumni/schedule" element={<Aschedule />} />
        <Route path="/allumni/clubs" element={<Aclubs />} />
        <Route path="/allumni/discussions" element={<Adiscussions />} />
        <Route path="/allumni/alumni" element={<Aalumni />} /> 
      
      </Routes>
    </Router>
  );
}

export default App;
