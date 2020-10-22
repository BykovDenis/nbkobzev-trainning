import { connect } from 'react-redux';

import MyInputs from '../components/my-inputs';
import { addSumAC, addValueAC } from '../redux/reducers/Iinputs';

let mapStateToProps = (state) => {
  return {
    inputs: state.data.inputs,
    activeButton: state.data.activeButton,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (uinputId, numberValue) => {
      dispatch(addValueAC(uinputId, numberValue));
    },
    addSum: () => {
      dispatch(addSumAC());
    },
  };
};
const myInputsContainer = connect(mapStateToProps, mapDispatchToProps)(MyInputs);

export default myInputsContainer;
