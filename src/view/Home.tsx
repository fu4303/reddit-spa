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
import { Post } from '../state/actions/posts.types';

type Props = ReturnType<typeof mapStateToProps> & any;
const Home: React.FC<Props> = ({ getPosts, posts }) => {
  const [val, setVal] = useState('');

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const filteredPosts = posts.filter((post: Post) => {
    return post.data.title.toLowerCase().includes(val.toLowerCase());
  });
  const groupedPosts = filteredPosts.reduce((acc: any, curr: any) => {
    (acc[curr.data.subreddit] = acc[curr.data.subreddit] || []).push(curr);
    return acc;
  }, {});
  console.log(groupedPosts);

  return (
    <>
      <Nav val={val} setVal={setVal} />
      <Container>
        {Object.entries(groupedPosts).map(([group, posts]: any, idx: any) => (
          <>
            <h1>{group.toUpperCase()}</h1>
            {posts.map((post: any, idx: any) => (
              <PostCard post={post} key={idx} />
            ))}
          </>
        ))}
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
