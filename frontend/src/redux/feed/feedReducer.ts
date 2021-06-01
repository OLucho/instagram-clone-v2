/* eslint-disable @typescript-eslint/ban-ts-comment */
import { IPhoto } from '../upload/uploadTypes';
import { ActionTypes, Action } from './feedTypes';

interface State {
  feed: any;
  loading: boolean;
  error: string | boolean | number;
}

const initialState: State = {
  feed: [],
  loading: false,
  error: false,
};

export default function feedReducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.GET_FEEDS_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_FEEDS_SUCCESS:
      return {
        ...state,
        feed: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.GET_FEEDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    //@ts-ignore
    case ActionTypes.DELETE_PHOTO:
      return {
        ...state,
        //@ts-ignore
        feed: state.feed.filter((photo: IPhoto) => photo.id !== action.payload),
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}
