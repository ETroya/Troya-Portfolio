import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import style from "./stlye.css";
import Glasses from "../../Assets/images/me.png";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Edwin Troya</h2>
            <img src={Glasses} alt="Photo of me" styl={{ height: "250px" }} />
            <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}> born and raised in New Jersey. After graduating high school, he was very passionate about law enforcement. He persuaded his education in Criminal Justice at Caldwell University.
            After a few years, Edwin found another interest in Web Developing. He started by self-learning HTML and CSS. He was looking at FreeCodeCamp.org and Codecademy.com. Once Edwin felt that he had a better understanding, he enrolled in the Full-Stack Development program at the UCR extension.  After completing the course, Edwin Troya was now a Full-Stack Developer. 
            Please feel free to contact Edwin for future developing projects.</p>
          </Cell>
          <Cell col={6}>Half page</Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
