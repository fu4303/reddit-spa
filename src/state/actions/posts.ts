import axios from 'axios';
import { Dispatch, AnyAction } from 'redux';
import { apiURL } from '../../config';

export const LOADING = 'LOADING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPosts = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get(`${apiURL}`);
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data.data.children });
    console.log(res.data.data.children)
    return res;
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: error.response?.data.error,
    });
    return error;
  }
};
