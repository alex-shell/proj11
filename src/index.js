import React, { useState } from "react";
import { render } from "react-dom";
import GlobalStyle from "./theme/GlobalStyle.js";
import useMapbox from "./useMapbox";

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox("map", [3, 4], 5);

  return (
    <>
      <GlobalStyle />
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
