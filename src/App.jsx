import ReactDOM from "react-dom"
import React from "react"

const App = () => {
  const ref = React.useRef()
  const logicHandler = () => {
    console.log("I handle some logic!")
  };

  return (
    <error-modal
      ref={el => {
        el.refHandler = logicHandler
      }}
      handler={logicHandler}
      test={"test"}
    />
  );
}


const rootElement = document.getElementById("react-app");
ReactDOM.createRoot(rootElement).render(<App />);
