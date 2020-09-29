import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import Myinpunts from './components/my-input/index';

const Li = (props) => {
  return (
    <li>{props.value}</li>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      totalvalue: '',
      list: []
    };

    this.inputNumberValidate = this.inputNumberValidate.bind(this);
    this.sumInputs = this.sumInputs.bind(this);
  }

  inputNumberValidate(event) {
    const REGEXP = /[0-9]/g;
    const validCharsArray = event.target.value.match(REGEXP) || [];
    if (event.target.id == "input1") {
      this.setState({ value1: validCharsArray.join("") });
    } else if (event.target.id == "input2") {
      this.setState({ value2: validCharsArray.join("") });
    } else if (event.target.id == "input3") {
      this.setState({ value3: validCharsArray.join("") });
    }
  }

  sumInputs() {
    const totalvalue = parseInt(this.state.value1, 10) + parseInt(this.state.value2, 10) + parseInt(this.state.value3, 10);
    const list = this.state.list;
    if (isNaN(totalvalue) == false) {
      this.setState({
        list: list.concat(<Li value={totalvalue} key={list.length} />)
      });
    }
  }

  render() {
    return (
      <div id='myroot'>
        <div className="myroot__inputblock">
          <div className="myroot__items">
            <Myinpunts onChange={this.inputNumberValidate} value={this.state.value1} divclassName="myroot__item" inputclassName="myroot__item--input" lableclassName="myroot__item--label" id="input1" placeholder="input 1" lable="label 1" />
            <Myinpunts onChange={this.inputNumberValidate} value={this.state.value2} divclassName="myroot__item" inputclassName="myroot__item--input" lableclassName="myroot__item--label" id="input2" placeholder="input 2" lable="label 2" />
            <Myinpunts onChange={this.inputNumberValidate} value={this.state.value3} divclassName="myroot__item" inputclassName="myroot__item--input" lableclassName="myroot__item--label" id="input3" placeholder="input 3" lable="label 3" />
          </div>
          <button type="button" value="Send" id="btn1" className="btn" onClick={this.sumInputs}  >Send</button>
        </div>
        <div >
          <p>Result sum: </p>
          <ul>
            {this.state.list.map(function (input) {
              return (input);
            })}
          </ul>
        </div>
      </div>
    );
  }
}


export default App;
