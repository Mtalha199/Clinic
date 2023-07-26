import appointmentImage from "../../Images/Dr.jpg"
// import Head from "next/head";
import Image from "next/image";
import "../app/page.css"

export default function Home() {
  return (
    <div className="main-Home">
        {/* <Image src={appointmentImage}  /> */}
  {/* <Image src={appointmentImage} className="appointment-Image"/> */}
    {/* <h1>Hello</h1> */}
    <Image src={appointmentImage} className="img-circle" alt="Cinque Terre" width="1800" height="600"></Image>
    <h1 className="clinicApointment">AL SHIFA HOMEOPATHY</h1>
    <p className="clinicDes">Has treated more than over 50000+ patients with our Curative line of <br></br> treatment</p>
    <div className="finalAppointment">
      <h2>Call For Consultation</h2>
      <p>Dail Now</p>
      <h2>03334701650</h2>
    </div>
        {/* <button type="button" className="btn btn-success">Success</button> */}

    </div>
  

  )
}
