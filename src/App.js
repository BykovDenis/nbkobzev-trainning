import './App.css';

import React, { Component } from 'react';

import List from './components/list';
import MyInput from './components/my-input/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      i: 0,
      arraySum: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSumInputsClick = this.onSumInputsClick.bind(this);
  }

  onInputChange(event) {
    const REGEXP = /[0-9]/g;
    const inputValueText = event.target.value;
    const validCharsArray = inputValueText.match(REGEXP) || [];
    const inputValueNumber = parseInt(validCharsArray.join(''), 10);
    const inputValue = isNaN(inputValueNumber) === false ? inputValueNumber : '';
    switch (event.target.id) {
      case 'input1':
        this.setState({ value1: inputValue });
        break;
      case 'input2':
        this.setState({ value2: inputValue });
        break;
      case 'input3':
        this.setState({ value3: inputValue });
        break;
      default:
        break;
    }
  }

  onSumInputsClick() {
    const totalValue = this.state.value1 + this.state.value2 + this.state.value3 + this.state.i;
    this.setState({ i: this.state.i + 1 });
    const { arraySum } = this.state;
    this.setState({
      arraySum: [...arraySum, totalValue],
    });
  }

  render() {
    return (
      <div id="myroot">
        <div className="myroot__inputblock">
          <div className="myroot__items">
            <MyInput
              onInputChange={this.onInputChange}
              value={this.state.value1}
              id="input1"
              placeholder="input 1"
              label="label 1"
            />
            <MyInput
              onInputChange={this.onInputChange}
              value={this.state.value2}
              id="input2"
              placeholder="input 2"
              label="label 2"
            />
            <MyInput
              onInputChange={this.onInputChange}
              value={this.state.value3}
              id="input3"
              placeholder="input 3"
              label="label 3"
            />
          </div>
          <button type="button" value="Send" id="btn1" className="btn" onClick={this.onSumInputsClick}>
            Send
          </button>
        </div>
        <List arraySum={this.state.arraySum} />
      </div>
    );
  }
}

export default App;
