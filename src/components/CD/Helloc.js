import React from 'react'


//Create a component using arrow function and pass {props}(Propeties) to it

const Helloc = (props)=>{
    console.log(props)
    return (
        <h1>Hello {props.name} {props.number}</h1>
    )

   // return React.createElement('h1','null','Hello Yogiraj')
   //return React.createElement('h1',{id:'hello'},'Hello Yogiraj') adding attribute

}
export default Helloc