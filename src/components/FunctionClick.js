// 06/09/2022

//Create a Functional Component using Arrow function and add event to change on Button Click

import React from "react";

let FunctionClick= ()=>{

function clickHandler(){
    console.log("Button is Clicked")
}


    return (
    <div>
        <h1>Hello</h1>
        <button onClick={()=>{clickHandler()}}>CLICK HERE</button>      {/* Click on button and check console */}
    </div>
    
    )
}

export default FunctionClick