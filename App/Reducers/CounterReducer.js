import * as Actions from '../Actions/ActionTypes';

const CounterReducer = (state ={count:0},action) => {
    switch (action.type){
        case Actions.COUNTER_INCREMENT:
            return Object.assingn({},state,{
                count: +state.count + 1
            });
        case Actions.COUNTER_DECREMENT:
            return Object.assingn({},state,{
                count: +state.count - 1
            });
        default:
            return state;
    }
}
export default CounterReducer;