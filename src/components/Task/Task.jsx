import React, { useState } from "react";
import Lamp from "../Lamp/Lamp";
import "./Task.css"

function Task(props){
    const[value, setValue] = useState('')
    const[countFalse, setCountF] = useState(0)
    const[countTrue, setCountT] = useState(0)
    
    function handleChange(e){
        setValue(e.target.value)
        e.target.style = "text-decoration:none"
    }

    function handleSubmit(e){
       if(value == props.correct){
           setCountT(countFalse + 1)
           e.target.style = "border: 1px solid green"
           e.target.disabled = "true"
           
       }else{
           setCountF(countFalse + 1);
           e.target.style = "text-decoration:underline dotted red";
       }
       if(countFalse > 1){
        setValue(props.correct);
        e.target.disabled = "true";
        e.target.style = "text-decoration:none; border: 1px solid green";
    }
    }

   return(
       <div className="container">
            <p className="textTask">{props.textBeforeInput}</p>
            <p id = "yellowText" className="textTask">({props.adjective})</p>
            <input
                id="inputBox"
                value = {value}
                onChange = {handleChange} 
                onKeyDown = {(e) => {if(e.keyCode == 13){
                    handleSubmit(e)}
                    }
                }
                 /> 
           <Lamp countFalse = {countFalse}
                 countTrue = {countTrue}
            />                 
            <p className="textTask">{props.textAfterInput}</p>
       </div>        
    )
}
export default Task;