import Image from "next/image";
import "./Navbar.css";
import logoIcon from "../Images/mortar.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        
            <div className="mainNavbar">
            <div className="headings">
              <Image className="logo" src={logoIcon} />
              <h2 className="heading">Al-SHIFA HOMEOPATHY PVT.LTD</h2>
              </div>
            <h5 className="heading2">
              MULTI SPECIALITY RESEARCH & TREATMENT CENTRE
            </h5>
            <h6 className="heading3">the curative line of treatment</h6>
            
          </div>
         
          
       
        <ul className="menubar">



          <ol>Home</ol>
          <ol>About Us</ol>
          <ol>Dr Tayyab Mushtaq</ol>
          <ol>Treaments</ol>
          <ol>Consultation</ol>
          <ol>Resources</ol>
          <ol>Clinic</ol>
          <ol>Contact Us</ol>
          <ol>Franchise Oppurtunity</ol>
          <Link href={"/login"}>
          <ol className="olTag">Login</ol>

          </Link>


        {/* <ol className="col-lg offset-2">Home</ol>
        <ol className="col-lg">About Us</ol>
        <ol className="drName col-lg ">Dr Tayyab Mushtaq</ol>
        <ol className="col-lg">Treaments</ol>
        <ol className="col-lg">Consultation</ol>
        <ol className="col-lg">Resources</ol>
        <ol className="col-lg">Clinic</ol>
        <ol className="col-lg">Contact Us</ol>
        <ol className="col-lg">Franchise Oppurtunity</ol>
        <ol className="col-lg">Login</ol>  */}
        </ul>
     
        </div>
    </>
  );
};

export default Navbar;
