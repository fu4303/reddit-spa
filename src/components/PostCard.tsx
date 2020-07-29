import React from 'react';
import moment from 'moment';
import { Card, Badge } from 'react-bootstrap';
import { CardStyle } from './styles/Card';

type Props = any;
const TicketCard: React.FC<Props> = ({ post }) => {
  const { id, title, created_utc, subreddit, author } = post;
  return (
    <CardStyle to={`/posts/${id}`}>
      <Card>
        <Card.Header>
          {title}
          <Badge pill variant="info">
            {subreddit}
          </Badge>
        </Card.Header>

        {/* <Card.Body>{message}</Card.Body> */}
        <Card.Footer className="text-muted">
          Created: {moment.utc(created_utc).format('MMMM Do, YYYY')} by {author}
        </Card.Footer>
      </Card>
    </CardStyle>
  );
};

export default TicketCard;
