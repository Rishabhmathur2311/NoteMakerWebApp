import React from "react";
import { AiFillDelete } from 'react-icons/ai';

const Title=(props)=>{
    return (
        <div>
            <div className="output">
                <div className="titleOutput">
                {props.data1}
                </div>
                <div className="contentOutput">
                {props.data2}
                <button className="text-danger" onClick={()=>{
                    props.onSelect(props.id)
                }}> <h1 id="delete"><AiFillDelete /> </h1></button>
                </div>
            </div>
            
        </div>
    );
}

export default Title;