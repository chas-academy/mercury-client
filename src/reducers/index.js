import { combineReducers } from 'redux';
import user from './userReducer';
import items from './itemReducer';

export default combineReducers({ user, items });
