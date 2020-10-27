import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MyInputs from '../components/my-inputs';
import { addSumAC, addValueInput1AC, addValueInput2AC, addValueInput3AC } from '../redux/actions';

let mapStateToProps = (state) => {
  return {
    inputsValue1: state.data.input_1,
    inputsValue2: state.data.input_2,
    inputsValue3: state.data.input_3,
    activeButton: state.data.activeButton,
    arraySum: state.data.arraySum,
    i: state.data.i,
  };
};

let mapDispatchToProps = (dispatch) => {
  const bindActions = {
    addValueInput1: addValueInput1AC,
    addValueInput2: addValueInput2AC,
    addValueInput3: addValueInput3AC,
    addSum: addSumAC,
  };
  return bindActionCreators(bindActions, dispatch);
};

const myInputsContainer = connect(mapStateToProps, mapDispatchToProps)(MyInputs);

export default myInputsContainer;
