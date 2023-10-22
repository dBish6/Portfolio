import "./ux.css";
import GoogleUxProject1 from "../../components/caseStudy/GoogleUxProject1";
import GoogleUxProject2 from "../../components/caseStudy/GoogleUxProject2";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Ux = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <>
      <section className="projectSection project1 gridContainer colouredSection">
        <div className="title">
          <h2>Google UX Design Certificate Project 1</h2>
          <p>
            Welcome to my User Experience (UX) course project showcase. This is
            the first course project where they randomly selected something for
            me to design and I got a Sandwich Shop, now known as{" "}
            <b>"Fresh Bites"</b>. To learn more, view the following case study
            below as it goes through my design thinking process, hope you like
            it! For mobile users, I recommend accessing the case study deck
            directly via this link, as the frame may be too small to see
            properly:{" "}
            <a
              href="https://docs.google.com/presentation/d/e/2PACX-1vTWvXmx3SKRL4XRYnNfyJUMzuB3c0gfcnTjtGdWRhasM7FtJwE83LIDQts4kSiaIS_HYNeG2pX32dX4/pub?start=false&loop=false&delayms=10000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fresh Bites Case Study
            </a>
            .
          </p>
        </div>
        <h3>Case Study</h3>
        <GoogleUxProject1 />
      </section>
      <section className="projectSection project2 gridContainer">
        <div className="title">
          <h2>Google UX Design Certificate Project 2</h2>
          <p>
            This is the second course project where I designed a responsive web
            app called <b>"Quest Casino"</b>. This time we got to choose what we
            wanted to design and I felt that this is a good opportunity to fully
            overhaul my current Quest Casino app. I will later develop this new
            version of Quest Casino, but for the meantime, here is the re-design
            of Quest Casino! I think it is a significant enhancement, view the
            case study below for a behind the scenes look at my design thinking
            process. For mobile users, I recommend accessing the case study deck
            directly via this link, as the frame may be too small to see
            properly:{" "}
            <a
              href="https://docs.google.com/presentation/d/e/2PACX-1vQWS73vgA-1m0UCSV9oWCa0WXlLq7C9Jcao90VMtvpPHQY3-BO-POTPL6e76zLQNZTkvRMg6Gdy1G8E/pub?start=false&loop=false&delayms=10000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quest Casino Case Study
            </a>
            .
          </p>
        </div>
        <h3>Case Study</h3>
        <GoogleUxProject2 />
      </section>
    </>
  );
};

export default Ux;
