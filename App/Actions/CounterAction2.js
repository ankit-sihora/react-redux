import {connect} from 'react-redux';
import * as Actions from './ActionTypes';
import Component2  from '../Components/Component2';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
});
export default connect (mapStateToProps,mapDispatchToProps)(Component2);