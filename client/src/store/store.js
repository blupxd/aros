import { combineReducers, createStore } from 'redux'
import parfemReducer from '../reducers/parfemReducer';
import renderReducer from '../reducers/renderReducer';

const reducers = combineReducers({
    parfem: parfemReducer,
    render: renderReducer
});

export const store = createStore(reducers)