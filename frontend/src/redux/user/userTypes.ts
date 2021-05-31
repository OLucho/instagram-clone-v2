/* eslint-disable @typescript-eslint/no-explicit-any */
// prettier-ignore
export enum ActionTypes  {
  LOGIN_USER_LOADING, 'loginLoading',
  LOGIN_USER_SUCCESS, 'loginSuccess',
  LOGIN_USER_FAILURE, 'loginFailure',

  SIGNUP_SUCCESS, "signUpSuccess"
}

export interface ISignIn {
  username: string;
  password: string;
}

export interface ISignUp {
  name: string;
  username: string;
  password: string;
  email: string;
}

interface LOGIN_SUCCESS {
  type: ActionTypes.LOGIN_USER_SUCCESS;
  payload: any;
}

interface LOGIN_LOADING {
  type: ActionTypes.LOGIN_USER_LOADING;
  payload: any;
}
interface LOGIN_FAILURE {
  type: ActionTypes.LOGIN_USER_FAILURE;
  payload: string;
}

interface SIGNUP_SUCCESS {
  type: ActionTypes.SIGNUP_SUCCESS;
  payload: string;
}

export type Action = LOGIN_SUCCESS | LOGIN_FAILURE | LOGIN_LOADING | SIGNUP_SUCCESS;
