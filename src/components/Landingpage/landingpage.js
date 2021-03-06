import React, {Component} from "react";
import {Grid, Cell} from "react-mdl"
import Me from "../../Assets/images/Headshot.jpg"
import Aboutme from "../Aboutme";
import style from "../Landingpage/style.css"
import Portfolio from "../Portfolio/portfolio";
import Contact from "../Contact/contact"

class Landing extends Component{
    render(){
        return(
            <div style={{width: "100%", margin:"auto"}}>
<Grid className="landing-grid">
    <Cell col={12}>
    <img
        src={Me}
        alt="Headshot"
        className="Headshot"
        />
        < div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            <hr/>
            <p> Python | Javascript | Bootstrap | Javascript | MERN: MongoDB, Express, React, Node.js | HTML/CSS</p>
            <div className="social-links">
                {/* The _blank helps to open up the link on a new window.  */}
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/edwin-troya/" rel="noopener noreferrer" target ="_blank">
                <i class="fab fa-linkedin-in"></i></a>

                {/* Github */}
                <a href="https://github.com/ETroya" rel="noopener noreferrer" target="_blank">
                <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </Cell>
    <Aboutme/>
    <Portfolio />
    <Contact/>
</Grid>
            </div>

        )
    }
}
export default Landing;