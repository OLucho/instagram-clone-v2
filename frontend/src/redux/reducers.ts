import { combineReducers } from 'redux';
import feedReducer from './feed/feedReducer';
import uploadReducer from './upload/uploadReducer';
import usersReducer from './user/userReducer';

const reducers = combineReducers({
  user: usersReducer,
  upload: uploadReducer,
  feeds: feedReducer,
});

export type State = ReturnType<typeof reducers>;
export default reducers;
