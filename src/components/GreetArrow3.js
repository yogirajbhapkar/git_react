import React from "react"



//We have seen creating JSX Element Using arrow function and returning tag name in GreetArrow2
//Same Can be acheived by using create createElement() method

// Syntax : React.createElement( type, [props], [... children] )

// React. createElement( type, [props], [... children] ) Create and return a new React element of the given type. 
// The type argument can be either a tag name in string (such as 'div','h1,'span' etc), 
// or a React component type (a class or a function), or a React fragment type.

const GreetArrow3 = (props)=>{
    return (
        // React.createElement('h1',null,'Element Created Using React.createElement() Method') //Null is for attribute
        React.createElement('h2', {id:'firstName'}, "Element created using create.Element method with attribute ")
        //Inspect in browser and check there will be id="FirstName" added in h2 tag 
    )
}

export default GreetArrow3