/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ActionTypes, ISignIn, ISignUp } from './userTypes';
import api from '../../services/api';
import { Dispatch } from 'redux';
import { Action } from 'redux';

export const signIn =
  ({ password, username }: ISignIn) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionTypes.LOGIN_USER_LOADING });
    try {
      const res = await api.post('/user/signin', { username, password });
      if (res.status === 201) {
        const { accessToken } = res.data;
        api.defaults.headers.authorization = `Bearer ${accessToken}`;
        const user = await api.get('/user/auth/me');
        localStorage.setItem('userToken', accessToken);
        localStorage.setItem('userData', JSON.stringify(user.data));
        dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, payload: user.data });
      }
    } catch (err) {
      dispatch({ type: ActionTypes.LOGIN_USER_FAILURE, payload: err.response.data.message });
    }
  };

export const signUp =
  (data: ISignUp) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    dispatch({ type: ActionTypes.LOGIN_USER_LOADING });
    const res = await api.post('/user', data);
    console.log(res);
    if (res.status === 201) {
      // @ts-ignore
      const { data: signInData } = await api.post('/user/signin', { username: data.username, password: data.password });
      api.defaults.headers.authorization = `Bearer ${signInData.accessToken}`;
      localStorage.setItem('userToken', signInData.accessToken);
      localStorage.setItem('userData', JSON.stringify(res.data));
      dispatch({ type: ActionTypes.SIGNUP_SUCCESS, payload: res.data });
    }
  };
