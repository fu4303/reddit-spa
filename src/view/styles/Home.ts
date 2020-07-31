import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const HomeStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .container {
    padding: 15px;
    h1 {
      font-weight: 1000;
    }
  }
`;

export const Footer = styled.footer`
  align-self: flex-end;
  width: 100%;
  background-color: #343a40;
  padding: 1.5rem;
  color: #fff;
  margin-top: 1rem;
`;

export const Loaders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const CardStyle = styled(Card)`
  transition: box-shadow 0.3s;
  margin: 20px 0;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
  .card-header {
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
