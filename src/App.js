import React from "react"
import { Jumbotron } from "react-bootstrap";
import Navbar from "./components/Navbar"
import Aboutme from "./components/Aboutme"

function App() {
  return (
    <Jumbotron>
    <Navbar />
    <Aboutme /> 
    </Jumbotron>
  );
}

export default App;
