import styled from "styled-components";
import { space } from 'styled-system'

const ModalWrapper = styled.div`
  ${space};
  padding: 25px;
  background-color: #ffffff;
  border-radius: 14px;
`;
const FlexWrap = styled.div`
  ${space};
  display: flex;
  justify-content: space-between;
  
  Button {
    width: calc(50% - 10px)
  }
`;


export {ModalWrapper, FlexWrap}






