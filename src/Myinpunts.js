import React, { Component } from "react";


export default class Myinpunts extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.inputNumberValidate = this.inputNumberValidate.bind(this);
      }
    
    inputNumberValidate(event) {
        const regexp = /[0-9]/g;
        const validCharsArray = event.target.value.match(regexp) || [];
        this.setState({value: validCharsArray.join("")});
      }

    render() {
        return (
            <div className = {this.props.divclassName}>
                <label for={this.props.id} placeholder = {this.props.placeholder} className = {this.props.lableclassName}>{this.props.lable}</label>
                <input id={this.props.id} type="text"  placeholder={this.props.placeholder} required className = {this.props.inputclassName} value={this.state.value} onChange={this.inputNumberValidate} />
            </div>
        );
    }
}