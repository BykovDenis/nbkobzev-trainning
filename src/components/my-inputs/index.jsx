import React from 'react';

import MyInput from './my-input';

const MyInputs = (props) => {
  const onInputChange = (payload) => {
    if (payload.uinputId === 'input_1') {
      let activeButton =
        props.inputsValue2 !== '' && props.inputsValue3 !== '' && payload.inputValue !== '' ? false : true;
      props.addValueInput1({ inputValue: payload.inputValue, activeButton: activeButton });
    } else if (payload.uinputId === 'input_2') {
      let activeButton =
        props.inputsValue1 !== '' && props.inputsValue3 !== '' && payload.inputValue !== '' ? false : true;
      props.addValueInput2({ inputValue: payload.inputValue, activeButton: activeButton });
    } else if (payload.uinputId === 'input_3') {
      let activeButton =
        props.inputsValue1 !== '' && props.inputsValue2 !== '' && payload.inputValue !== '' ? false : true;
      props.addValueInput3({ inputValue: payload.inputValue, activeButton: activeButton });
    }
  };
  const onAddSumInputsClick = () => {
    props.addSum({
      arraySum: [...props.arraySum, props.inputsValue1 + props.inputsValue2 + props.inputsValue3 + props.i],
      i: props.i + 1,
    });
  };
  return (
    <div className="myroot__inputblock">
      <div className="myroot__items">
        <MyInput
          id="input_1"
          placeholder="input 1"
          label="label 1"
          value={props.inputsValue1}
          onInputChange={onInputChange}
        />
        <MyInput
          id="input_2"
          placeholder="input 2"
          label="label 2"
          value={props.inputsValue2}
          onInputChange={onInputChange}
        />
        <MyInput
          id="input_3"
          placeholder="input 3"
          label="label 3"
          value={props.inputsValue3}
          onInputChange={onInputChange}
        />
      </div>
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
