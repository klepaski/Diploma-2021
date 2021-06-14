import styled from "styled-components";

const PickerWrapper = styled.div`
  input {
    height: 46px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 13px;
    outline: none;
    width: 100%;
    
    ::-webkit-input-placeholder {
      color: rgba(1, 1, 1, 0.5);
    }
    :-ms-input-placeholder { 
      color: rgba(1, 1, 1, 0.5);
    }
    ::placeholder {
      color: rgba(1, 1, 1, 0.5);
    }
  }
  
  .react-datepicker-wrapper, .react-datepicker__input-container {
    display: block;
  }
`;

export {PickerWrapper}