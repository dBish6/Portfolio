import { content } from "../../applicationContent";

// *Design Imports*
import { ImGithub } from "react-icons/im";
import "./appCard.css";

const AppCard = () => {
  return (
    <div className="cardContainer">
      {content.map((value) => {
        return (
          <div className="card" key={value.id}>
            <img loading="lazy" src={value.screenshot} alt="" />
            <h3>{value.title}</h3>
            <div className="cardInfo">
              <p>{value.tech}</p>
              <p>{value.date}</p>
              {value.deployed_URL ? (
                <div>
                  <a
                    href={value.gitHub_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                  <span>|</span>
                  <a
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
