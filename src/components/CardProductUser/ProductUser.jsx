import React, { useEffect, useState } from "react";
import p5 from "../../Assets/12333.jpg";
import p6 from "../../Assets/images__3_-removebg-preview.png";
import "./ProductUser.css";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductUser = () => {
  const [infoproCard2,SetIn]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
      try{
        const res=await axios.get("api");
        SetIn(res.data);
      }
      catch(err){
        console.log(err);
      }
    };
    fetchdata();
  },[]);
  const showinfoCard2=infoproCard2.map((e,index)=>{})
  return (
    <div className="card">
      <div className="C1">
        <img className="imageDashboard" src={p5} alt="helooo i am not heer" />
      </div>

      <div className="C2">
        <div className="productdetails">
          <h1 className="productName">
            Lift Check Valve with SS screen DN350-1000
          </h1>
          <div className="PI">
            <p className="productdeDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              ipsum excepturi fuga vel. In pariatur commodi soluta quam deleniti
              corporis, dicta modi doloribus tempore necessitatibus officiis
              nesciunt nam perferendis excepturi.{" "}
            </p>
            <img className="pdf" src={p6} alt="helooo i am not heer" />
          </div>
        </div>

        <p className="C3">
          <Link to="/contactUs">Contact Us </Link>
          to order & inquire about this product
        </p>
      </div>
    </div>
  );
};

export default ProductUser;
