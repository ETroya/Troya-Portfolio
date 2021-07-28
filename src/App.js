import React from "react"
import { Jumbotron } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/main";
import Navbar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
    <Jumbotron>
    <Navbar />
    <Main />
    </Jumbotron>
    </BrowserRouter>
  );
}

export default App;
