import logo from "./logo.svg";
import "./App.css";

import { Partytown } from "@builder.io/partytown/react";

function App() {
  return (
    <div className="App">
      <Partytown
        debug={true}
        logCalls={true}
        forward={["rudderanalytics.track"]}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            rudderanalytics.track("HELLO");
            console.log("WINDOW", window);
          }}
        >
          Trigger the goddamn function!
        </button>
      </header>
    </div>
  );
}

export default App;
