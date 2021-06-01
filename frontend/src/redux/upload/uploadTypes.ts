/* eslint-disable @typescript-eslint/no-explicit-any */
// prettier-ignore
export enum ActionTypes  {
    UPLOAD_LOADING, 'uploadLoading',
    UPLOAD_SUCCESS, 'uploadSuccess',
    UPLOAD_FAILURE, 'uploadFailure',
  }

export interface IPhoto {
  id: number;
  body: string;
  key: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    bio: string | null;
    avatar: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

interface LOGIN_SUCCESS {
  type: ActionTypes.UPLOAD_SUCCESS;
  payload: any;
}

interface LOGIN_LOADING {
  type: ActionTypes.UPLOAD_LOADING;
  payload: any;
}
interface LOGIN_FAILURE {
  type: ActionTypes.UPLOAD_FAILURE;
  payload: string;
}

export type Action = LOGIN_SUCCESS | LOGIN_FAILURE | LOGIN_LOADING;
