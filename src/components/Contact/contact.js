import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";
import style from "./stlye.css";
import Glasses from "../../Assets/images/me.png";
import Resume from "../../Assets/TroyaJr Edwin.Resume.pdf"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" id="Contact">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2></h2>
            <img src={Glasses} alt="Clip" styl={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              {" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize:"25px", fontFamily: "Anton", justifyContent:"center", color:"blue"}}>
                  <i className="fa fa-envelope" aria-hidden="true"/>
                  edtroyajr@gmail.com</ListItemContent>
              </ListItem>
              <a href={Resume} target="_blank" rel="noopener noreferrer"><Button raised color className="button1">Resume</Button></a>
            
            </List>
            </div>
            
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
