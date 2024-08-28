import React from 'react';
import '../css/footer.css';
import logo1 from '../../assets/Logo1.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo1} alt="Flight Logo" />
          <p>Easy to Fly</p>
        </div>
        <div className="footer-links">
          <h3>Book with us</h3>
          <ul>
            <li><a href="#">Airlines we ticket</a></li>
            <li><a href="#">Buy now, pay later</a></li>
            <li><a href="#">Pay the way you want</a></li>
            <li><a href="#">You're protected</a></li>
            <li><a href="#">Our customer service</a></li>
            <li><a href="#">Travel agents</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>My booking</h3>
          <ul>
            <li><a href="#">Manage my booking</a></li>
            <li><a href="#">Help centre</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Travel advice</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Media centre</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="footer-bottom">
          <p>Privacy | Terms | Sitemap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
