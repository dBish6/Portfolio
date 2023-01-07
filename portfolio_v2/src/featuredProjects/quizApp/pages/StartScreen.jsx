/* Quiz App

   Author: David Bishop
   Creation Date: November, 2022
   Integration Date: January 7, 2023
*/

import useDocumentTitle from "../../../hooks/useDocumentTitle";
import Settings from "../components/Settings";

const StartScreen = (props) => {
  useDocumentTitle(`David Bishop | ${props.title}`);

  return (
    <>
      <header>
        <a
          href="https://github.com/dBish6/React_Quiz_App"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
        <p>
          <b>Developer:</b> David Bishop
        </p>
      </header>
      <div className="startContainer">
        <h1>Redux Quiz App</h1>
        <Settings />
      </div>
    </>
  );
};

export default StartScreen;
