import React from "react";
import './Lamp.css'

function Lamp(props){
  
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly"}}>
            <div className="lamp" style = {{borderRadius:"50%", background:(props.countFalse) > 2  ? "red" : (props.countTrue) > 2 ? "#00FF00" : "grey"}}></div>
            <div className="lamp" style = {{borderRadius:"50%", background:(props.countFalse) > 1  ? "red" : (props.countTrue) > 1 ? "#00FF00" : "grey"}}></div>
            <div className="lamp" style = {{borderRadius:"50%", background:(props.countFalse) > 0  ? "red" : (props.countTrue) > 0 ? "#00FF00" : "grey"}}></div>
        </div>
    )
}
export default Lamp;
