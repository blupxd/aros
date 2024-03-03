import { createStore } from 'redux'
import parfemReducer from '../reducers/parfemReducer';

export const store = createStore(parfemReducer);