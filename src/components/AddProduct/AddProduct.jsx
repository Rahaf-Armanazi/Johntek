import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddProduct.css";
import InfoProd from "../InsertInfoProduct/InfoProd";
Modal.setAppElement("#root");

const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal =()=> setModalIsOpen(false)
  return (
    <div>
      <button className="add" onClick={openModal}>
        <h2> Add New Product </h2>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Add Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        <InfoProd h1="Add New Product" endApi="AddProduct" closeModal={closeModal}/>
      </Modal>
    </div>
  );
};

export default AddProduct;
