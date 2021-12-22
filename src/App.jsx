import ReactDOM from "react-dom"
import React from "react"

const App = () => {
  const handleChange = (e) => {
    console.log("change", e);
  };

  return (

    <error-modal
      change={handleChange}
    />
  );
}


const rootElement = document.getElementById("react-app");
ReactDOM.createRoot(rootElement).render(<App />);
