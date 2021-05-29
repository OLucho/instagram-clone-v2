import { userTypes as types, ISignIn } from './userTypes';
import api from '../../services/api';

export const signIn =
  ({ password, username }: ISignIn) =>
  async (dispatch: any) => {
    dispatch({ type: types.LOGIN_USER_LOADING });
    try {
      const res = await api.post('/user/signin', { username, password });
      if (res.status === 201) {
        const { accessToken } = res.data;
        api.defaults.headers.authorization = `Bearer ${accessToken}`;
        const user = await api.get('/user/auth/me');
        localStorage.setItem('userToken', accessToken);
        localStorage.setItem('userData', JSON.stringify(user.data));
        dispatch({ type: types.LOGIN_USER_SUCCESS }, { payload: user.data });
      }
    } catch (err) {
      console.log(err);
    }
  };
