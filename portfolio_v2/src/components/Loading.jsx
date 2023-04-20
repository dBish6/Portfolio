const Loading = () => {
  const loadingCss = `
      .loaderBG {
        position: fixed;
        width: 100vw;
        height: 101%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(#a4bfef, #6a93cb);
        z-index: 98;
        overflow: hidden;
      }

      .loaderContainer {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        z-index: 99;
      }

      .loaderContainer p {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #262626;
        margin-bottom: 0.5rem;
      }

      .loader {
        border-radius: 30px;
        width: 100%;
        height: 6px;
        background-color: rgba(0, 0, 0, 0.2);
      }

      .loader::before {
        content: "";
        position: absolute;
        bottom: 0;
        background-color: #0071e2;
        width: 100%;
        height: 6px;
        border-radius: 30px;
        animation: moving 2.2s ease-in-out infinite;
      }

      @keyframes moving {
        0% {
          width: 0%;
        }
        50% {
          width: 100%;
        }
        100% {
          width: 0px;
          right: 0px;
          left: unset;
        }
      }`;

  return (
    <>
      <div className="loaderBG"></div>
      <div className="loaderContainer">
        <p>Loading</p>
        <div className="loader"></div>
      </div>
      <style>{loadingCss}</style>
    </>
  );
};

export default Loading;
