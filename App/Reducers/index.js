import {combineReducers, createStore,applyMiddleware} from 'redux';
import counterReducer from './CounterReducer';
import thunk from 'redux-thunk';

const AppReducers = combineReducers({
    counterReducer,
    
});

const rootReducer = (state,action) => {
    return AppReducers(state,action);
}
let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
