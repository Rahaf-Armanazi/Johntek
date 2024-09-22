          import React from 'react'
          import "./"
          const footer = () => {
            return (
              <div>
              <div className="footer">
         
            <div className="d1">
              <Link to="#" className="linkk">
                <h3>Johntek Valves</h3>
              </Link>
              <Link to="/about us" className="linkk">
                <h3>About Us</h3>
              </Link>
            </div>
            <div className="d1">
              <Link to="/Terms of service" className="linkk">
                <h3>Terms of service</h3>
              </Link>
              <Link to="/Privacy policy" className="linkk">
                <h3>Privacy policy</h3>
              </Link>
            </div>
            
            {/* <div style={{display:"flex"}}> */}
            <div className="d1">
              <p>Contact Us:</p>
              <Link to="jsdfgksdgh@gmail.com" className="linkk">
                <h5>jsdfgksdgh@gmail.com</h5>
              </Link>
              <Link to="jsdfgksdgh@gmail.com" className="linkk">
                <h5>jsdfgksdgh@gmail.com</h5>
              </Link>
              <Link to="jsdfgksdgh@gmail.com" className="linkk">
                <h5>jsdfgksdgh@gmail.com</h5>
              </Link>
            </div>
            <div>
              <Link to="+0981398162735" className="linkk">
                <h3>+0981398162735</h3>
              </Link>
            </div>
            {/* </div> */}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding:"0 20px"}}>
          <h3>JohntekValves.com © 2024 All Rights Reserved. </h3>
          <h3>made by RAYS_Tech</h3>
        </div>
              </div>
            )
          }
          
          export default footer
          