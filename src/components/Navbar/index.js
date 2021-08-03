import React, {useState} from "react"; 
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "../Main/main"
import style from "../Navbar/style.css";
import {BrowserRouter, Link} from "react-router-dom"
import Resume from "../../Assets/TroyaJr Edwin.Resume.pdf";
function MyNavbar(){
    
return(
<div>
    <Layout>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>This is / </span><strong>Edwin Troya</strong></span>}>
            <Navigation>
                <Link to="/">Main</Link>
                <a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a>
                <a href="#aboutme">About Me</a>
                <a href="#Portfolio" >Portfolio</a>
                <a href="#Contact">Contact</a>
            </Navigation>
        </Header>
        <Content>
        <div className="page-content" />
        </Content>
        {/* <Main /> */}
    </Layout>
</div>
)

}

export default MyNavbar