import { combineReducers } from 'redux';

import user from './userReducer';
import items from './itemReducer';
import {reducer as notifications} from 'react-notification-system-redux';

export default combineReducers({ user, items, notifications });
