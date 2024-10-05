import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import p4 from "../../Assets/p4.png";
import p5 from "../../Assets/p7.png";
import p6 from "../../Assets/image_2024-09-23_17-08-46.png";
import p7 from "../../Assets/p4.png";
import "./Card2.css";

const Card = () => {
  return (
    <div className="card">
      <div className="C1">
        <img className="imageDashboard" src={p5} alt="helooo i am not heer" />
      </div>

      <div className="C2">
        <div className="productdetails">
          <h1 className="productName">
            Lift Check Valve with SS screen DN350-1000{" "}
          </h1>
          <div className="PI">
            <p className="productdeDescription">
              hghgfhg mnzdbj,hvglwf ,hlkhlkaf ,kamsbdlhjhblascm,hhhhhhhhhhhhhbjjhsjhb,,,,,,,,,,,,,,,,,,,,,cmsncljhaljfm,n,jbljgasfcb,,,,cmbkugougefhnl
            </p>
            <img className="pdf" src={p6} alt="helooo i am not heer" />
          </div>
        </div>

        <p className="C3"> <a href="">Contact Us </a>
          to order & inquire about this product 
        </p>
      </div>
      {/* <div className="icons">
        <div className="iconimage">
          <FontAwesomeIcon icon={faEdit} size="4x" />
        </div>
        <p className="nameicons1">Edit</p>
        <div className="iconimage">
          <FontAwesomeIcon icon={faTrash} size="4x" />
        </div>
        <p className="nameicons2">Delete</p>
      </div> */}
    </div>
  );
};

export default Card;
