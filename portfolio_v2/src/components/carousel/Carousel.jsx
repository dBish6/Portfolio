import { useState, useRef } from "react";

// *Design Imports*
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import personIllustration from "../../assets/images/person-illustration.png";
import pictureMe from "../../assets/images/pictureMe.JPG";
import "./carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(1);
  const slideshowRef = useRef(null);
  const [move, setMove] = useState(false);

  const handlePrevious = () => {
    setMove(true);

    const newIndex = index - 1;
    setIndex(index <= 1 ? 3 : newIndex);
    console.log(index);
    setTimeout(() => {
      setMove(false);
    }, 1000);
  };

  const handleNext = () => {
    setMove(true);

    const newIndex = index + 1;
    setIndex(index >= 3 ? 1 : newIndex);
    console.log(index);
    setTimeout(() => {
      setMove(false);
    }, 1000);
  };

  return (
    <>
      <div
        className={move ? "flexContainer fade" : "flexContainer"}
        ref={slideshowRef}
      >
        <div className="arrowLeftContainer">
          <SlArrowLeft className="arrowLeft" onClick={() => handlePrevious()} />
        </div>
        <div className="gridSplit">
          {index === 1 ? (
            <div className="carouselContent" id="about">
              <h1>About Me</h1>
              <p>
                Hello! My name is <b>David Bishop</b>, nice to meet you.
                Currently, I am <b>20</b> years of age and I'm a fresh graduate
                from my Software Development course at Keyin College where we
                learned about several different coding languages; Python,
                Javascript, Java, NodeJS, Sql, etc. The course really gives you
                an insight into the tech field and a feel of what's to come. We
                learned about full-stack and that is what I will strive to be, a
                full-stack developer. I found love and passion in making
                full-stack applications especially <b>designing</b> them. I
                think I have a natural knack for design, ever since I was a kid
                I thought I was creative. I also think I have the ability to be
                a leader, I set up all the projects for the team of our sprint
                projects at school. I have knowledge of agile principles, I was
                basically the scrum master. On a side note, I'm also interested
                in learning mobile development, not just web, but that's not on
                my schedule right now. Basically, I want to be able to code
                through the development lifecycle, although I am interested in
                the designing phase. Currently, learning more about ReactJS, I'm
                really interested in developing with React, and a back-end
                language; Java. Check out my GitHub if you have the time, it has
                many projects -{" "}
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
            <div className="carouselContent" id="personal">
              <h1>Personal</h1>
              <p>
                Personally, I am a pretty chill guy, a humble genuine dude
                really. I like playing video games in my spare time, just like a
                nerd should. I love basketball, I played it in high school, I
                did with a lot of sports like, of course, hockey. I have been
                skateboarding when it is warmer now too, but mostly I just code
                until it gets late or something. I was always tech-savvy growing
                up, everyone would ask me things about computers. That's what
                ultimately brought me to here and my creativity will hopefully
                lead the way, I'm always thinking of something.
              </p>
            </div>
          ) : index === 3 ? (
            <div className="carouselContent" id="projects">
              <h1>Projects</h1>
              <p>
                Ah yes, the projects tab up there is some of my smaller
                projects, they have their own GitHub repository, but I wanted to
                feature them on my Portfolio. Feel free to take a look, they're
                probably not too exciting, but I worked very hard on them and I
                think they are impressive for the level I'm currently at. I hope
                you can like them too and be inspired!
              </p>
            </div>
          ) : undefined}
          <div className="carouselRightSide">
            {index === 1 ? (
              <>
                <p>Bay Roberts, Newfoundland CA</p>
                <p>
                  Full-Stack Software Development <br /> Keyin College
                  <br /> Sep 2021 — Dec
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
            ) : undefined}
          </div>
        </div>
        <div className="arrowRightContainer">
          <SlArrowRight className="arrowRight" onClick={() => handleNext()} />
        </div>
      </div>
      <div className="indexContainer">
        <div className={index === 1 ? "indexActive" : "indexIndicator"}></div>
        <div className={index === 2 ? "indexActive" : "indexIndicator"}></div>
        <div className={index === 3 ? "indexActive" : "indexIndicator"}></div>
      </div>
    </>
  );
};

export default Carousel;
