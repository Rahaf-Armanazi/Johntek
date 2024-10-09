import axios from "axios";
import React , { useState } from "react";

export const Delete = (props) => {

  const [prodinfo,SetProdInfo]=useState([]);
  
  const deleteprod = async (id) => {
    try {
      await axios.delete(`/delete/${id}`);
      SetProdInfo(prodinfo.filter((element) => element.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1> Are you sure you want top delete this product ???</h1>
      <form>
        <button className="btnSub" onClick={() => deleteprod(`${props.id}`)}>
        yes </button>
        <button onClick={props.closedelete}> No </button>
      </form>
    </div>
  );
};
