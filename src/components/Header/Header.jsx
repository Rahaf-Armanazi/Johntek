import React from "react";
import { useState } from "react";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import axios from "axios";
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
  
const [name,SetName]=useState("");
  async function search(e) {
    e.preventDefault();
    if (name) {
      try {
        axios.defaults.withCredentials = true;
        let res = await axios.post(
          // "http://192.168.43.131:8000/admin/tests/store",
          {
            name,
    //         id_admin: userId, // تمرير id المستخدم إلى الباكند
          },
          {
            withCredentials: true // تأكد من إرسال ملفات تعريف الارتباط
          }
        );
    //     let test_id = res.data.data;
    //     window.location.href = /DashBoard/CreateQuestion/${test_id};
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("يرجى إدخال اسم الاختبار.");
    }
  }
  return (
    <div className="header">
      <div className="logo">
        <Logo style={{ width: "100px", height: "100px" }} /> {/* استبدال عنصر img بالـ SVG المستورد */}
      </div>
      <div className="Transfers">
        <Link to="/home" className="linksss">Home</Link>
        <Link to="/Product" className="linksss">Products</Link>
        <Link to="/aboutUs" className="linksss">About Us</Link>
        {/* <Link className="linksss" style={{fontSize:"40px"}} onClick={search}> */}
          <i className="fas fa-search linksss" onClick={handleSearchClick}></i> {/* أيقونة البحث */}
          {/* إظهار حقل الإدخال بناءً على حالة showInput */}
      {showInput && (
        <input type="text" placeholder="Search..." className="inputname" />
      )}
      </div>
    </div>
  );
}

export default Header;
