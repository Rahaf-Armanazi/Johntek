import React from 'react'
import Header from '../../components/Header/Header'
import ProductUser from '../../components/CardProductUser/ProductUser'
import Footer from '../../components/Footer/Footer'
import "./Product.css"
const Product = () => {
  return (
    <div className='app-container'>
      <Header/>
      <div style={{flex:"1" ,marginTop:"10%"}}>
      <ProductUser/>
      </div> 
      <Footer/>
    </div>
  )
}

export default Product