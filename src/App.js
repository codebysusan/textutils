import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#35363a";
      setMode("dark");
    }
    else {
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/About" element={<About mode={mode} />} />
        <Route path="" element={<TextArea mode={mode} />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
