import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

import MyInput from './my-input';

const styles = () => ({
  inputBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 100, 0.5)',
    outline: '1px solid rgba(100, 255, 100, .5)',
    marginTop: '5px',
    marginRight: '5px',
    marginLeft: '5px',
  },
  inputItems: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '800px',
    paddingLeft: '0',
  },
  btn: {
    width: '75px',
    height: '35px',
    marginBottom: '10px',
  },
});

const MyInputs = (props) => {
  const { classes } = props;
  const isActiveButton =
    props.inputsValue2 !== '' && props.inputsValue3 !== '' && props.inputValue1 !== '' ? false : true;

  const onAddSumInputsClick = () => {
    props.addSumAC(props.arraySum, props.inputsValue1, props.inputsValue2, props.inputsValue3, props.counter);
  };
  return (
    <div className={classes.inputBlock}>
      <div className={classes.inputItems}>
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
        <Button
          variant="contained"
          type="submit"
          value="Send"
          id="btn1"
          disabled={isActiveButton}
          className={classes.btn}
          onClick={onAddSumInputsClick}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(MyInputs);
