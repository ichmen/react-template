import "./App.css";
import React, { useReducer } from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import { createContext } from "react";

const DataContext = createContext("");
const initialStore = { inputText: "", propsData: "", childData: "" };

function App() {
  const [store, dispatch] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialStore
  );
  const handleInputChange = (event) => {
    dispatch({ inputText: event.target.value });
  };
  const handleClick = () => {
    dispatch({ propsData: store.inputText });
  };
  return (
    <>
      <input
        type="text"
        value={store.inputText}
        onChange={(event) => handleInputChange(event)}
      />
      <button onClick={() => handleClick()}>submit</button>
      <div>{store.childData ? `date is ${store.childData}` : ""}</div>
      <DataContext.Provider value={store.propsData}>
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
            <Route path="/" exact element={<Home data={store.propsData} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/contacts"
              element={<Contacts dispatch={dispatch} />}
            />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
export { DataContext };
