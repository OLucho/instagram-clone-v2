import { userTypes as types } from './userTypes';

const initialState = {
  user: localStorage.getItem('userData') || '',
  token: localStorage.getItem('userToken') || null,
};

interface IReducer {
  type: string;
  payload: string;
}

export default function usersReducer(state = initialState, { type, payload }: IReducer) {
  switch (type) {
    case types.LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: false,
      };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
