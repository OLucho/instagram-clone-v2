import { ActionTypes, Action, IPhoto } from './uploadTypes';

interface IInitialState {
  data: IPhoto | null;
  error: boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  data: null,
  error: false,
  loading: false,
};

export default function uploadReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.UPLOAD_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.UPLOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case ActionTypes.UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
