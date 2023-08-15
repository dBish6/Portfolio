// *Custom Hooks Imports*
import useDocumentTitle from "../hooks/useDocumentTitle";

// *Component Imports*
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      <section aria-label="About Section" className="colouredSection">
        <div className="carouselContainer">
          <Carousel />
        </div>
      </section>
      <section
        aria-label="Skills Section"
        className="UpAndComingContainer gridContainer"
        id="skills"
      >
        <div className="title">
          <h2>Up and Coming Full-Stack Developer!</h2>
          <p>
            I am striving to become a full-stack developer, and I have already
            accomplished significant milestones in this journey. I can
            confidently build entire full-stack applications, and I particularly
            enjoy the design aspect of the development process. I have a natural
            knack for designing, and I aspire to be involved in the design phase
            of projects. As a newer developer, I am proud of the quality of my
            designs, considering my current level of experience. Additionally, I
            am focused on continually enhancing my skills and knowledge in
            user-centered design and UX principles.
          </p>
          <p>
            Throughout my coding journey, I have acquired a diverse range of
            skills in the latest technologies. View them below.
          </p>
        </div>
        <SkillsSlider LazyLoadImage={LazyLoadImage} />
      </section>
      <section
        aria-label="Applications Section"
        className="colouredSection applicationsContainer gridContainer"
        id="repositories"
      >
        <div className="title">
          <h2>Applications</h2>
          <p>
            Here are my latest applications and full-stack applications, each
            reflecting my growing skills and experience. Check out their GitHub
            repository below for more info or click "view website", if
            available.
          </p>
        </div>
        <ProjectCard LazyLoadImage={LazyLoadImage} />
      </section>
      <section
        aria-label="Services Section"
        className="servicesContainer"
        id="services"
      >
        <div className="servicesTitle">
          <h2>Services</h2>
        </div>
        <Services LazyLoadImage={LazyLoadImage} />
      </section>
    </>
  );
};

export default Home;
