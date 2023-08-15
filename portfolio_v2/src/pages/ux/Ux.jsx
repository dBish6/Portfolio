import "./ux.css";
import GoogleUxProject1 from "../../components/caseStudy/GoogleUxProject1";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Ux = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <section className="projectSection project1 gridContainer">
      <div className="title">
        <h2>Google UX Design Certificate Project 1</h2>
        <p>
          Welcome to my User Experience (UX) course project showcase. This is
          the first final in the course where they randomly selected something
          for me to design and I got a Sandwich Shop, now known as "Fresh
          Bites". The following case study goes through my design thinking
          process, hope you like it! For mobile users, I recommend accessing the
          case study deck directly via this link, as the frame may be too small
          to see properly:{" "}
          <a
            href="https://docs.google.com/presentation/d/1VsH42q1dvQuxP9OM2dTScMJ6YxUZzmgfMKbKtYcR0Ao/edit?usp=sharing"
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
  );
};

export default Ux;
