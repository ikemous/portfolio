import React from "react";
import { Container, Image, Row } from "react-bootstrap";

function HomePage() {
    return(
        <Container>
            <Row style={{background:"green"}}>
                <Image 
                    style={{margin: "auto"}}
                    src="https://via.placeholder.com/150"
                    roundedCircle
                />
            </Row>
            <Row style={{background: "red"}}>

            </Row>
        </Container>
    );
};

export default HomePage;