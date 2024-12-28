import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h2>Elevate Your Shopping Experience</h2>
      <p>Download the Glamelane App for Exclusive Offers and Seamless Browsing</p>
      <div className="app-download-platforms">
        <div className="platform">
          <img src={assets.play_store} alt="Google Play Store" />
          <span>Available Now</span>
        </div>
        <div className="platform coming-soon">
          <img src={assets.app_store} alt="Apple App Store" />
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
