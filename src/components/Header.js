import { useState } from "react";
import { Link } from "react-router-dom";
import useOnLineStatus from "../utils/useOnlineStatus";

const Header =()=>{
    let [btnReact,setBtnReact]= useState("Login");
    const onlineStatus =useOnLineStatus();
    return(
        <div className="header">
        <div className="logo">
         <img id="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU" />
        </div>
         <div className="navBar">
          <ul>
             <li>Online:{onlineStatus?"🟢":"🔴"}</li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Cart</li>
              <button className="login" 
              onClick={()=>{
              btnReact==="Login"?setBtnReact("Logout"):setBtnReact("Login");
              }}
              >{btnReact}</button>
          </ul>
         </div>
          </div>
    )
}
export default Header;