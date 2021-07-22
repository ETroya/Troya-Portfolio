import React, {useState} from "react"; 
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "../Main/main"

function MyNavbar(){
    
return(

<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>This is / </span><strong>Edwin Troya</strong></span>}>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
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