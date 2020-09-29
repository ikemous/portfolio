import React, { useEffect } from "react";
import options from "../utils/options";
import { useDispatch } from "react-redux";
import { updateFilter, updateProjects } from "../utils/actions"
import { Form, Button, Col } from "react-bootstrap";

interface Option {
    key: string, 
    value: string,
    text: string
};

function FilterProjectsForm() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(updateProjects([]))
    }, [])
    const changeSelection = ({ target }: any) => {
        if(target.value==="Select All") return dispatch(updateFilter(""));
        dispatch(updateFilter(target.value));
    };

    return (
        <Form>
            <Form className="align-items-center">
                <Form.Row>
                    <Col sm={2}/>
                    <Col xs={8} sm={8}>
                        <Form.Control 
                            onChange={changeSelection} 
                            id="selection" as="select" 
                            custom
                        >
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