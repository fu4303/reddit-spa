import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/config';

import {
  Container,
  CardColumns,
  Jumbotron,
  Button,
  Spinner,
} from 'react-bootstrap';
import Nav from '../components/Navbar';
import { getPosts } from '../state/actions/posts';
import PostCard from '../components/PostCard';

type Props = ReturnType<typeof mapStateToProps> & any;
const Home: React.FC<Props> = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return (
    <>
      <Nav />
      <Container className="section">
        {posts
          ? posts.map((post: any, idx: number) => (
              <PostCard post={post} key={idx} />
            ))
          : null}
      </Container>
    </>
  );
};

const mapStateToProps = ({ postsReducer }: AppState) => ({
  loading: postsReducer.loading,
  posts: postsReducer.posts,
  subreddits: postsReducer.subreddits,
});

export default connect(mapStateToProps, { getPosts })(Home);
