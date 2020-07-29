import { PostState, PostActions } from '../actions/posts.types';

import {
  LOADING,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../actions/posts';

export const initialState: PostState = {
  posts: null,
  error: null,
  loading: false,
};

const postsReducer = (state = initialState, action: PostActions) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: {
          ...action.payload,
        },
      };

    case GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default postsReducer;
