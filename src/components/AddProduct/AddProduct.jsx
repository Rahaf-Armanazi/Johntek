import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import React ,{ useState } from "react";
import { faTimes , faSave , faPlus  } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./AddProduct.css";
Modal.setAppElement("#root"); // لتجنب مشاكل الوصول في React

const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [name, SetName] = useState("");
  const [description, Setdescription] = useState("");
  const [image, Setimage] = useState("");
  const [pdf, Setpdf] = useState("");

  async function Saveinfo(e) {
    e.preventDefault();
    if (name & description & image &pdf) {
      try {
        axios.defaults.withCredentials = true;
        let res = await axios.post(
          " api ",
          {
            name,description,image,pdf
          },
          {
            withCredentials: true // تأكد من إرسال ملفات تعريف الارتباط
          }
        );
        let prod_id = res.data.data;
        window.location.href = `api/${prod_id}`;
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("يرجى إدخال جميع المعلومات");
    }
  }

  return (
    <div>
      <button className="add" onClick={openModal}>
        <h2> Add New Product </h2>
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={closeModal}
        contentLabel="Add Product Modal"
        className="popupWindow"
        overlayClassName="modal-overlay"
      >
        <div className="p1">
          {/* <span className="close"  onClick={closeModal}>&times;</span> */}
          <h1 className=" text1"> Add New Product </h1>
          <div className="p4">
            <label id="p3"> Product Name :</label>
            <input
              type="text"
              placeholder=" Please enter the product name. "
              className="p5"
            />
          </div>
          <div className="p4">
            <label id="p4">Product Description :</label>
            <input
              type="text"
              placeholder=" Please enter product description "
              className="p5"
            />
          </div>

          <div className="p2" >
            <div >
            <span >  Pdf file </span>
            <input type="file" accept=".pdf" />
            </div>
            <div>
            <p2 > image </p2>
            <input type="file" accept="image/*" />
            </div>
          </div>
        </div>

        <div className="p3">
          {/* <div className="iconimage">
            <FontAwesomeIcon icon={faEdit} size="4x" />
            <p className="nameicons1">Edit</p>
          </div> */}
          <div className="iconimage" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} size="4x"  />
            <p className="nameicons2" >Exit</p>
          </div>
          <div className="iconimage">
            <FontAwesomeIcon icon={faSave} size="4x" />
            <p className="nameicons1" onClick={Saveinfo}>Save</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddProduct;
