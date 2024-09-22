import React from 'react'
import { Link } from 'react-router-dom';
 
function Home() {
  return (
    <div className="homepage">
      <div className="padd">
        <img
          src={require("../../Assets/٢٠٢٠٠٧٠٣_٠١٢٢٢٣.jpg")}
          alt="الشعار"
          className="img1"
        />
        <h2 className="fonttheh">Our Commitment to Excellence</h2>
        <img
          src={require("../../Assets/FB_IMG_1623860301911.jpg")}
          alt="منتج اول"
          className="img2"
        />
        <h2 className="fonttheh">Discover Our Selection of Products</h2>
        <div className="img2 div222">
          <img
            src={require("../../Assets/FB_IMG_1623860226429.jpg")}
            alt="منتج تاني"
            className=" iii2"
          />
          <div>
            <h2 className="font_h-ener">
              Quality Valves for Every Application
            </h2>
            <button className="btn1">Products</button>
          </div>
        </div>
        {/* footer */}
        <div style={{ backgroundColor: "rgb(189 204 216 / 96%)",marginLeft:"-6%", marginRight:"-8px" , marginBottom:"-8px" }}>
          <div className="footer">
            <div>
              <div>
              <Link to="#" className="linkk">
                <h3>Johntek Valves</h3>
              </Link>
              <Link to="/about us" className="linkk">
                <h3>About Us</h3>
              </Link>
              </div>
              <div>
              <Link to="/Terms of service" className="linkk">
                <h3>Terms of service</h3>
              </Link>
              <Link to="/Privacy policy" className="linkk">
                <h3>Privacy policy</h3>
              </Link>
              </div>
            </div>
            <div>
              <h2 style={{ marginTop: "60%" }}> Contact Us : </h2>
            </div>
            <div style={{display:"flex"}}>
              <div>
              <Link to="jsdfgksdgh@gmail.com" className="linkk">
                <h3>jsdfgksdgh@gmail.com</h3>
              </Link>
              <Link to="jsdfgksdgh@gmail.com" className="linkk">
                <h3>jsdfgksdgh@gmail.com</h3>
              </Link>
              </div>
              <div>
              <Link to="jsdfgksdgh@gmail.com" className="linkk">
                <h3>jsdfgksdgh@gmail.com</h3>
              </Link>
              <Link to="+0981398162735" className="linkk">
                <h3>+0981398162735</h3>
              </Link>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding:"0 20px"}}>
          <h3>JohntekValves.com © 2024 All Rights Reserved. </h3>
          <h3>made by RAYS_Tech</h3>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;