import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSave,
  faImage,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

const InfoProd = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(props.modalIsOpen);
  const closeModal = props.closeModal;

  const [name, SetName] = useState("");
  const [description, SetDescription] = useState("");
  const [image, SetImage] = useState("");
  const [pdf, SetPdf] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false); // الحالة الجديدة لتتبع تحميل الصورة

  useEffect(() => {
    SetName(props.name);
    SetDescription(props.decs);
    SetImage(props.image);
    SetPdf(props.pdf);
  }, [props.name, props.desc, props.image, props.pdf]);

  // لقراءة الملف المختار (سواء صورة أو PDF)
  const handleFileChange = (e, setFile, setUploaded) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result); // يتم تخزين محتوى الملف في الـ state
      if (setUploaded) setUploaded(true); // تحديث الحالة لتعبر عن نجاح تحميل الصورة
    };

    if (file) {
      reader.readAsDataURL(file); // قراءة الملف كـ DataURL
    }
  };

  async function Saveinfo(e) {
    e.preventDefault();
    if (name && description && image && pdf) {
      try {
        axios.defaults.withCredentials = true;
        let res = await axios.post(
          `api /${props.endApi}`,
          {
            name,
            description,
            image,
            pdf,
          },
          {
            withCredentials: true,
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
      <div className="p1">
        <h1 className="text1"> {props.h1} </h1>
        <div className="p4">
          <label id="p3"> Product Name :</label>
          <input
            type="text"
            placeholder=" Please enter the product name. "
            className="p5"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="p4">
          <label id="p4">Product Description :</label>
          <input
            type="text"
            placeholder=" Please enter product description "
            className="p5"
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
          />
        </div>

        <div className="p2">
          <div className="pdf">
            <span style={{ marginRight: "8%", marginTop: "13%" }}>
              {" "}
              image :{" "}
            </span>

            <div className="upload-box">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e) =>
                  handleFileChange(e, SetImage, setImageUploaded)
                } // إزالة الخاصية value
              />
              <div>
                <FontAwesomeIcon
                  icon={faImage}
                  fontSize="100px"
                  style={{ marginTop: "10%", color: "rgb(135 148 171)" }}
                />
                <p style={{ marginTop: "-3%", marginLeft: "6%" }}>
                  select Image
                </p>
              </div>
            </div>
            {/* إضافة مربع الاختيار بعد تحميل الصورة */}
            {imageUploaded && (
              <div style={{ marginTop: "10px" }}>
                <input type="checkbox" checked={imageUploaded} readOnly />
                <label style={{ marginLeft: "8px" }}></label>
              </div>
            )}
          </div>
          <div className="pdf">
            <span style={{ marginRight: "8%", marginTop: "13%" }}>
              Pdf file 
            </span>

            <div className="upload-box">
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => handleFileChange(e, SetPdf)} // إزالة الخاصية value
              />
              <div>
                <FontAwesomeIcon
                  icon={faFilePdf}
                  fontSize="90px"
                  style={{
                    marginTop: "20%",
                    marginLeft: "5%",
                    color: "rgb(135 148 171)",
                  }}
                />
                <p style={{ marginTop: "7%", marginLeft: "6%" }}>select File</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p3">
        <div className="iconimage" onClick={props.closeModal}>
          <FontAwesomeIcon icon={faTimes} size="4x" />
          <p className="nameicons2">Exit</p>
        </div>
        <div className="iconimage" onClick={Saveinfo}>
          <FontAwesomeIcon icon={faSave} size="4x" />
          <p className="nameicons1">Save</p>
        </div>
      </div>
    </div>
  );
};

export default InfoProd;
