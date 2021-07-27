import React, {useState} from "react"; 
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "../Main/main"
import {BrowserRouter, Link} from "react-router-dom"

function MyNavbar(){
    
return(
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>This is / </span><strong>Edwin Troya</strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
            <Main/>
        </Drawer>
        <Content>
        <div className="page-content" />
        <Main />
        </Content>
    </Layout>
</div>
)

}

export default MyNavbar