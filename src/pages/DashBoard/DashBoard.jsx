import React from 'react';
import { useState } from 'react';

function DashBoard() {
  const [name,SetName]=useState("");
  const [description,Setdescription]=useState("");
  const [image,Setimage]=useState("");
  const [pdf,Setpdf]=useState("");

  const [showpopupwindow ,SetShow]=useState(false);
  
  const handleOpenModal = () => {
    SetShow(true);
  };

  const handleCloseModal = () => {
    SetShow(false);
  };

  async function handleSave(e) {
    e.preventDefault();
    if (name) {
      try {
        axios.defaults.withCredentials = true;
        let res = await axios.post(
          "http://192.168.43.131:8000/admin/tests/store",
          {
            name,
            id_admin: userId, // تمرير id المستخدم إلى الباكند
          },
          {
            withCredentials: true // تأكد من إرسال ملفات تعريف الارتباط
          }
        );
        // let test_id = res.data.data;
        // window.location.href = `/DashBoard/CreateQuestion/${test_id}`;
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("يرجى إدخال اسم الاختبار.");
    }
  }
  return (
    <div>DashBoard</div>
  )
}

export default DashBoard