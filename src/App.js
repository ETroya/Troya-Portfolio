import React from "react"
import { Container, Jumbotron } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/main";
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio/portfolio";
import style from "./index.css"

function App() {
  return (
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  );
}

export default App;
