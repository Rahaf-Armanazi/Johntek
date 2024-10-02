import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import p4 from "../../Assets/doc_2024-10-01_23-38-20.png";
import p5 from "../../Assets/٢٠٢٠٠٧٠٣_٠١٢٢٢٣.jpg";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img className="imageDashboard" src={p4} alt="helooo i am not heer" />
      <div className="productdetails">
        <h1 className="productName">
          Lift Check Valve with SS screen DN350-1000{" "}
        </h1>
        <div className="PI">
          <p className="productdeDescription">
            specifically designed for the suction side of pumps, effectively
            maintaining prime with a drop-tight seal and low head loss, suitable
            for various water distribution systems. p5
          </p>
          <img className="pdf" src={p5} alt="helooo i am not heer" />
        </div>
      </div>
      <div className="icons">
        <div className="iconimage" >
          <FontAwesomeIcon icon={faEdit} size="4x" />
        </div>
        <p className="nameicons1">Edit</p>
        <div className="iconimage">
          <FontAwesomeIcon icon={faTrash} size="4x" />
        </div>
        <p className="nameicons2">Delete</p>
      </div>
    </div>
  );
};

export default Card;
