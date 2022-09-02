//Class Component with Constructor and props and defining local state from props


//Same as parameters in JS class here also we receive props in Constructor

import React,{Component} from "react";

class ClassWish4 extends Component{

    constructor(props){         //We have received props here. 
        super()
        this.state={
            //msg : "Hey there"        //Local State is defined here
                                        //Here We have Provided Hard coded value previously
            msg : props.message         //We can Send Value From Component in App.js as props
        }
    }



    render(){
        return <h1>{this.state.msg}. How are you?</h1>
    }
}

export default ClassWish4