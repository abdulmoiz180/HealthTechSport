import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUS from "../pages/ContactUs";
import FitnessPartner from "../pages/FitnessPartner";
import CorporatePartner from "../pages/CorporatePartner";
import NavBar from "../components/Navbar";
import Footer from "../layout/Footer";

const Routers = () => {
  return (
    <>
      <div>

        <Router>
          <NavBar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route exact path="/fitnesspartner" element={<FitnessPartner />} />
            <Route exact path="/corporatepartner" element={<CorporatePartner />} />
            <Route exact path="/contactus" element={<ContactUS />} />
          </Routes>
          <Footer />

        </Router>
      </div>
    </>
  );
};


export default Routers;
