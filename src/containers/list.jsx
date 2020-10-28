import { connect } from 'react-redux';

import List from '../components/list';
import { getArraySum } from '../redux/selectors';

let mapStateToProps = (state) => {
  return {
    arraySum: getArraySum(state),
  };
};

const MyListContainer = connect(mapStateToProps)(List);

export default MyListContainer;
