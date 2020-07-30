import styled from 'styled-components';

export const FilterPaneStyle = styled.div`
  display: flex;
  justify-content: flex-end;

  .form-inline {
    margin: 0 30px;

    .react-datepicker__input-container {
      input[type='text'] {
        padding: 10px;
        font-size: 0.9rem;
        color: #007bff;
        border: 1px solid #007bff;
        border-radius: 0.25rem;
      }
    }
  }
  .dropdown {
    outline: none;
    button:focus,
    button:active {
      outline: none;
      box-shadow: none;
    }
  }
`;
