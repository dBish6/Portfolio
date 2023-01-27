import { useState, useEffect, useRef } from "react";

// *Design Imports*
import javaScriptLogo from "../../assets/images/Javascript-shield.png";
import HTMLAndCSSLogo from "../../assets/images/pngfind.com-HTML-CSS.png";
import nodeLogo from "../../assets/images/Node.js_logo.svg.png";
import expressLogo from "../../assets/images/express-logo.png";
import ReactLogo from "../../assets/images/pngwing.com-react-logo.png";
import reduxLogo from "../../assets/images/pngwing.com-Redux.png";
import postgresLogo from "../../assets/images/pngwing.com-PostgreSql.png";
import mySqlLogo from "../../assets/images/pngwing.com-MySQL.png";
import awsLogo from "../../assets/images/aws.png";
import javaLogo from "../../assets/images/pngwing.com-java.png";
import mongoDbLogo from "../../assets/images/pngwing.com-mongodb.png";
import gitLogo from "../../assets/images/pngegg-git.png";
import gitHubLogo from "../../assets/images/Github_logo.png";
import dockerLogo from "../../assets/images/pngwing.com-Docker.png";
import figmaLogo from "../../assets/images/pngwing.com-figma.png";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import "./skillsSlider.css";

import { motion, useMotionValue } from "framer-motion";

const SkillsSlider = () => {
  const [width, setWidth] = useState(0);
  const [btnClicked, setBtnClicked] = useState(false);
  const [responsiveSlider, setResponsiveSlider] = useState(false);
  const carouselRef = useRef(null);

  const position = useMotionValue(0);

  useEffect(() => {
    carouselRef !== null &&
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
  }, [responsiveSlider]);

  // useEffect(() => {
  //   console.log(position.get(), btnClicked);
  // }, [position, btnClicked]);

  return (
    <>
      <div className="btnsContainer">
        <button
          disabled={btnClicked ? true : false}
          className="actionLeftContainer"
          onClick={() => {
            position.getPrevious() >= -941
              ? position.set(0)
              : position.set(position.get() + 941);
            setBtnClicked(true);
            setTimeout(() => {
              setBtnClicked(false);
            }, 1000);
          }}
        >
          <IoIosArrowDropleftCircle />
        </button>
        <button
          disabled={btnClicked ? true : false}
          className="actionRightContainer"
          onClick={() => {
            position.getPrevious() <= -941
              ? position.set(-1880)
              : position.set(position.get() - 941);
            setBtnClicked(true);
            setTimeout(() => {
              setBtnClicked(false);
            }, 1000);
          }}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
      <div className="sliderContainer">
        <motion.div
          drag="x"
          dragMomentum={false}
          dragConstraints={{ right: 0, left: -width }}
          // Sets new position of the slider.
          onDragEnd={(e, { offset }) => {
            position.set(position.get() + offset.x);
            // console.log("Drag End", offset);
            // console.log(position.get(), btnClicked);
            setResponsiveSlider(!responsiveSlider);
          }}
          animate={btnClicked && { x: position.get() }}
          transition={
            btnClicked && {
              duration: 1,
              type: "spring",
              stiffness: 45,
            }
          }
          className="slider"
          ref={carouselRef}
        >
          <div>
            <img
              loading="lazy"
              src={javaScriptLogo}
              alt="Javascript-shield.png"
            />
          </div>
          <div>
            <img
              loading="lazy"
              src={HTMLAndCSSLogo}
              alt="pngfind.com-HTML-CSS.png"
            />
          </div>
          <div>
            <img loading="lazy" src={nodeLogo} alt="Node.js_logo.svg.png" />
          </div>
          <div>
            <img loading="lazy" src={expressLogo} alt="express-logo.png" />
          </div>
          <div>
            <img
              loading="lazy"
              src={ReactLogo}
              alt="pngwing.com-react-logo.png"
            />
          </div>
          <div>
            <img loading="lazy" src={reduxLogo} alt="pngwing.com-Redux.png" />
          </div>
          <div>
            <img
              loading="lazy"
              src={postgresLogo}
              alt="pngwing.com-PostgreSql.png"
            />
          </div>
          <div>
            <img loading="lazy" src={mySqlLogo} alt="pngwing.com-MySQL.png" />
          </div>
          <div>
            <img loading="lazy" src={awsLogo} alt="aws.png" />
          </div>
          <div>
            <img loading="lazy" src={javaLogo} alt="pngwing.com-java.png" />
          </div>
          <div>
            <img
              loading="lazy"
              src={mongoDbLogo}
              alt="pngwing.com-mongodb.png"
            />
          </div>
          <div>
            <img loading="lazy" src={gitLogo} alt="pngegg-git.png" />
          </div>
          <div>
            <img loading="lazy" src={gitHubLogo} alt="Github_logo.png" />
          </div>
          <div>
            <img loading="lazy" src={dockerLogo} alt="pngwing.com-Docker.png" />
          </div>
          <div>
            <img loading="lazy" src={figmaLogo} alt="pngwing.com-figma.png" />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SkillsSlider;
