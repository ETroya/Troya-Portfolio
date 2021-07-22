import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../Landingpage/landingpage"
import AboutMe from "../Aboutme/index"


const Main = ()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
    </BrowserRouter>
)

export default Main;