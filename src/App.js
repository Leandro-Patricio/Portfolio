import React from "react";
import Router from "./routes";
import Aos from "aos";

function App() {
  Aos.init();
  return (
    <Router />
  );
}

export default App;