import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/config';

import { Container, Spinner } from 'react-bootstrap';
import Nav from '../components/Navbar';
import { getPosts } from '../state/actions/posts';
import PostCard from '../components/PostCard';
import { Post } from '../state/actions/posts.types';
import { HomeStyle, Loaders, Footer } from './styles/Home';
import FilterPane from '../components/FilterPane';

type Props = ReturnType<typeof mapStateToProps> & any;
const Home: React.FC<Props> = ({ getPosts, posts, loading }) => {
  const [val, setVal] = useState('');
  const [sortPosts, setSort] = useState(null);
  const [filterType, setFilterType] = useState('');

  const currDate = new Date()
  const [dateInput, setDate] = useState(currDate);

  const [range, setRange] = useState(0);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const highestVote = Math.max(...posts.map((post: Post) => post.data.ups));

  const filter = (type: string, posts: Post[]) => {
    let filteredPosts;
    switch (type) {
      case 'search':
        filteredPosts = posts.filter((post: Post) =>
          post.data.title.toLowerCase().includes(val.toLowerCase())
        );
        break;
      case 'date':
        filteredPosts = posts.filter(
          (post: Post) =>
            post.data.created_utc >=
            Math.floor(new Date(dateInput).getTime() / 1000).toString()
        );
        break;
      case 'range':
        filteredPosts = posts.filter((post: Post) => post.data.ups >= range);
        break;
      default:
        filteredPosts = posts;
        break;
    }
    return filteredPosts;
  };

  const groupedPosts = filter(filterType, posts).reduce(
    (acc: any, curr: any) => {
      (acc[curr.data.subreddit] = acc[curr.data.subreddit] || []).push(curr);
      return acc;
    },
    {}
  );

  return (
    <>
      <HomeStyle>
        <Nav val={val} setVal={setVal} setFilterType={setFilterType} />
        {loading ? (
          <Loaders>
            <Spinner animation="border" variant="primary" />
          </Loaders>
        ) : (
          <Container>
            <FilterPane
              sortPosts={sortPosts}
              setSort={setSort}
              setDate={setDate}
              dateInput={dateInput}
              setFilterType={setFilterType}
              highestVote={highestVote}
              range={range}
              setRange={setRange}
            />
            
            <hr style={{ marginBottom: '40px' }}/>

            {Object.entries(groupedPosts).length > 0 ? (
              Object.entries(groupedPosts).map(
                ([group, posts]: any, idx: any) => (
                  <div key={idx}>
                    <h1>{group.toUpperCase()}</h1>
                    {posts
                      .sort((a: any, b: any) =>
                        sortPosts === 'Ascending'
                          ? a.data.ups - b.data.ups
                          : b.data.ups - a.data.ups
                      )
                      .map((post: any, idx: any) => (
                        <PostCard post={post} key={idx} />
                      ))}
                  </div>
                )
              )
            ) : (
              <h1 style={{ textAlign: 'center' }}>
                No posts match theat criteria
              </h1>
            )}
          </Container>
        )}
      </HomeStyle>

      <Footer>
        <Container>
          {new Date().getFullYear()} &copy; Designed with React Bootstrap
        </Container>
      </Footer>
    </>
  );
};

const mapStateToProps = ({ postsReducer }: AppState) => ({
  loading: postsReducer.loading,
  posts: postsReducer.posts,
  subreddits: postsReducer.subreddits,
});

export default connect(mapStateToProps, { getPosts })(Home);
