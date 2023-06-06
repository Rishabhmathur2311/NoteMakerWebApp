import React, {  useState } from "react";
import Title from "./Title";
import { AiFillPlusCircle } from 'react-icons/ai';


const NoteHead=()=>{

    const [note, setNote]=useState({
        title: "",
        content: "",
    });

    const [item, addItem]=useState([]);

    const updateNote=(event)=>{
        const a=event.target.value;
        const b=event.target.name;
        setNote((prevVal)=>{
            return{
                ...prevVal,
                [b]: a,
            };
        })
    }

    const updateValue=()=>{
    addItem((prevVal)=>{
        return [
            ...prevVal,
            note,
        ];
    })
    setNote({
        title: "",
        content: "",
    })
    }

    const deleted=(id)=>{
        addItem((prevVal)=>{
            return prevVal.filter((arrElement, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <div className="noteInput">
            <div className="center">
            <div className="flexDisplay">
            <textarea id="titl" type="text" value={note.title} cols={25} rows={1} placeholder="Title" name="title" onChange={(event)=>{
                updateNote(event)
            }}></textarea>
    </div>
    <div className="flexDisplay">
            <textarea type="text" cols={25} value={note.content} rows={3} placeholder="Enter your text" name="content" onChange={(event)=>{
                updateNote(event)
            }}
            ></textarea>
            </div>
            </div>
            </div>
            <button type="submit" className="text-success" onClick={updateValue}> <h1 id="plus"><AiFillPlusCircle /> </h1> </button>
            
           
            <div>
            {item.map((itemVal, index)=>{
                return (
                    <Title
                    data1={itemVal.title}
                    data2={itemVal.content}
                    id={index}
                    onSelect={deleted}
                    />
                );
            })}
            </div>
        </div>
    );
}

export default NoteHead;