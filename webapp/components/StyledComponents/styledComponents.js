import styled, {css} from "styled-components";
import { space } from 'styled-system'

export const Circle = styled.span`
  ${space};
  display: inline-block;
  border: 2px solid ${props => props.fillCircle ? 'transparent' : 'rgba(0, 0, 0, 0.3)'};
  width: 10px; 
  height: 10px;
  border-radius: 10px;
  margin-left: 9px;
  background-color: ${props => props.fillCircle ? 'rgba(0, 0, 0, 0.3)' : 'transparent'};
`;
export const WrapSearchParams = styled.div`
  ${space};
  margin-bottom: 30px;
  
`;
export const SearchParamsWrapItem = styled.div`
  ${space};
  
`;
export const SearchParamsLabel = styled.span`
  ${space};
  padding-right: 10px;
  font-weight: bold;
  font-size: 12px
  
`;
export const SearchParamsValue = styled.span`
  ${space};
 font-size: 12px;
 color : #585858;
  
`;
