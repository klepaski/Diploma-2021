import styled, {css} from "styled-components";
import { space } from 'styled-system'

const WrapperTab = styled.div`
   ${space};
    border: 1px solid rgba(0,0,0,0.6);
    box-sizing: border-box;
    border-radius: 45px;
    color: rgba(0,0,0,0.4);
    height: 37px;
    line-height: 37px;
    display: inline-block;
    padding: 0 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    
    ${props => props.active &&
        css`
          color: #FFFFFF;
          background: #6436C7;
        `}
`;

export {WrapperTab}