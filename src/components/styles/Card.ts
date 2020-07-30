import styled from 'styled-components';

export const CardStyle = styled.a`
  width: 40%;

  &:hover {
    text-decoration: none;
    color: initial;
  }
  .card {
    transition: box-shadow 0.3s;
    margin: 20px 0;

    &:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
    .card-body {
      display: flex;
      justify-content: space-between;
      span {
        align-self: flex-end;
      }
    }
    .card-footer {
      font-size: 0.8rem;
    }
  }
`;
