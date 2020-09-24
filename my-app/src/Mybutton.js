import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Mybutton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list: []
        }
        
        this.sumInputs = this.sumInputs.bind(this);
    }
    
    sumInputs() {  
        const input1 =  document.querySelector("#input1");
        const input2 =  document.querySelector("#input2");
        const input3 =  document.querySelector("#input3");
        const totalvalue = parseInt(input1.value, 10) + parseInt(input2.value, 10) + parseInt(input3.value, 10);
        if (isNaN(totalvalue) == false) {
            this.setState(prev => ({list: [...prev.list]}));
            this.state.list.push(<li>{totalvalue}</li>);
            ReactDOM.render(this.state.list, document.getElementById('ul1'));
        }
    }
    
    render() {
        return (
            <button type = "button" value = "Send" id = {this.props.id}  className = {this.props.className}   onClick = {this.sumInputs}  >Send</button>
            
        );
    }
}
