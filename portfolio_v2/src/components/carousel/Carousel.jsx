import { useState, useRef } from "react";

// *Design Imports*
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import personIllustration from "../../assets/images/person-illustration.png";
import pictureMe from "../../assets/images/pictureMe.JPG";
import todoScreenshot from "../../assets/images/Todo-Project-Screenshot.png";
import calculatorScreenshot from "../../assets/images/Calculator-Project-Screenshot.png";
import quizScreenshot from "../../assets/images/Quiz-Project-Screenshot.png";
import blackjackScreenshot from "../../assets/images/Davy-Blackjack-Screenshot.png";
import { motion, AnimatePresence } from "framer-motion";
import "./carousel.css";

const Carousel = ({ LazyLoadImage }) => {
  const [index, setIndex] = useState(1);
  const slideshowRef = useRef(null);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          key={index}
          className="flexContainer"
          ref={slideshowRef}
        >
          <div
            role="presentation"
            className="arrowLeftContainer"
            onClick={() => setIndex(index <= 1 ? 3 : index - 1)}
          >
            <span
              tabIndex="0"
              aria-label="Go Left"
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  document.querySelector(".arrowLeftContainer").click();
                }
              }}
            >
              <SlArrowLeft aria-label="Left Arrow Icon" className="arrowLeft" />
            </span>
          </div>
          <div className="gridSplit">
            {index === 1 ? (
              <div
                aria-label="About Content"
                className="carouselContent"
                id="about"
              >
                <h1>About Me</h1>
                <p aria-label="About Text">
                  Hello! My name is <b>David Bishop</b>, nice to meet you.
                  Currently, I am <b>20</b> years of age and I am a recent
                  graduate from the Software Development course at Keyin College
                  in 2022. During my time at Keyin College, I learned several
                  different coding languages, including Javascript, Java,
                  NodeJS, SQL, and more. From a young age, I've always
                  considered myself a <b>creative</b> person, and that has led
                  me to find passion in <b>full-stack</b> development. I found
                  love and passion in <b>designing</b> and creating full-stack
                  applications, and I believe that I have a natural knack for
                  designing these applications. This love for creating and
                  designing software has only grown since I started my learning
                  journey, and I'm <b>eager</b> to continue exploring and
                  expanding my skills in this area. I am always brewing up some
                  idea into fruition and the quality only gets better and
                  better, I learn by doing. I have uploaded my applications on
                  GitHub, and I would be thrilled if you could take at them.
                  Scroll down to the applications section or click the link;{" "}
                  <a
                    href="https://github.com/dBish6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/dBish6
                  </a>
                  .
                </p>
              </div>
            ) : index === 2 ? (
              <div
                aria-label="Personal Content"
                className="carouselContent"
                id="personal"
              >
                <h1>Personal</h1>
                <p aria-label="Personal Text">
                  Personally, I am a pretty chill guy, a humble genuine dude
                  really. I like playing video games in my spare time, just like
                  a nerd should. I love basketball, I played it in high school,
                  I did with a lot of sports like, of course, hockey. I have
                  been skateboarding when it is warmer now too, but mostly I
                  just code until it gets late or something. I was always
                  tech-savvy growing up, everyone would ask me things about
                  computers. That's what ultimately brought me to here and my
                  creativity will hopefully lead the way, I'm always thinking of
                  something.
                </p>
              </div>
            ) : index === 3 ? (
              <div
                aria-label="Projects Content"
                className="carouselContent"
                id="projects"
              >
                <h1>Projects</h1>
                <p aria-label="Projects Text">
                  Ah yes, the projects tab up there is some of my other projects
                  or a project from one of my bigger applications, they have
                  their own GitHub repository, but I wanted to feature them on
                  my Portfolio. It also shows my progress because it goes from
                  early to new, the first link on top is the earliest. So, feel
                  free to take a look, the earliest ones are probably not too
                  exciting, but I worked very hard on them and I think it is
                  impressive by showing how much I grown. I hope you like them
                  and get inspired by my work!
                </p>
              </div>
            ) : undefined}
            <div
              className={
                index === 1
                  ? "carouselRightSide index1"
                  : index === 2
                  ? "carouselRightSide index2"
                  : index === 3
                  ? "carouselRightSide index3"
                  : "carouselRightSide"
              }
            >
              {index === 1 ? (
                <>
                  <p aria-label="Location">Bay Roberts, Newfoundland CA</p>
                  <p aria-label="School">
                    Full-Stack Software Development <br /> Keyin College
                    <br /> Sep 2021 — Dec 2022
                  </p>
                  <div>
                    <img
                      className="personImg"
                      src={personIllustration}
                      alt="person-illustration.png"
                    />
                  </div>
                </>
              ) : index === 2 ? (
                <div>
                  <img
                    className="pictureMe"
                    src={pictureMe}
                    alt="pictureMe.JPG"
                  ></img>
                </div>
              ) : index === 3 ? (
                <>
                  <div className="movingRow">
                    <img
                      src={todoScreenshot}
                      alt="Todo-Project-Screenshot.png"
                    />
                    <img
                      src={calculatorScreenshot}
                      alt="Calculator-Project-Screenshot.png"
                    />
                    <img
                      src={quizScreenshot}
                      alt="Quiz-Project-Screenshot.png"
                    />
                    <img
                      src={blackjackScreenshot}
                      alt="Quiz-Project-Screenshot.png"
                    />
                  </div>
                  <div className="movingRow">
                    <img
                      src={todoScreenshot}
                      alt="Todo-Project-Screenshot.png"
                    />
                    <img
                      src={calculatorScreenshot}
                      alt="Calculator-Project-Screenshot.png"
                    />
                    <img
                      src={quizScreenshot}
                      alt="Quiz-Project-Screenshot.png"
                    />
                    <img
                      src={blackjackScreenshot}
                      alt="Quiz-Project-Screenshot.png"
                    />
                  </div>
                </>
              ) : undefined}
            </div>
          </div>
          <div
            role="presentation"
            className="arrowRightContainer"
            onClick={() => setIndex(index >= 3 ? 1 : index + 1)}
          >
            <span
              tabIndex="0"
              aria-label="Go Right"
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  document.querySelector(".arrowLeftContainer").click();
                }
              }}
            >
              <SlArrowRight
                aria-label="Right Arrow Icon"
                className="arrowRight"
              />
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="indexContainer">
        <div className={index === 1 ? "indexActive" : "indexIndicator"}></div>
        <div className={index === 2 ? "indexActive" : "indexIndicator"}></div>
        <div className={index === 3 ? "indexActive" : "indexIndicator"}></div>
      </div>
    </>
  );
};

export default Carousel;
