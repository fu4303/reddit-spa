import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';

import { setup } from 'axios-cache-adapter';
import { Dispatch, AnyAction } from 'redux';
import { apiURL } from '../../config';

export const LOADING = 'LOADING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const configure = async () => {
  await localforage.defineDriver(memoryDriver);

  const forageStore = localforage.createInstance({
    driver: [
      localforage.INDEXEDDB,
      localforage.LOCALSTORAGE,
      memoryDriver._driver,
    ],
    name: 'my-cache',
  });

  return setup({
    baseURL: apiURL,

    cache: {
      maxAge: 15 * 60 * 1000,
      store: forageStore,
    },
  });
};

export const getPosts = () => async (dispatch: Dispatch<AnyAction>) => {
  const api = await configure();
  dispatch({ type: LOADING });
  try {
    const res = await api.get(apiURL, {
      cache: {
        maxAge: 15 * 60 * 1000,
        exclude: { query: false },
      },
    });
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data.data.children });
    return res;
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: error.response?.data.error,
    });
    return error;
  }
};
