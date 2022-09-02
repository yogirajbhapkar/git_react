import React from 'react'

//Functional Component with Arrow Function and Props (Property)
// It will return JSX Element.
//We can Pass Props to this function when using it in app.js
//Thus makes this code reusable.

const GreetArrow2 = (props)=>{
    return (
        // <h1>Hello {props.name}. How Are You?</h1>,
        // <h1> Your Roll number is {props.rollNo} </h1>
        //OR
        <h1>Hello {props.name}. How Are You? Your Roll number is {props.rollNo}
        {props.children}</h1>
        
    )
}

export default GreetArrow2
