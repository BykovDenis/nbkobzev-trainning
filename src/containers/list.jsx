import { connect } from 'react-redux';

import List from '../components/list';

let mapStateToProps = (state) => {
  return {
    arraySum: state.data.arraySum,
  };
};

const MyListContainer = connect(mapStateToProps)(List);

export default MyListContainer;
