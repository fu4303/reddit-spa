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
    .row {
      align-items: center;
      display: flex;
      justify-content: space-between;
      img {
        height: 50px;
        width: 50px;
        margin: 20px;
      }
      .card-body {
        line-height: 1.5;
      }
      .vote {
        font-weight: bold;
      }
    }
    .card-footer {
      font-size: 0.8rem;
    }
  }
`;
