import React from "react"
import { Jumbotron } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
    <Jumbotron>
    <Navbar />
    </Jumbotron>
    </BrowserRouter>
  );
}

export default App;
