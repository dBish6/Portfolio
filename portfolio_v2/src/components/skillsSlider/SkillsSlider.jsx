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
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import "./skillsSlider.css";

import { motion } from "framer-motion";

const SkillsSlider = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);
  const [rightBtnClicked, setRightBtnClicked] = useState(0);

  useEffect(() => {
    carouselRef.current.style.transform =
      "translateX(0px) translateY(0px) translateZ(0px)";
    // console.log(carouselRef.current.style.scrollWidth);
    carouselRef !== null &&
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
  }, []);

  const moveWithBtn = () => {
    console.log(carouselRef.current.offsetWidth);
    // FIXME: Disable at certain width.
    // console.log(carouselRef.current.scrollWidth);
    let currentWidth = carouselRef.current.style.transform;
    console.log(currentWidth);

    const getX = currentWidth.match(/\(([^)]+)\)/g);
    console.log(getX);
    if (getX) var x = getX[0];
    console.log(x);

    // Starting Position
    if (x.length < 6) {
      x = x.slice(1, 2);
      console.log(x);
      x = parseInt(x);
      console.log(x);
    } else if (x.length < 13) {
      x = x.slice(1, 9);
      console.log(x);
      x = parseInt(x);
      console.log(x);
    }

    let timesBtnClicked = rightBtnClicked + 1;
    setRightBtnClicked(timesBtnClicked);
    console.log("hello " + rightBtnClicked);

    // Starting Position
    if (rightBtnClicked === 0) {
      carouselRef.current.style.transform =
        "translateX(-727px) translateY(0px) translateZ(0px)";
    }
    // if (x >= -363) {
    //   carouselRef.current.style.transform =
    //     "translateX(-363px) translateY(0px) translateZ(0px)";
    // }
    // else if (rightBtnClicked === 1) {
    //   carouselRef.current.style.right = "60%";
    // } else if (rightBtnClicked === 2) {
    //   carouselRef.current.style.right = "81.87%";
    // }
  };

  return (
    <>
      <div className="btnsContainer">
        <button className="actionLeftContainer">
          <IoIosArrowDropleftCircle />
        </button>
        <button className="actionRightContainer" onClick={() => moveWithBtn()}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
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
