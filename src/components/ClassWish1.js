//Class component with Props

import React, {Component} from "react";

class ClassWish1 extends Component{
    render(){
        return <h1>My name is {this.props.name}</h1>
    }
}

export default ClassWish1