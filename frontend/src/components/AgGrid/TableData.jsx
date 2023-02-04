import React from 'react';
import { useNavigate } from "react-router-dom";


const TableData = (props) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/agrid/${props.name}`)}>{props.name}</button> 
    )
    }

export default TableData;