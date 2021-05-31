import { combineReducers } from 'redux';
import usersReducer from './user/userReducer';

const reducers = combineReducers({
  user: usersReducer,
});

export type State = ReturnType<typeof reducers>;
export default reducers;
