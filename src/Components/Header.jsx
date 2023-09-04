import React from 'react'

import image1 from "../assets/Luxlogo.png"

const Header = ({ Subtitle }) => {
   

        
  const customTextStyle = {
    color: "orange",

  };
  return (
    <header className="row">
      {" "}
      <div className="col-md-5">
        <img className="image-fluid rounded mt-5" style={{width:"100px",height:"100px"}}  src={image1} alt="Logo" />
        <p className="text-uppercase" color="black">LuxSolace Dwellings</p>
      </div>
      <div className="col-md-7 mt-5 fst-italic fs-2">
        <p style={customTextStyle}>{Subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
