import React from "react";
import options from "../utils/options";
import { Form, Button, Col } from "react-bootstrap";

interface Option {
    key: string, 
    value: string,
    text: string
};

function FilterProjectsForm() {
    return (
        <Form>
            <Form className="align-items-center">
                <Form.Row>
                    <Col sm={2}/>
                    <Col xs={8} sm={8}>
                        <Form.Control id="selection" as="select" custom>
                            {options.map((option:Option) => <option key={option.key} value={option.value}>{option.text}</option>)}
                        </Form.Control>
                    </Col>
                    <Col xs={2} sm={2}>
                        <Button variant="success">Filter</Button>
                    </Col>
                </Form.Row>
            </Form>
        </Form>
    );
};

export default FilterProjectsForm;