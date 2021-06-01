import { combineReducers } from 'redux';
import uploadReducer from './upload/uploadReducer';
import usersReducer from './user/userReducer';

const reducers = combineReducers({
  user: usersReducer,
  upload: uploadReducer,
});

export type State = ReturnType<typeof reducers>;
export default reducers;
