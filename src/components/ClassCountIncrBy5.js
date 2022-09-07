// 04/09/2022 -2

// Class component with constructor and changing state its local state 
// Increase count by 5 each time


import React, { Component } from "react";

class ClassCountIncrBy5 extends Component {

    //Step 1 :  Set initial state using this.state and constructor
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    //Step 2 :Write function to change state using setState()
    incrementCount() {

        //     this.setState({
        //         count: this.state.count + 1
        //     })                       //This won't hold value of previous state. Async Problem
        //      console.log(this.state.count)


        //To overcome this isssue send and arrow function to setState() which will hold Previous state

        this.setState((prevState) => ({
            count: prevState.count + 1})
            )          //This will hold value of previous state and incr by 1

    }


//Write function for increment by 5 and call incrementCount 5 times 

incrementBy5() {
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
    this.incrementCount()
}

//We have called incrementBy5 on button click and the O/P should be increased by 5 
//But in actual it is not happening as it is not holding value of previous call to incrementCount() function
//This can be acheived by passing value of  previous state to SetState as an arrow function
//so initial value of prev state will be 0. When we call incrementCount() it will become 1 and hold by setState()
//When we call incrementCount() second time it will take prev State Value 1 and incerement it to 2 and so on

//Render () JSX on /UI
//Here render() is outside the constructor. So here the scope of this is not applicable???????????
//JS doesn't understand this keyword here. It takes it as undefined????????????

render() {
    return (
        <div>
            <h1> {this.state.count} </h1>       {/* This will show initial state i.e 0 on UI */}
            {/* Change state On Click of button */}

            <button onClick={() => this.incrementBy5()}>Change Count</button>

        </div>
    )
}

}

export default ClassCountIncrBy5