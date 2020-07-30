import styled from 'styled-components';

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
