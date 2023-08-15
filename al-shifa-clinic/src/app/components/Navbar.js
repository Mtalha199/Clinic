"use client";
import Image from "next/image";
import "./Navbar.css";
import logoIcon from "../Images/mortar.png";
import Link from "next/link";
import hambuger from "../Images/Hamburger.png"
import union from "../Images/Union.png"
import { useState } from "react";


const Navbar = () => {
  const [menuVisible,setMenuVisible]=useState(false);
  const [humburger,setHumburger]=useState(true)
const handleShow=()=>{
  setMenuVisible(!menuVisible)
  setHumburger(!humburger)
}
  return (
    <>
      <div className="container">
        
            <div className="mainNavbar">
            <div className="headings">
              <Image className="logo" src={logoIcon} />
              <h2 className="heading">Al-SHIFA HOMEOPATHY PVT.LTD</h2>
              </div>
            <h5 className="heading2">
              MULTI SPECIALITY RESEARCH & TREATMENT CENTRE
            </h5>
            <h6 className="heading3">the curative line of treatment</h6>

            
            {
              humburger ? (
                <button onClick={handleShow} className="humburgerButton">
                <Image src={hambuger}  alt=""/>
                     </button>
              ) :(

                  <button className="humburgerButton" onClick={handleShow}>
                  <Image src={union}  alt="" />
                 </button>
              )
            }
             {
              menuVisible && (
                <ul className="rightNav">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Dr Tayyab Mushtaq</li>
                  <li>Treaments</li>
                  <li>Consultation</li>
                  <li>Resources</li>
                  <li>Clinic</li>
                  <li>Contact Us</li>
                  <li>Franchise Oppurtunity</li>
                  <Link href={"/login"}>
                  <li className="olTag">Login</li>
        
                  </Link>
                  </ul>
              )
            }

                 
            
          </div>
         
          

  
     
        </div>
    </>
  );
};

export default Navbar;
