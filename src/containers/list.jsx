import { connect } from 'react-redux';
import List from '../components/list';

let mapStateToProps = (state) => {
    return {
        arraySum: state.data.arraySum
    }
}

let mapDispatchToProps = (dispatch) => {};

const MyListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default MyListContainer;