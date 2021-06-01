/* eslint-disable @typescript-eslint/no-explicit-any */
// prettier-ignore
export enum ActionTypes  {
    GET_FEEDS_LOADING, 'feedsLoading',
    GET_FEEDS_SUCCESS, "feedsSuccess",
    GET_FEEDS_FAILURE, 'uploadFailure',
    DELETE_PHOTO, "deletePhoto",
    DELETE_PHOTO_ERROR, "deletePhotoError"
  }

interface GET_FEEDS_SUCCESS {
  type: ActionTypes.GET_FEEDS_SUCCESS;
  payload: any;
}

interface GET_FEEDS_LOADING {
  type: ActionTypes.GET_FEEDS_LOADING;
}
interface GET_FEEDS_FAILURE {
  type: ActionTypes.GET_FEEDS_FAILURE;
  payload: string;
}
interface DELETE_PHOTO {
  type: ActionTypes.GET_FEEDS_FAILURE;
  payload: number;
}

interface DELETE_PHOTO_ERROR {
  type: ActionTypes.GET_FEEDS_FAILURE;
  payload: string;
}
export type Action = GET_FEEDS_SUCCESS | GET_FEEDS_FAILURE | GET_FEEDS_LOADING | DELETE_PHOTO | DELETE_PHOTO_ERROR;
