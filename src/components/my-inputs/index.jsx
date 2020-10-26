import React from 'react';

import MyInput from './my-input';

const MyInputs = (props) => {
  let inputs = props.inputs.map((inputValue) => (
    <MyInput
      id={inputValue.id}
      placeholder={inputValue.placeholder}
      label={inputValue.label}
      value={inputValue.value}
      onInputChange={props.addValueAC}
      key={inputValue.id}
    />
  ));
  const onAddSumInputsClick = () => {
    props.addSumAC();
  };
  return (
    <div className="myroot__inputblock">
      <div className="myroot__items">{inputs}</div>
      <div>
        <button
          type="submit"
          value="Send"
          id="btn1"
          disabled={props.activeButton}
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
