import React, {useState} from "react"; 
import {Container, Jumbotron, Card, Button, Row} from "react-bootstrap";
import Headshot from "../../Assets/images/me.png"

function Aboutme(){
    
    return(
        <Jumbotron>
            <Container>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" img src={Headshot} />
</Card>
                <p>I am a Full-Stack Web Developer with a Bachelor's in Criminal Justice and a Minor in Sociology from Caldwell University. I  </p>
            </Container>
        </Jumbotron>
    )
}

export default Aboutme