//Class Component with constructor and changing its local state on click()

//setState() Function changes initial state of component and rerender it along with its children to updated state
//We assign an object to state
//state in a POJO (Plain Old JS Object {})

import React, { Component } from "react";

class ClassWish5 extends Component {

    //Part 1 : constructor, super, this.state = 
    constructor() {
        super()
        this.state = {
            msg: "Initial State"
        }
    }

    // Part 2 : setState()
    //Change State using setStete()
    //Write a method for change state and use setState() inside it

    changeState() {
        this.setState ({
            msg: "My State is Changed"
        })
    }

//Part 3 : Render() function, return

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>     
                {/* This will show initial state */}
                {/* //Now add a button and change above state on Click */}
                <button>Sample Button</button>
{/* Part 4 : onClick = {arrow function} */}
                <button onClick={()=>{
                    this.changeState()
                }}>CHANGE STATE</button>
                
            </div>
        )
    }


}

export default ClassWish5