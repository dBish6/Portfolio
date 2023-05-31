import { content } from "../../utils/applicationContent";

// *Design Imports*
import { ImGithub } from "react-icons/im";
import "./appCard.css";

const AppCard = ({ LazyLoadImage }) => {
  return (
    <div className="cardContainer">
      {content.map((value) => {
        return (
          <div aria-label="Application Card" className="card" key={value.id}>
            <LazyLoadImage
              src={value.screenshot}
              alt={value.alt}
              effect="blur"
            />
            <h3>{value.title}</h3>
            <div aria-label="Application Information" className="cardInfo">
              <p aria-label="Tech Stack">{value.tech}</p>
              <p aria-label="Date">{value.date}</p>
              {value.deployed_URL ? (
                <div>
                  <a
                    aria-label="Github Repository"
                    href={value.gitHub_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                  <span>|</span>
                  <a
                    aria-label="Application URL"
                    href={value.deployed_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Website
                  </a>
                </div>
              ) : (
                <div>
                  <a
                    aria-label="Github Repository"
                    href={value.gitHub_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppCard;
