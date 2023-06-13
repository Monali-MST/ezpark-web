import React from 'react'
import NavBar from "../../Components/NavBar/NavBar";
import MyImage from "../../Assets/About_Img.jpg";

const AboutUsPage = () => {
  return (
    <div>
      <NavBar/>
     
      <div
          style={{
            backgroundImage: `url(${MyImage})`,
            backgroundSize: "cover",
            height: "25vh",
          
            
          }}
          
        >

    </div>
    </div>
  )
}

export default AboutUsPage
