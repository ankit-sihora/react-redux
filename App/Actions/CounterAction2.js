import {connect} from 'react-redux';
import * as Actions from './ActionTypes';
import Component2  from '../Components/Component2';

const mapStateToProps = (state) => ({
    count: state.counterReducer.count,
    //page: state.counterReducer.page,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
    // page:() => dispatch ({type: Actions.PAGE})
});
/* export const counterIncrement = () => ({
    type: Actions.COUNTER_INCREMENT,
})

export const counterDecrement = () => ({
    type: Actions.COUNTER_INCREMENT,
})
export const page = () => ({
    type: Actions.PAGE,
}) */
export default connect (mapStateToProps,mapDispatchToProps)(Component2);