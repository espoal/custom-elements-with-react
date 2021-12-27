import ReactDOM from "react-dom"
import React from "react"

const App = () => {
  const ref = React.useRef()
  const handleChange = (e) => {
    console.log("change", e);
  };

  return (

    <error-modal
      ref={el => {
        el.refHandler = handleChange
      }}
      handler={handleChange}
      test={"test"}
    />
  );
}


const rootElement = document.getElementById("react-app");
ReactDOM.createRoot(rootElement).render(<App />);
