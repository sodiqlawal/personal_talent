import React from "react";
import "./css/Home/Home.css"
import { Link } from "react-router-dom"
import bannerImage from "./assets/banner-image.png";
import aboutImage from "./assets/about-image.png";
import enumeration from "./assets/enumeration.png";
import verification from "./assets/verification.png";
import disbursement from "./assets/disbursement.png";

const Home = () => {
  return (
    <div className="Home">
      {/* start nav */}

      <div className="nav">
        <p className="text">
          Talents.<span>ng</span>
        </p>
        <ul className="list">
          <li className="login"><Link to="/signin" style={{color:"#FFFFFF"}} >login</Link></li>
          <button className="signup"><Link to="/signup" style={{color:"#FFFFFF"}} >Sign up</Link></button>
        </ul>
      </div>

      {/* end nav */}

      {/* start banner */}

      <div className="banner">

        <div className="banner-left">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi at
          facere vero omnis a alias voluptas non. Dignissimos, neque fugit.
        </p>
        <button><Link to="/signup" style={{color:"#FFFFFF"}}>Sign up</Link></button>
        </div>

        <img src={bannerImage} alt="banner" className="banner-image" />

      </div>

      {/* end banner */}


      {/* start about */}
      <div className="about">

      <img src={aboutImage} alt="about" className="about-image" />

        <div className="about-right">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi at
        facere vero omnis a alias voluptas non. Dignissimos, neque fugit.
        </p>
        </div>

    </div>

      {/* end about */}



      {/* start services */}

      <section className="service-section">
        <div className="service-section_top">
          <h3>An end to end program</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus
            tempora consequuntur voluptatibus beatae, assumenda odio iste eum
            cum impedit esse accusantium quae temporibus omnis?
          </p>
        </div>
        <ul className="service-section_bottom">
          <li>
            <div>
              <img src={enumeration} alt="enumeration" className="icon" />
            </div>
            <strong>Farmer enumeration</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At modi
              laborum quidem sunt earum hic totam, non esse illo voluptate.
            </p>
          </li>
          <li>
            <div>
              <img src={verification} alt="verification" className="icon" />
            </div>
            <strong>Verification</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At modi
              laborum quidem sunt earum hic totam, non esse illo voluptate.
            </p>
          </li>
          <li>
            <div>
              <img src={disbursement} alt="disbursement" className="icon" />
            </div>
            <strong>Disbursement</strong>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At modi
              laborum quidem sunt earum hic totam, non esse illo voluptate.
            </p>
          </li>
        </ul>
      </section>

      {/* end services */}



      {/* start terms */}

      <div className="terms">

        <div className="terms-top">
            <p className="terms-note">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              labore eius, doloribus illum itaque minima ex quisquam dicta
              laudantium qui nam error eaque commodi reiciendis natus cum totam
              fugiat. In?
            </p>
          <div className="condition-container">
              <p>Terms and conditions</p>
              <p>Privacy policy</p>
          </div>
        </div>
        
      </div>

      {/* end terms */}



      {/* start footer */}

      <div className="footer">
        <p>
          @2019-2020 Powered by <span>Plax</span>
        </p>
      </div>

      {/* end footer */}
    </div>
  );
};

export default Home;
