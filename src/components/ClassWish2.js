//Class component with Destructuring Props


import React, { Component } from "react";

class ClassWish2 extends Component {
    render() {
        let { name, lastName } = this.props
        return <h1>My name is {name} and surname is {lastName}</h1>
    }
}

export default ClassWish2