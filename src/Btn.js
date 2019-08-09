import React from "react"
const Btn = (props) => {
    return (
        
            <button onClick={props.btnn}
             style={{backgroundColor:"blue",width:"100px",height:"50px"}}>
             {props.label}
             </button>
        
    )
}
export default Btn