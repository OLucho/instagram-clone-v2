import { Dispatch } from 'redux';
import { Action } from 'redux';
import api from '../../services/api';
import { IPhoto } from '../upload/uploadTypes';
import { ActionTypes } from './feedTypes';

export const deletePhoto =
  (photo: IPhoto) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionTypes.GET_FEEDS_LOADING });
    try {
      const res = await api.delete(`/photo/${photo.id}`);
      if (res.status === 200) {
        dispatch({ type: ActionTypes.DELETE_PHOTO, payload: photo.id });
      }
    } catch (err) {
      dispatch({ type: ActionTypes.DELETE_PHOTO_ERROR, payload: err.response.data.message });
    }
  };

export const deleteFollow =
  (userId: number) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionTypes.GET_FEEDS_LOADING });
    try {
      await api.post(`/follow/${userId}`);
    } catch (err) {
      dispatch({ type: ActionTypes.DELETE_PHOTO_ERROR, payload: err.response.data.message });
    }
  };

export const getFeeds =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionTypes.GET_FEEDS_LOADING });
    try {
      const res = await api.get('/feed');
      if (res.status === 200) {
        dispatch({ type: ActionTypes.GET_FEEDS_SUCCESS, payload: res.data });
      }
    } catch (err) {
      dispatch({ type: ActionTypes.GET_FEEDS_FAILURE, payload: err.response.data.message });
    }
  };
