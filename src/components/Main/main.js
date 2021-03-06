import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../Landingpage/landingpage"
import Aboutme from "../Aboutme/index"
import Contact from "../Contact/contact";
import Portfolio from "../Portfolio/portfolio";
import Resume from "../Resume/resume";
import Navbar from "../Navbar/index"

const Main = ()=>(
    <div>
        <Navbar/>
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path ="/resume" component={Resume}/>
        {/* <Route path ="/aboutme" component={Aboutme} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/portfolio" component={Portfolio} /> */}
    </Switch>
    </div>
)

export default Main;