import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={require("../../Assets/IMG-20220605-WA0011.jpg")}
          alt="logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div>
        <Link to="/home" className="linksss">Home</Link>
        <Link to="/Product" className="linksss">Products</Link>
        <Link to="/aboutUs" className="linksss">About Us</Link>
        <Link className="linksss" style={{fontSize:"40px"}}>
          <i className="fas fa-search"></i> {/* أيقونة البحث */}
        </Link>
      </div>
    </div>
  );
}

export default Header;
