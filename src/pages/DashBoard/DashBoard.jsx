import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import AddProduct from "../../components/AddProduct/AddProduct";
import "./Dashboard.css";
import ProductUser from "../../components/CardProductUser/ProductUser";

function DashBoard() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:"17%"}}>
      <AddProduct/>
      </div>
      {/* <Card/>
      <Card/> */}
      <ProductUser/>
      <Footer/>
    </div>
  )
}

export default DashBoard