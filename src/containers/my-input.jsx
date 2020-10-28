import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MyInputs from '../components/my-inputs';
import { addSumAC, inputChange } from '../redux/actions';
import { getArraySum, getCounter, getInputsValue1, getInputsValue2, getInputsValue3 } from '../redux/selectors';

let mapStateToProps = (state) => {
  return {
    inputsValue1: getInputsValue1(state),
    inputsValue2: getInputsValue2(state),
    inputsValue3: getInputsValue3(state),
    arraySum: getArraySum(state),
    counter: getCounter(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  const bindActions = {
    inputChange,
    addSumAC,
  };
  return bindActionCreators(bindActions, dispatch);
};

const myInputsContainer = connect(mapStateToProps, mapDispatchToProps)(MyInputs);

export default myInputsContainer;
