import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MyInputs from '../components/my-inputs';
import { addSumAC, addValueAC } from '../redux/actions';

let mapStateToProps = (state) => {
  return {
    inputs: state.data.inputs,
    activeButton: state.data.activeButton,
  };
};

let mapDispatchToProps = (dispatch) => {
  const bindActions = {
    addValueAC,
    addSumAC,
  };
  return bindActionCreators(bindActions, dispatch);
};

const myInputsContainer = connect(mapStateToProps, mapDispatchToProps)(MyInputs);

export default myInputsContainer;
