// 04/09/2022 - 1

// Class component with constructor and changing state its local state 
// Increase count by 1 each time



import React, { Component } from "react";

class ClassCount extends Component {

//Step 1 :  Set initial state using this.state and constructor
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

//Step 2 :Write function to change state using setState()
        incrementCount(){
        //    this.state.count = this.state.count+1
        //    console.log(this.state.count)    
           //Check this on Console. Value of state will change on <button onClick: > but wont be seen on  UI
           //Therefore we need to use inbuilt setState() Function as below

            this.setState({
                count: this.state.count + 1
            })
        }

//Render () JSX on /UI
//Here render() is outside the constructor. So here the scope of this is not applicable
//JS doesn't understand this keyword here. It takes it as undefined

    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>       {/* This will show initial state i.e 0 on UI */}
                {/* Change state On Click of button */}

                <button onClick={()=>this.incrementCount()}>Change Count</button>

            </div>
        )
    }

}

export default ClassCount