import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { createContext } from "react";

const DataContext = createContext("");

function App() {
  const [inputText, setInputText] = useState("");
  const [propsData, setPropsData] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleClick = () => {
    setPropsData(inputText);
  };
  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(event) => handleInputChange(event)}
      />
      <button onClick={() => handleClick()}>submit</button>
      <DataContext.Provider value={propsData}>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
export { DataContext };
