import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Portfolio from "./components/Portfolio";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Portfolio />
      </div>
    </HelmetProvider>
  );
}

export default App;
