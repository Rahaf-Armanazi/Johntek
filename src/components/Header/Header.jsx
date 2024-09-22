import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
const [name,SetName]=useState("");
  async function search(e) {
    e.preventDefault();
    if (name) {
      try {
        axios.defaults.withCredentials = true;
        let res = await axios.post(
          "http://192.168.43.131:8000/admin/tests/store",
          {
            name,
            id_admin: userId, // تمرير id المستخدم إلى الباكند
          },
          {
            withCredentials: true // تأكد من إرسال ملفات تعريف الارتباط
          }
        );
        let test_id = res.data.data;
        window.location.href = /DashBoard/CreateQuestion/${test_id};
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
        <Link className="linksss" style={{fontSize:"40px"}} onClick={search}>
          <i className="fas fa-search"></i> {/* أيقونة البحث */}
          <input
                className="inputnametest"
                type="text"
                placeholder="Enter the product's name"
                value={name}
                onChange={(e) => setTestName(e.target.value)}
          />
          {/* <input type="text" placeholder="Enter the product's name" />  */}
        </Link>
      </div>
    </div>
  );
}

export default Header;
