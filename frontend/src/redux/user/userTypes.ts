/* eslint-disable @typescript-eslint/no-explicit-any */
// prettier-ignore
export enum ActionTypes  {
  LOGIN_USER_LOADING, 'loading',
  LOGIN_USER_SUCCESS, 'success',
  LOGIN_USER_FAILURE, 'failure',
}

export interface ISignIn {
  username: string;
  password: string;
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

export type Action = LOGIN_SUCCESS | LOGIN_FAILURE | LOGIN_LOADING;
