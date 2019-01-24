import {connect} from 'react-redux';
import * as Actions from './ActionTypes';
import CounterComponent  from '../Components/CounterComponent';


function mapStateToProps (state) {
    return {
    count: state.counterReducer.count,
    }
};
function mapDispatchToProps(dispatch) {
    return {
    increment: () => dispatch(counterIncrement),
    decrement: () => dispatch(counterDecrement),
    }
};
export const counterIncrement = () => ({
    type: Actions.COUNTER_INCREMENT,
})

export const counterDecrement = () => ({
    type: Actions.COUNTER_INCREMENT,
})

export default connect (mapStateToProps,mapDispatchToProps)(CounterComponent);