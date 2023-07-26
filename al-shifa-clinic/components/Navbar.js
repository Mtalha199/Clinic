import Image from "next/image";
import "../components/Navbar.css"
import logoIcon from "../Images/mortar.png"

const Navbar = () => {
    return ( 

        <>
        
        <div className="main">
            <div className="headings">
            <Image className="logo" src={logoIcon} />
        <h2 className="heading">Al-SHIFA HOMEOPATHY PVT.LTD</h2></div>
        <h5 className="heading2">MULTI SPECIALITY RESEARCH & TREATMENT CENTRE</h5>
        <h6 className="heading3">the curative line of treatment</h6>
        <ul className="menuOfsite">
        <ol className="homeMenu">Home</ol>
        <ol>About Us</ol>
        <ol>Dr Tayyab Mushtaq</ol>
        <ol>Treaments</ol>
        <ol>Consultation</ol>
        <ol>Resources</ol>
        <ol>Clinic Locator</ol>
        <ol>Contact Us</ol>
        <ol>Franchise Oppurtunity</ol>
        <ol>Blog</ol>
        <ol>Login</ol>
        {/* <ol>Home</ol> */}

        </ul>
        {/* <button type="button" className="btn btn-success">Success</button> */}


           
        </div>
        </>
     );
}
 
export default Navbar;