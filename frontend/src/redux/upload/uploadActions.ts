/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Dispatch } from 'redux';
import { Action } from 'redux';
import api from '../../services/api';
import { ActionTypes } from './uploadTypes';

interface IImage {
  file: string;
  body: string;
}

export const uploadPhoto =
  (image: IImage) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionTypes.UPLOAD_LOADING });
    try {
      const formData = new FormData();
      //@ts-ignore
      formData.append('file', image.file, image.file.name);
      formData.append('body', image.body);
      const res = await api.post('/photo/upload', formData);

      if (res.status === 201) {
        dispatch({ type: ActionTypes.UPLOAD_SUCCESS, payload: res.data.photoCreated });
      }
    } catch (err) {
      dispatch({ type: ActionTypes.UPLOAD_FAILURE, payload: err.response.data.message });
    }
  };
