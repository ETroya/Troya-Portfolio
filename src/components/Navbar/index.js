import React, {useState} from "react"; 
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "../Main/main"
import style from "../Navbar/style.css";
import {BrowserRouter, Link} from "react-router-dom"

function MyNavbar(){
    
return(
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>This is / </span><strong>Edwin Troya</strong></span>}>
            <Navigation>
                <Link to="/">Main</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Quick Links">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
        <div className="page-content" />
        </Content>
        {/* <Main /> */}
    </Layout>
</div>
)

}

export default MyNavbar