import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/config';

import Nav from '../components/Navbar';
import { getPosts } from '../state/actions/posts';

type Props = ReturnType<typeof mapStateToProps> & any;
const Home: React.FC<Props> = ({ getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <>
      <Nav />
    </>
  );
};

const mapStateToProps = ({ postsReducer }: AppState) => ({
  loading: postsReducer.loading,
  posts: postsReducer.posts,
  subreddits: postsReducer.subreddits 
});

export default connect(mapStateToProps, { getPosts })(Home);
