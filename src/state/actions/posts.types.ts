export interface Post {
  title: string;
  thumbnail: null | string;
  created_utc: number;
  url: string;
  subreddit: string;
  ups: number;
  downs: number;
}

export interface PostState {
  loading: boolean;
  posts: null | Post;
  error: null | string;
}

enum ActionTypes {
  LOADING = 'LOADING',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS',
  GET_POSTS_FAILURE = 'GET_POSTS_FAILURE',
}

export interface loadingAction {
  type: ActionTypes.LOADING;
}

export interface getPostsSuccessAction {
  type: ActionTypes.GET_POSTS_SUCCESS;
  payload: Post;
}
export interface getPostsFailureAction {
  type: ActionTypes.GET_POSTS_FAILURE;
  payload: string;
}

export type PostActions =
  | loadingAction
  | getPostsSuccessAction
  | getPostsFailureAction;
