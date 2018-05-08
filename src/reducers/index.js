import { combineReducers } from 'redux';
import user from './userReducer';
import items from './itemReducer';
import notification from './notificationReducer';

export default combineReducers({ user, items, notification });
