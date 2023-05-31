import { useState, useEffect, useRef } from "react";

// *Design Imports*
import skillImages from "../../utils/skillImages";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import "./skillsSlider.css";

import { motion, useMotionValue } from "framer-motion";

const SkillsSlider = ({ LazyLoadImage }) => {
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
          aria-label="Go Left"
          aria-disabled={btnClicked ? "true" : "false"}
          disabled={btnClicked ? true : false}
          className="actionLeftContainer"
          onClick={() => {
            if (window.innerWidth > 780) {
              position.getPrevious() >= -628
                ? position.set(0)
                : position.set(position.get() + 628);
            } else {
              position.getPrevious() >= -390
                ? position.set(0)
                : position.set(position.get() + 314);
            }
            setBtnClicked(true);
            setResponsiveSlider(!responsiveSlider);
            setTimeout(() => {
              setBtnClicked(false);
            }, 1000);
          }}
        >
          <IoIosArrowDropleftCircle />
        </button>
        <button
          aria-label="Go Right"
          aria-disabled={btnClicked ? "true" : "false"}
          disabled={btnClicked ? true : false}
          className="actionRightContainer"
          onClick={() => {
            if (window.innerWidth > 780) {
              position.getPrevious() <= -1254
                ? position.set(-width)
                : position.set(position.get() - 628);
            } else {
              position.getPrevious() <= -2274
                ? position.set(-width)
                : position.set(position.get() - 314);
            }
            setBtnClicked(true);
            setResponsiveSlider(!responsiveSlider);
            setTimeout(() => {
              setBtnClicked(false);
            }, 1000);
          }}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
      <div aria-label="Skills Slider Container" className="sliderContainer">
        <motion.div
          aria-label="Skills Slider"
          drag="x"
          dragElastic={0.2}
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{
            type: "inertia",
            power: 0.2,
          }}
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
          {skillImages.map((image) => (
            <div key={image.alt}>
              <LazyLoadImage src={image.src} alt={image.alt} effect="blur" />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SkillsSlider;
