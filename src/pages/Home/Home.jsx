import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import '../../components/footer/footer.css'
// import footer from "../../components/footer/Foote";
 
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
          className="img2 "
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
      </div>
    {/* </Footer>   */}
    </div>
  );
}

export default Home;
