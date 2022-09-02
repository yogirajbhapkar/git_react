//Class Component with Constructor and defining Local State

//Why Constructor()?
//constructor() is a method which gets automatically called when we create object from a class. 
// It is used for initialising. We assign certain object properties and methods inside it in JS

//Similrly When we create some Component from Class, Constructor is used to initialise the local state of component
//When constructor() is used , 1st call goes to its parent class super()

//state in a POJO (Plain Old JS Object {})

import React,{Component} from "react";

class ClassWish3 extends Component{

    constructor(){
        super()
        this.state={
            msg : "Hi there"        //Local State is defined here
                                    //Here We have Provided Hard coded value
                         //We can Send Value From Component in App.js. See ClassWish4.js
        }
    }



    render(){
        return <h1>{this.state.msg}. How are you?</h1>
    }
}

export default ClassWish3