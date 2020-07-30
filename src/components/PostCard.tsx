import React from 'react';
import moment from 'moment';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { CardStyle } from './styles/Card';
import img from '../assets/reddit.png';

type Props = any;
const PostCard: React.FC<Props> = ({ post }) => {
  const {
    data: { title, created_utc, url, author, thumbnail, ups },
  } = post;

  return (
    <CardStyle target="_blank" href={url}>
      <Card>
        <Row>
          <Col xs={2} md={2}>
            <Image
              src={
                /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(thumbnail)
                  ? thumbnail
                  : img
              }
              roundedCircle
            />
          </Col>
          <Col xs={7} md={7}>
            <Card.Body>{title}</Card.Body>
          </Col>
          <Col xs={3} md={3}>
            <div className="vote">&#8593; {ups}</div>
          </Col>
        </Row>
        <Card.Footer className="text-muted">
          Created: {moment.unix(created_utc).fromNow()} by {author}
        </Card.Footer>
      </Card>
    </CardStyle>
  );
};

export default PostCard;
