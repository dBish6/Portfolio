// *Custom Hooks Imports*
import useDocumentTitle from "../hooks/useDocumentTitle";

// *Component Imports*
import Carousel from "../components/carousel/Carousel";
import SkillsSlider from "../components/skillsSlider/SkillsSlider";
import ProjectCard from "../components/appCard/AppCard";
import Services from "../components/services/Services";

// *Design Imports*
import "./home.css";

const Home = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <>
      <section className="colouredSection">
        <div className="carouselContainer">
          <Carousel />
        </div>
      </section>
      <section className="UpAndComingContainer gridContainer" id="skills">
        <div className="title">
          <h1>Up and Coming Full-Stack Developer!</h1>
          <p>
            This is what I am striving to be, a full-stack developer! I can
            already make a entire full-stack application and I love designing
            them when I am making these applications. I would like to be in with
            the designing process because I think I have a knack for designing.
            As a new developer, I think, my designs are good for the level I'm
            currently at, I can only get better and better from here!
          </p>
          <p>
            Many skills from the latest technologies I developed over the course
            of my short coding journey thus far; view them below.
          </p>
        </div>
        <SkillsSlider />
      </section>
      <section
        className="colouredSection applicationsContainer gridContainer"
        id="repositories"
      >
        <div className="title">
          <h1>Applications</h1>
          <p>
            Here are my latest applications and full-stack applications, each
            reflecting my growing skills and experience. Check out their GitHub
            repository below for more info or click "view website", if
            available.
          </p>
        </div>
        <ProjectCard />
      </section>
      <section className="servicesContainer" id="services">
        <div className="servicesTitle">
          <h1>Services</h1>
        </div>
        <Services />
      </section>
    </>
  );
};

export default Home;
