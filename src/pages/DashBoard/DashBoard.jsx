import React from "react";
import "./Dashboard.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // استيراد المكون
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';  // استيراد أيقونة محددة
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'; // استيراد الأيقونات

import p4 from "../../Assets/p4.png";
import p5 from "../../Assets/download.png";
import p6 from "../../Assets/download (1).png";
import p7 from "../../Assets/download (1).png";
// import { Link } from "react-router-dom";

function DashBoard() {
  return (
    <div className="card">
      <div className="image-Dashboard">
        <img className="imageDashboard" src={p4} alt="helooo i am not heer" />
      </div>
      <div className="productdetails">
        <h1 className="productName"> Lift Check Valve with SS screen DN350-1000 </h1>
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
        <div className="iconimage">   
        <FontAwesomeIcon icon={faEdit} size="4x" />    
        </div>
        <p className="nameicons">Edit</p>
        <div  className="iconimage">          
           <FontAwesomeIcon icon={faTrash} size="4x"/>
        </div>
        <p className="nameicons">delete</p>
      </div>
    </div>
  );
}

export default DashBoard;
