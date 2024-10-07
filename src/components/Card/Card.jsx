import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد المكون
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons"; // استيراد الأيقونات
import p4 from "../../Assets/doc_2024-10-01_23-38-20.png";
import p5 from "../../Assets/٢٠٢٠٠٧٠٣_٠١٢٢٢٣.jpg";
import "./Card.css";
import InfoProd from "../InsertInfoProduct/InfoProd";

const Card = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal =()=> setModalIsOpen(false)
  // عرض البيانات من الداتا
  const [productinfo, setproductInfo] = useState([]);
  useEffect(() => {
    const getType = async () => {
      await axios.get(" api ").then((response) => {
        setproductInfo(response.data);
      });
    };
    getType();
  }, []);

  const showname = productinfo?.map((i, index) => (
    <div key={i.id}>
      <img className="imageDashboard" src={i.src} alt="helooo i am not heer" />
      <div className="productdetails">
        <h1 className="productName">
          {i.name}
        </h1>
        <div className="PI">
          <p className="productdeDescription">
            {i.paragraph}
          </p>
          <img className="pdf" src={p5} alt="helooo i am not heer" />
        </div>
      </div>
    </div>
  ));

  // عرض معلومات المنتج المراد تعديلها
  const {id} = useParams();
  // const [info,setinfo]=useState({
  //   description:"",
  //   name:"",
  //   image:"",
  //   pdf:""
  // });
  const [name, SetName] = useState("");
  const [description, SetDescription] = useState("");
  const [image, SetImage] = useState("");
  const [pdf, SetPdf] = useState("");
  

  useEffect (()=>{
    const getinfo =async ()=>{
      try{
        await axios.get(`${id}`).then((respon)=>{
          // setinfo(respon.data.data);
          SetName(respon[0].name);
          SetDescription(respon[0].description);
          SetImage(respon[0].image);
          SetPdf(respon[0].Pdf);
        })
      }catch(err){
        console.log(err);
      }
    };
    getinfo();
  },[id]);

  return (
    <div className="card">
      {showname}
      <div className="icons">
        <div className="iconimage" onClick={openModal}>
          <FontAwesomeIcon icon={faEdit} size="4x" />
        </div>
        <p className="nameicons1">Edit</p>
        <Modal
        isOpen={modalIsOpen}
        contentLabel="Add Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        <InfoProd h1="update the product" name={name} desc={description} image={image} pdf={pdf} endApi={`asd/${id}`} closeModal={closeModal}/>
        </Modal>
        <div className="iconimage">
          <FontAwesomeIcon icon={faTrash} size="4x" />
        </div>
        <p className="nameicons2">Delete</p>
      </div>
    </div>
  );
};

export default Card;
