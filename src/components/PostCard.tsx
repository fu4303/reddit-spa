import React from 'react';
import moment from 'moment';
import { Card, Badge } from 'react-bootstrap';
import { CardStyle } from './styles/Card';

type Props = any;
const PostCard: React.FC<Props> = ({ post }) => {
  const {data: { id, title, created_utc, subreddit, author }} = post;

  return (
    <CardStyle to={`/posts/${id}`}>
      <Card>
        <Card.Body>
          {title}
          {/* <Badge pill variant="info">
            {subreddit}
          </Badge> */}
        </Card.Body>

        <Card.Footer className="text-muted">
          Created: {moment.unix(created_utc).fromNow()} by {author}
        </Card.Footer>
      </Card>
    </CardStyle>
  );
};

export default PostCard;
