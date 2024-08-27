import React from 'react';
import backgroundImage from '../../assets/Background.jpg';
import '../css/header.css';

function Header() {
  return (
    <header className="header">
      <div className="background-container">
        <img src={backgroundImage} alt="Travel Background" />
        <div className="overlay"></div>
        <div className="content">
          <div className="logo">TravelMate</div>
          <h1 className="heading">Explore the World</h1>
          <p className="subheading">Find your dream destination</p>
          <div className="buttons">
            <button className="signup">Sign Up</button>
            <button className="login">Log In</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;