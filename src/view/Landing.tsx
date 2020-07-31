import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../store/config';

import {
  Jumbotron,
  Container,
  Spinner,
  CardColumns,
  Card,
} from 'react-bootstrap';

import { getPosts } from '../state/actions/posts';
import { HomeStyle, Loaders, Footer, CardStyle } from './styles/Home';

type Props = ReturnType<typeof mapStateToProps> & any;
const Landing: React.FC<Props> = ({ getPosts, subreddits, loading }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <HomeStyle>
        <Jumbotron>
          <Container>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>
              Welcome to Reddit Mini Clone!
            </h3>
          </Container>
        </Jumbotron>
        {loading ? (
          <Loaders>
            <Spinner animation="border" variant="primary" />
          </Loaders>
        ) : (
          <Container>
            <div>What subreddit would you like to explore today?</div>
            <CardColumns>
              {subreddits.length > 0
                ? subreddits.map((sub: string, idx: number) => (
                    <Link to={`/r/${sub}`} key={idx}>
                      <CardStyle>
                        <Card.Header>{sub}</Card.Header>
                      </CardStyle>
                    </Link>
                  ))
                : null}
            </CardColumns>
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

export default connect(mapStateToProps, { getPosts })(Landing);
