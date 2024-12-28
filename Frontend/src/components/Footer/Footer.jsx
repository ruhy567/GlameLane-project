//footer.jsx
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.logo} alt="Company Logo" className="footer-logo"/> */}
          <Link to='/' className='logo'>
  <span style={{ color: 'orange', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
    GlameLane
  </span>
</Link>
          <p>
            Discover the latest trends and styles with us. Elevate your wardrobe with curated fashion essentials designed to fit your personality and lifestyle.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91-1234-5678</li>
            <li>contact@fashionstore.com</li>
          </ul>
        </div>
      </div>
      
      <hr />

      <p className="footer-copyright">
        Copyright &copy; {new Date().getFullYear()} FashionStore.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;