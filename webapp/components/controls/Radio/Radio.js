import styled, {css} from "styled-components";
import { space } from 'styled-system'
import {Text} from "../../StyledComponents/Text";
import {Plus, Minus} from '../../StyledComponents/Icon'


const Wrapper = styled.div`
   ${space};
   display: flex;
   width: 22px;
   height: 22px;
   border: 1px solid #00C874;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
   border-radius: 50%;
   min-width: 22px;
   
   ${props =>
    props.blue &&
    css`
        border: 1px solid #6436C7;
    `}
   
`;
const Active = styled.div`
   ${space};
   width: 8px;
   height: 8px;
   border-radius: 4px;
   background: #00C874;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
   position: relative;
   top: 6px;
   left: 6px;
   ${props =>
    props.blue &&
    css`
        background: #6436C7;
    `}
`;

const RadioBtn = ({checked, ...props}) => {
    return (
        <Wrapper {...props}>
            {checked && <Active {...props} />}
        </Wrapper>
    )
}

export {RadioBtn}