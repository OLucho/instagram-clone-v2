/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ActionTypes, Action } from './userTypes';

interface IInitialState {
  user: any;
  token: string | null;
  error: string | boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  //@ts-ignore
  user: JSON.parse(localStorage.getItem('userData')) || '',
  token: localStorage.getItem('userToken') || null,
  error: false,
  loading: false,
};

export default function usersReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload,
      };
    default:
      return state;
  }
}
