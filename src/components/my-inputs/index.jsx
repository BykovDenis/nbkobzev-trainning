import React from 'react';

import MyInput from './my-input';

const MyInputs = (props) => {
  const isActiveButton =
    props.inputsValue2 !== '' && props.inputsValue3 !== '' && props.inputValue1 !== '' ? false : true;

  const onAddSumInputsClick = () => {
    props.addSumAC(props.arraySum, props.inputsValue1, props.inputsValue2, props.inputsValue3, props.counter);
  };
  return (
    <div className="myroot__inputblock">
      <div className="myroot__items">
        <MyInput
          id="input1"
          placeholder="input 1"
          label="label 1"
          value={props.inputsValue1}
          onInputChange={props.inputChange}
        />
        <MyInput
          id="input2"
          placeholder="input 2"
          label="label 2"
          value={props.inputsValue2}
          onInputChange={props.inputChange}
        />
        <MyInput
          id="input3"
          placeholder="input 3"
          label="label 3"
          value={props.inputsValue3}
          onInputChange={props.inputChange}
        />
      </div>
      <div>
        <button
          type="submit"
          value="Send"
          id="btn1"
          disabled={isActiveButton}
          className="btn"
          onClick={onAddSumInputsClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MyInputs;
