import React from "react";

import './header.style.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img src="./img/logo.png" alt="Logo" className="logo" />
      </div>
      <h1 className="title">Userly</h1>      
    </div>
  )
}

export default Header;