import React from 'react';
import logo from './logo.svg';
import './App.css';
import Myinpunts from './Myinpunts';
import Mybutton from './Mybutton';

function App() {
  return (
    <div id='myroot'>
      <div className = "myroot__inputblock">
        <div className = "myroot__items">
          <Myinpunts divclassName = "myroot__item" inputclassName = "myroot__item--input" lableclassName = "myroot__item--label" id = "input1" placeholder = "input 1" lable = "label 1" />
          <Myinpunts divclassName = "myroot__item" inputclassName = "myroot__item--input" lableclassName = "myroot__item--label" id = "input2" placeholder = "input 2" lable = "label 2" />
          <Myinpunts divclassName = "myroot__item" inputclassName = "myroot__item--input" lableclassName = "myroot__item--label" id = "input3" placeholder = "input 3" lable = "label 3" />
        </div>
        <Mybutton className = "btn" id = "btn1" />      
      </div>
      <div >
        <p>Result sum: </p>
        <ul id="ul1">

        </ul>
      </div>
    </div>
  );
}


export default App;
