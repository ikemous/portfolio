import React from "react"
import { updatePagnation } from  "../utils/actions";
import { useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";
import "./pagnation.css";

interface Props {
    length: number;
    pagnationPosition: number;
}

function Pagnation({ length, pagnationPosition }: Props) {

    const sections:number = Math.floor(length / 8) + 1;
    const dispatch = useDispatch();

    const handlePagnationClick = ({target}:any) => {
        if(target.text)dispatch(updatePagnation(parseInt(target.text)))
    };

    const renderPagnationSections = ():any[] => {
        const items:any[] = [];
        for(let i = 0; i < sections; i++) {
            items.push(
                <Pagination.Item 
                    key={i + 1}
                    active={pagnationPosition===i+1?true:false}
                    onClick={handlePagnationClick}
                >
                    {i + 1}
                </Pagination.Item>
            );
        }
        return items;
    };

    return (
        <Pagination>
            <Pagination.First className="secondaryBackground" onClick={() => dispatch(updatePagnation(1))} disabled={pagnationPosition===1?true:false} />
            <Pagination.Prev  onClick={() => dispatch(updatePagnation(pagnationPosition - 1))} disabled={pagnationPosition===1?true:false} />
            {length > 0?renderPagnationSections():<></>}
            <Pagination.Next onClick={() => dispatch(updatePagnation(pagnationPosition + 1))} disabled={pagnationPosition===sections?true:false} />
            <Pagination.Last onClick={() => dispatch(updatePagnation(sections))} disabled={pagnationPosition===sections?true:false} />
        </Pagination>
    )
}

export default Pagnation;