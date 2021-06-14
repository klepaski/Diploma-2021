import styled from "styled-components";
import { space } from 'styled-system'
import {Divider} from './Divider'

const FlexBlock = styled.div`
  ${space};
  display: flex;
  width: ${ props => props.nowidth ? 'unset' : '100%' };
  justify-content: ${ props => props.right ? 'flex-end' : props.left ? 'flex-start' : props.center ? 'center' : 'space-between' };
  align-items: ${ props => props.verticalcenter ? 'center' : 'flex-start' };
  flex-direction: ${ props => props.column ? 'column' : 'row' };
  
  ${Divider} {
    width: calc(50% - 15px);
    margin-top: 9px;
  }
`;

export {FlexBlock}