import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';
import { CardStyle } from './styles/Card';

type Props = any;
const PostCard: React.FC<Props> = ({ post }) => {
  const {
    data: { title, created_utc, url, author },
  } = post;

  return (
    <CardStyle target="_blank" href={url}>
      <Card>
        <Card.Body>{title}</Card.Body>

        <Card.Footer className="text-muted">
          Created: {moment.unix(created_utc).fromNow()} by {author}
        </Card.Footer>
      </Card>
    </CardStyle>
  );
};

export default PostCard;
