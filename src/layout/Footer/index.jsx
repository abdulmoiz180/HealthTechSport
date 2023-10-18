import React from "react";
import "./footer.css";
import { Typography } from "@mui/material";
const Footer = () => {
  return (
    <section>
      <footer className="footer">
        <div className="logo">Health Tech Sport</div>
        <div className="footer-pages">
          <ul className="footer-links">
            <li>ABOUT US</li>
            <li>FAQS</li>
            <li>TERMS & CONDITIONS</li>
            <li>REFUND POLICY</li>
            <li>PRIVACY POLICY</li>
          </ul>
          <div className="footer-divider"></div>
        </div>
        <div className="footer-flex">
          <Typography
            variant="body1"
            color={"rgba(255,255,255,.28)"}
            className="copyright"
          >
            © 2023, copyrights @Health Tech Sport
          </Typography>
          <Typography
            variant="body1"
            color="rgba(255, 255, 255, 0.28)"
            className="devloper"
          >
            Developed By <span>AbdulMoiz</span>
          </Typography>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
