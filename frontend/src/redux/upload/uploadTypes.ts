/* eslint-disable @typescript-eslint/no-explicit-any */
// prettier-ignore
export enum ActionTypes  {
    UPLOAD_LOADING, 'uploadLoading',
    UPLOAD_SUCCESS, 'uploadSuccess',
    UPLOAD_FAILURE, 'uploadFailure',
    RESET_VALUES, "resetValues"
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

interface UPLOAD_SUCCESS {
  type: ActionTypes.UPLOAD_SUCCESS;
  payload: any;
}

interface UPLOAD_LOADING {
  type: ActionTypes.UPLOAD_LOADING;
  payload: any;
}
interface UPLOAD_FAILURE {
  type: ActionTypes.UPLOAD_FAILURE;
  payload: string;
}

interface RESET_VALUES {
  type: ActionTypes.UPLOAD_FAILURE;
  payload: any;
}

export type Action = UPLOAD_SUCCESS | UPLOAD_FAILURE | UPLOAD_LOADING | RESET_VALUES;
