import React from "react";
import DottedBackground from "../components/DottedBackground";
import { Container, Row } from "react-bootstrap";
import "./testimonialsPage.css";

function TestimonialsPage() {
    return (
        <Container className="screenHeight">
            <Row className="align-items-center justify-content-center screenHeight">
                <div>
                    <h2 className="text-center testimonialText">No Testimonials Yet, But You Could Be The First!</h2>
                </div>
            </Row>
            <DottedBackground />
        </Container>
    );
};

export default TestimonialsPage;