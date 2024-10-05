import React from "react";
import { useState } from "react";
import Logo from '../../Assets/logo.png'; // تأكد من أن المسار صحيح
// import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome
import { Link } from "react-router-dom";
import './Header.css';
function Header() {

  // تعريف حالة للتحكم في إظهار أو إخفاء حقل الإدخال
  const [showInput, setShowInput] = useState(false);

  // دالة لتغيير حالة الحقل عند الضغط على الأيقونة
  const handleSearchClick = () => {
    setShowInput(!showInput); // تبديل الحالة بين إظهار أو إخفاء
  };
  
  return (
    <div className="header">
      <div>
        <img src={Logo} alt="Logo" width="100" margin-right="6%" height="100" />
      </div>
      <div className="Transfers">
        <Link to="/" className="linksss">Home</Link>
        <Link to="/Products" className="linksss">Products</Link>
        <Link to="/aboutUs" className="linksss">About Us</Link>
        <Link to="/Terms" className="linksss">Terms of service</Link>
        <Link to="/aboutUs" className="linksss">Privacy policy</Link>
          <i className="fas fa-search linksss" onClick={handleSearchClick}></i> 
      {showInput && (
        <input type="text" placeholder="Search..." className="inputname" />
      )}
      </div>
    </div>
  );
}

export default Header;
