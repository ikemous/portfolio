import React from "react"
import { updatePagnation } from  "../utils/actions";
import { useDispatch } from "react-redux";
import { Pagination } from "react-bootstrap";

interface Props {
    length: number;
    pagnationPosition: number;
}

function Pagnation({ length, pagnationPosition }: Props) {

    const sections:Number = length % 8;
    const dispatch = useDispatch();

    const handlePagnationClick = ({target}:any) => {
        console.log(target);
        console.log(target.text);
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
            <Pagination.First disabled={pagnationPosition===1?true:false} />
            <Pagination.Prev disabled={pagnationPosition===1?true:false} />
            {length > 0?renderPagnationSections():<></>}
            <Pagination.Next disabled={pagnationPosition===sections?true:false} />
            <Pagination.Last disabled={pagnationPosition===sections?true:false} />
        </Pagination>
    )
}

export default Pagnation;