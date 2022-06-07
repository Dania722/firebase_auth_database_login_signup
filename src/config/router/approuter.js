import React from "react";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import Login from "../../pages/login";
import NotFound from "../../pages/notfound";
import Signup from "../../pages/signup";
import Dash from "../../pages/dashboard";

function AppRouting () {
    return (
      <div className="App">
      <header className="App-header">
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="profile/:id" element={<Profile />} /> */}
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        {/* <Route path="*" element={<NotFound/>}/> */}
        <Route path="/:id" element={<Dash/>}/>
        
      </Routes>
    </Router>
      </header>
    </div>
    )
}
export default AppRouting;

