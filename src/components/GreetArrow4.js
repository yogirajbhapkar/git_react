// Functional component arrow function, destructuring props and adding attributes

import React from "react"

// let GreetArrow4 = ({firstName,lastName})=>{
//     return (
//         <div id="one">
//             <h1 class= "hello"> Hi. I am {firstName} and my surname is  {lastName}</h1>

//         </div>
//     )

// }

// export default GreetArrow4

//Same can be acheived by react.createElement() method

let GreetArrow4 = ({firstName,lastName})=>{
    return (
        React.createElement('div', {id:"one", className:"Two"}),
        React.createElement('h1', {id:"three", className:"Four"}, 'Hi. I am {firstName} and my surname is  {lastName}')
           //Notice Here we use className insted of class in DOM 
           //Check O/P :  ??????????????????????? 
    )

}

export default GreetArrow4
