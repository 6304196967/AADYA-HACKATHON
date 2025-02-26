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
import FDashboard from "./Pages/Faculty/Dashboard";
import Fschedule from "./Pages/Faculty/schedule";
import Fclubs from "./Pages/Faculty/Clubs";
import Fdiscussions from "./Pages/Faculty/Discussions";
import Falumni from "./Pages/Faculty/Alumni";

import SDashboard from "./Pages/Student/Dashboard";
import Sschedule from "./Pages/Student/schedule";
import Sclubs from "./Pages/Student/Clubs";
import Sdiscussions from "./Pages/Student/Discussions";
import Salumni from "./Pages/Student/Alumni";


import AlDashboard from "./Pages/Allumni/Dashboard";
import Alschedule from "./Pages/Allumni/schedule";
import Alclubs from "./Pages/Allumni/Clubs";
import Aldiscussions from "./Pages/Allumni/Discussions";
import Alalumni from "./Pages/Allumni/Alumni";

import CDashboard from "./Pages/Club/Dashboard";
import Cschedule from "./Pages/Club/schedule";
import Cclubs from "./Pages/Club/Clubs";
import Cdiscussions from "./Pages/Club/Discussions";
import Calumni from "./Pages/Club/Alumni";

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
        

        <Route path="/faculty" element={< FDashboard/>} />
        <Route path="/faculty/dashboard" element={<FDashboard />} />
        <Route path="/faculty/schedule" element={<Fschedule />} />
        <Route path="/faculty/clubs" element={<Fclubs />} />
        <Route path="/faculty/discussions" element={<Fdiscussions />} />
        <Route path="/faculty/alumni" element={<Falumni />} />  
       
        <Route path="/student" element={< SDashboard/>} />
        <Route path="/student/dashboard" element={<SDashboard />} />
        <Route path="/student/schedule" element={<Sschedule />} />
        <Route path="/student/clubs" element={<Sclubs />} />
        <Route path="/student/discussions" element={<Sdiscussions />} />
        <Route path="/student/alumni" element={<Salumni />} /> 

        <Route path="/clubc" element={< CDashboard/>} />
        <Route path="/clubc/dashboard" element={<CDashboard />} />
        <Route path="/clubc/schedule" element={<Cschedule />} />
        <Route path="/clubc/clubs" element={<Cclubs />} />
        <Route path="/clubc/discussions" element={<Cdiscussions />} />
        <Route path="/clubc/alumni" element={<Calumni />} /> 

        <Route path="/allumni" element={< AlDashboard/>} />
        <Route path="/allumni/dashboard" element={<AlDashboard />} />
        <Route path="/allumni/schedule" element={<Alschedule />} />
        <Route path="/allumni/clubs" element={<Alclubs />} />
        <Route path="/allumni/discussions" element={<Aldiscussions />} />
        <Route path="/allumni/alumni" element={<Alalumni />} /> 
      
      </Routes>
    </Router>
  );
}

export default App;
