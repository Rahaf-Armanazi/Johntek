import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React, { useState } from "react";
import { faPlus ,faTimes,faSave } from "@fortawesome/free-solid-svg-icons";
import "./Add.css";

Modal.setAppElement("#root"); // لتجنب مشاكل الوصول في React
function Add() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button className="add" onClick={openModal}>
        <h2> Add New Product </h2>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
      
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Add Product Modal"
          className="popupWindow"
          overlayClassName="modal-overlay"
        >
        <div className="p1">

          <h1 className=" text1"> Add New Product </h1>

          <div className="p4">
            <label id="p3"> Product Name :</label>
            <input type="text" placeholder=" Please enter the product name.
             " className="p5"  id="p1"/>
          </div>
          <div className="p4">
            <label id="p4">Product Description :</label>
            <input type="text" placeholder=" Please enter product description "
             className="p5" id="p2"/>
          </div >

          <div className="p2">
           <span> Upload file Pdf : </span>
           <input type="file" accept=".pdf"  />
           <span> Upload image :</span>
           <input type="file" accept="image/*"  />
          </div></div>
    
        <div className="p3">
        <div className="iconimage">
          <FontAwesomeIcon icon={faTimes} size="3x" />
          <p className="nameicons1"> Exit</p>
        </div>
        
        <div className="iconimage">
          <FontAwesomeIcon   icon={faSave} size="3x" /> 
          <p className="nameicons2" > Save</p>
      </div>
        </div>
       
        </Modal>
  
 
   </div>
   
  );
}
export default Add;
