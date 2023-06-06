import React from "react";

const Text=(props)=>{
    return (
        <div>
            <div>
            {props.data}
            </div>
            <button onClick={()=>{
                props.onSelect(props.id)}}>
                Delete
            </button>
        </div>
    );
}

export default Text;