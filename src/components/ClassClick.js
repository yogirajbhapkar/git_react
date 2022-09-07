// 06/09/2022 -2

//Create a class component and write a function inside it


import React, { Component } from "react";

class ClassClick extends Component {

  clickHandler(){                //This is the function written inside class. To access it anywhere use this keyword
        console.log("Button is clicked")
 }

    render() {
        return(
        <div>
            <h2>Class Component</h2>
            <button onClick={this.clickHandler}>CLICK HERE</button>
        </div>
        )
    }

}

export default ClassClick