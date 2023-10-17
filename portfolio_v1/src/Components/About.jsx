import React from "react";
import pictureMe from "../pictureMe.JPG";

export const About = () => {
  return (
    <main>
      <div className="info-title">
        <h1>About Me</h1>
      </div>

      <div className="info-container">
        <div className="info-box1">
          <div className="info-location">
            <h3>Based:</h3>
            <p>Bay Roberts, Newfoundland</p>
          </div>
          <div className="break-thing">
            <p>...</p>
          </div>
          <div className="info-text">
            <p>
              Hello, welcome to my Portfolio that's all about me. It is not
              quite what I want it to be right now, but it will get better and
              better from here! I was always tech savvy growing up, everyone
              would ask me things about computers. So I thought I would grow on
              that ability and learn how to code. I think I have a better time
              at grasping a lot of this new information more then some of my
              classmates because of my history with computers. I am currently in
              my second semester in my Software Development course going into my
              third semester at Keyin College, St. John's Campus, and it's all
              done online of course.
            </p>
          </div>
        </div>

        <div className="info-box2">
          <h2>Interests</h2>
          <div className="info-text">
            <p>
              First off what I'm interested in doing is some kind of design job,
              a web designer or any felid that implements design in their study.
              Also, I'm interested in video games, one day I would love to make
              a game of my own. Quite frankly, I am not sure where I will end up
              at the moment.
            </p>
          </div>
          <div className="info-list">
            <h3>Hobbies:</h3>
            <ul>
              <li>Playing video games.</li>
              <li>Collecting retro video games.</li>
              <li>Basketball</li>
              <li>Skateboarding</li>
            </ul>
            <p>Me personally, I am a pretty chill guy...</p>
          </div>
          <img
            src={pictureMe}
            alt="pictureMe.JPG"
            width="99px"
            height="154px"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
