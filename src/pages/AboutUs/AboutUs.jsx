import React from 'react';
import "./AboutUs.css";
import p14 from "../../Assets/p4.png";
function AboutUs() {
  return (
    
<div class="card">
  <img src={p14} alt="Image" class="card-image" />
  <div class="card-text">This is some text inside the card.</div>
  <div class="card-icon">
    <i class="fa fa-heart"></i> 
  </div>
</div>

  );
};

export default AboutUs;