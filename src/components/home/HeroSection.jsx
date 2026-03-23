import "./HeroSection.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
         <div className="hero-text">
  <h1 className="hero-title animate-line delay-1">
    राजकीय पॉलिटेक्निक सहजनवां गोरखपुर
  </h1>

  <p className="hero-tagline typing">
  शिक्षा, नवाचार एवं अनुसंधान में उत्कृष्टता
</p>


  <p className="hero-description animate-line delay-3">
         शैक्षणिक उत्कृष्टता, नवाचार और सर्वांगीण विकास के लिए समर्पित एक प्रमुख संस्थान। हमारे शिक्षार्थियों, विचारकों और भावी नेताओं के जीवंत समुदाय से जुड़ें और भविष्य का निर्माण करें।
    </p>

  <div className="hero-buttons animate-line delay-4">
    <a  onClick={() => navigate("/admission")} className="btn btn-primary">Apply Now</a>
    <a  onClick={() => navigate("/about")}className="btn btn-secondary">Learn More</a>
  </div>
</div>

          <div className="hero-image">
            <img 
              src="images/main gate.png" 
              alt="College Campus" 
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;