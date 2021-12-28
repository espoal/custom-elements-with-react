import ReactDOM from "react-dom"
import React from "react"

const App = () => {
  const ref = React.useRef()

  const logichandler = () => {
    console.log("I handle some logic!")
  }

  const secondHandler = {
    hello: 'world',
    logichandler
  }

  return (
    <error-modal
      ref={el => {
        el.refHandler= secondHandler
      }}
      logicHandler={secondHandler}
      test={"test"}
    />
  );
}


const rootElement = document.getElementById("react-app")
// React 18+
ReactDOM.createRoot(rootElement).render(<App />);
// React 17
// ReactDOM.render(<App />, rootElement)
