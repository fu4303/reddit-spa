import styled from 'styled-components';

export const DropDownStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  .dropdown {
    outline: none;
    button:focus,
    button:active {
      outline: none;
      box-shadow: none;
    }
  }
`;
