import React, { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { updateFilter, updateProjects, setLoading, setNoProjects } from "../utils/actions"
import { Form, Button, Col } from "react-bootstrap";
import API from "../utils/API";
import options from "../utils/options";

interface Option {
    key: string, 
    value: string,
    text: string
};

function FilterProjectsForm() {

    const dispatch = useDispatch();
    const { filter } = useSelector((state:RootStateOrAny) => state.global);
    
    useEffect(() => {
        get();
    }, [])

    const get = () => {
        API.getProjects(filter)
        .then(({ data }) => {
            console.log(data);
            if(data.length === 0) dispatch(setNoProjects(true));
            else dispatch(setNoProjects(false));
            dispatch(updateProjects(data));
            dispatch(setLoading(false));
        })
        .catch(error => {
            dispatch(setLoading(false));
            dispatch(setNoProjects(true));
            console.log(error)
        })
    };

    const changeSelection = ({ target }: any) => {
        if(target.value==="Select All") return dispatch(updateFilter(""));
        dispatch(updateFilter(target.value));
    };

    return (
        <Form onSubmit={get} className="align-items-center">
            <Form.Row>
                <Col sm={2}/>
                <Col xs={8} sm={8}>
                    <Form.Control 
                        onChange={changeSelection} 
                        id="selection" 
                        as="select" 
                        custom
                    >
                        {options.map((option:Option) => <option key={option.key} value={option.value}>{option.text}</option>)}
                    </Form.Control>
                </Col>
                <Col xs={2} sm={2}>
                    <Button onClick={get} variant="success">Filter</Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default FilterProjectsForm;