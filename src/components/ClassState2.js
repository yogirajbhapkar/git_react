// Class component with constructor and changing state its local state 
// Increase count by 1 each time



import React, { Component } from "react";

class ClassState2 extends Component {

//Step 1 :  Set initial state using this.state and constructor
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

//Step 2 :Write function to change state using setState()
        incrementCount(){
           this.state.count = this.state.count+1
           console.log(this.state.count)    

            // this.setState({
            //     count: this.state.count + 1
            // })
        }

//Render () JSX on /UI
//Here render() is outside the constructor. So here the scope of this is not applicable ??????
//JS doesn't understand this keyword here. It takes it as undefined ??????
//This can be acheived using four methods
//1. Passing arrow function to onClick and calling
//2. bind() method inside onClick()
//3. bind() in Constructor i.e at start
//4. bind() inside the function incrementCount() 

    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>       {/* This will show initial state i.e 0 on UI */}
                {/* Change state On Click of button */}

                {/* <button onClick={this.incrementCount()}>Change Count</button>   //Infinite loop */}
        
                {/* Method 1 : Passing Arrow functin and calling() */}
                <button onClick={()=>this.incrementCount()}>Change Count</button>


            </div>
        )
    }

}

export default ClassState2