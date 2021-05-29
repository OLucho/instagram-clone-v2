export const userTypes = {
  LOGIN_USER_LOADING: 'LOGIN_USER_LOADING',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE: 'LOGIN_USER_FAILURE',
};

export interface ISignIn {
  username: string;
  password: string;
}
