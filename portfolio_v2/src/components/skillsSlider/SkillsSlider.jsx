import { useState, useEffect, useRef } from "react";

// *Design Imports*
import javaScriptLogo from "../../assets/images/Javascript-shield.png";
import HTMLAndCSSLogo from "../../assets/images/pngfind.com-HTML-CSS.png";
import nodeLogo from "../../assets/images/Node.js_logo.svg.png";
import ReactLogo from "../../assets/images/pngwing.com-react-logo.png";
import postgresLogo from "../../assets/images/pngwing.com-PostgreSql.png";
import mySqlLogo from "../../assets/images/pngwing.com-MySQL.png";
import awsLogo from "../../assets/images/aws.png";
import javaLogo from "../../assets/images/pngwing.com-java.png";
import mongoDbLogo from "../../assets/images/pngwing.com-mongodb.png";
import gitLogo from "../../assets/images/pngegg-git.png";
import gitHubLogo from "../../assets/images/Github_logo.png";
import dockerLogo from "../../assets/images/pngwing.com-Docker.png";
import "./skillsSlider.css";

import { motion } from "framer-motion";

const SkillsSlider = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    carouselRef.current.style.transform =
      "translateX(0px) translateY(0px) translateZ(0px)";
    // console.log(carouselRef.current.style.scrollWidth);
    carouselRef !== null &&
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
  }, []);

  return (
    <>
      <div className="sliderContainer">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="slider"
          ref={carouselRef}
        >
          <div>
            <img src={javaScriptLogo} alt="Javascript-shield.png" />
          </div>
          <div>
            <img src={HTMLAndCSSLogo} alt="pngfind.com-HTML-CSS.png" />
          </div>
          <div>
            <img src={nodeLogo} alt="Node.js_logo.svg.png" />
          </div>
          <div>
            <img src={ReactLogo} alt="pngwing.com-react-logo.png" />
          </div>
          <div>
            <img src={postgresLogo} alt="pngwing.com-PostgreSql.png" />
          </div>
          <div>
            <img src={mySqlLogo} alt="pngwing.com-MySQL.png" />
          </div>
          <div>
            <img src={awsLogo} alt="aws.png" />
          </div>
          <div>
            <img src={javaLogo} alt="pngwing.com-java.png" />
          </div>
          <div>
            <img src={mongoDbLogo} alt="pngwing.com-mongodb.png" />
          </div>
          <div>
            <img src={gitLogo} alt="pngegg-git.png" />
          </div>
          <div>
            <img src={gitHubLogo} alt="Github_logo.png" />
          </div>
          <div>
            <img src={dockerLogo} alt="pngwing.com-Docker.png" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SkillsSlider;
