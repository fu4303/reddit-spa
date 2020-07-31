import styled from 'styled-components';

export const FilterPaneStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  .dater {
    flex-direction: column;
    margin: 10px 0;
    align-items: flex-start;

    .react-datepicker__input-container {
      input[type='text'] {
        padding: 9px;
        font-size: 0.9rem;
        color: #007bff;
        border: 1px solid #007bff;
        border-radius: 0.25rem;
      }
    }
  }
  .dropdown {
    margin: 10px 0;
    outline: none;
    button:focus,
    button:active {
      outline: none;
      box-shadow: none;
    }
  }

  .ranger {
    .form-group {
      align-items: flex-start;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: baseline;
    .dater {
      flex-direction: row;
      margin: 10px 30px;
      align-items: baseline;
    }

    .ranger {
      .form-group {
        flex-flow: nowrap;
        justify-content: space-around;
        label {
          margin: 0 5px;
        }
        input {
          margin: 0 5px;
        }
        small {
          margin: 0 5px;
        }
      }
    }
  }
`;
