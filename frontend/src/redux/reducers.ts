import { combineReducers } from 'redux';
import usersReducer from './user/userReducer';

const reducers = combineReducers({
  usersReducer,
});

export default reducers;
