//Create a class component and add event onClick to change text on utton click

import React, { Component } from 'react'

class EventBind extends Component{
//1. Constructor, super()
    constructor(){
        super()
        this.state={
            say : "Hi"
        }

     this.ChangeText=this.ChangeText.bind(this)
    }

// 2. setState({})

    // ChangeText(){
    //     console.log(this)       //Undefined if not bind to class. Will show object if bind() as in line no 13
    //     this.setState({
    //         say : "Bye"
    //     })
    // }

    ChangeText=()=>{
        console.log(this)       //Undefined if not bind to class. Will show object if bind() as in line no 13
        this.setState({
            say : "Bye"
        })
    }

// 3. render(){return}
     render(){
        return(
            <div>
                <h1>{this.state.say}</h1>
                {/* 1. Using Arrow Function */}
                <button onClick={()=>this.ChangeText()}>1. Change Me</button>  
                {/*2.  Using bind() Function : .bind(this will bind this in render function to this from class) */}
                {/* Not recomended as we have to add this every time we want to bind */}
                <button onClick={this.ChangeText.bind(this)}>2. Change Me</button> 
                {/*3.  Using bind() Function at start: line no 13. No need  to call. */}
                <button onClick={this.ChangeText}>3. Change Me</button> 
                 {/*3.  Using bind() Function at start: line no 13. infinite if () called XXXXXXX */}
                 {/* <button onClick={this.ChangeText()}>4.DO NOT CLICK Change Me</button>  */}
            </div>
        )
     }

}


export default EventBind

//Render () JSX on /UI
//Here render() is outside the constructor. So here the scope of this is not applicable ??????
//JS doesn't understand this keyword here. It takes it as undefined ??????
//This can be acheived using four methods
//1. Passing arrow function to onClick and calling
//2. bind() method inside onClick()
//3. bind() in Constructor i.e at start
//4. bind() inside the function incrementCount() 