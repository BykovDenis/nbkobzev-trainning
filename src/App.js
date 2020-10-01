import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import List from "./components/list";
import Myinpunt from './components/my-input/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      totalvalue: '',
      arraySum: []
    };

    this.inputNumberValidate = this.inputNumberValidate.bind(this);
    this.sumInputs = this.sumInputs.bind(this);
  }

  inputNumberValidate(event) {
    const REGEXP = /[0-9]/g;
    const inputValue = event.target.value;
    const validCharsArray = inputValue.match(REGEXP) || [];
    switch(event.target.id){
      case "input1":
        this.setState({ value1: parseInt(validCharsArray.join(""),10) });
        break;
      case "input2":
        this.setState({ value2: parseInt(validCharsArray.join(""),10) });
        break;
      case "input3":
        this.setState({ value3: parseInt(validCharsArray.join(""),10) });
        break; 
    }
   }

  sumInputs() {
    const totalvalue = this.state.value1 + this.state.value2 + this.state.value3;
    const {arraySum} = this.state;
    if (isNaN(totalvalue) === false) {
      this.setState({
        arraySum: arraySum.concat(totalvalue)
      });
    }
  }

  render() {
    return (
      <div id="myroot">
        <div className="myroot__inputblock">
          <div className="myroot__items">
            <Myinpunt onChange={this.inputNumberValidate} value={this.state.value1} id="input1" placeholder="input 1" lable="label 1" />
            <Myinpunt onChange={this.inputNumberValidate} value={this.state.value2} id="input2" placeholder="input 2" lable="label 2" />
            <Myinpunt onChange={this.inputNumberValidate} value={this.state.value3} id="input3" placeholder="input 3" lable="label 3" />
          </div>
          <button type="button" value="Send" id="btn1" className="btn" onClick={this.sumInputs}  >Send</button>
        </div>
        <List arraySum={this.state.arraySum}/>
      </div>
    );
  }
}


export default App;
