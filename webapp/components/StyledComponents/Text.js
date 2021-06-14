import styled, {css} from "styled-components";
import { space } from 'styled-system'
import { device } from '../../lib/mediaDevice'

const MainTitle = styled.h1`
  ${space};
  color: ${props => props.black ? '#000000' : '#ffffff'};
  margin: 0;
  font-size: 24px; 
  
  
`;
const MainSubTitle = styled(MainTitle)`
  ${space};
  font-size: 18px;  
  color: #000;
`;
const SubTitle = styled.p`
  ${space};
  color: ${props => props.white ? '#ffffff' : '#000000'};
  margin: 0;
  font-size: 15px;  
`;
const SubTitle16 = styled(SubTitle)`
  ${space};
  font-size: 16px;  
`;
const Label = styled.p`
  ${space};
  font-size: ${props => props.small ? '14px' : '18px'};
  font-weight: 700;
  color: #010101b3;
  margin-bottom: 7px;
`;
const Text = styled.div`
  ${space};
  font-size: ${props => props.fz ? `${props.fz}px` : '14px'};
  font-family: ${props => props.bold ? 'CircularProBold' : props.regular ? 'CircularProBook' : 'inherit'};
  text-align: ${ props => props.textCenter ? 'center' : props.textRight ? 'right' : 'left' };
  color: ${ props => props.white ? '#ffffff' : 'rgba(0, 0, 0, 0.8)' };
  line-height: 130%;
  word-wrap: break-word;
  
  
  ${props =>
    props.isLink &&
    css`
      color: #00C874;
      cursor: pointer;
    `}
  ${props =>
    props.isLinkInline &&
    css`
      color: inherit;
      display: inline-block;
      cursor: pointer;
      font-size: inherit;
   `}
   ${props =>
    props.underline &&
    css`
      text-decoration: underline;
    `}
 
  ${props =>
    props.green &&
    css`
      color: #46DFB5;
    `}
  ${props =>
    props.green2 &&
    css`
      color: #00C874;
    `}
  ${props =>
    props.black &&
    css`
      color: #000000;
    `}
  ${props =>
    props.blue &&
    css`
      color: #6436C7;
    `}
  ${props =>
    props.grey &&
    css`
      color: rgba(0, 0, 0, 0.5);;
    `}
    ${props =>
    props.grey2 &&
    css`

      color: rgba(0, 0, 0, 0.4);;
    `}
  ${props =>
    props.grey6 &&
    css`
      color: rgba(0, 0, 0, 0.6);;
    `}
  ${props =>
    props.grey4a &&
    css`
      color: #4A4A4A;
    `}
    ${props =>
    props.logo &&
    css`

      position: relative;
      
      :after {
      position: absolute;
      content: '';
      top: 1px;
      left: -27px;
      width: 19px;
      height: 19px;
      }
    `}
    ${props =>
        props.logostar &&
        css`
    :after {
      background: url(../../static/img/icon-star.svg) center/contain no-repeat;
     }
    `}
    ${props =>
    props.logocheck &&
    css`

    :after {
      background: url(../../static/img/icon-check.svg) center/contain no-repeat;
     }
    `}
  
`;
const ServerError = styled(Text)`
  ${space};
  text-align: center;
  color: #bb1616;
  font-size: 12px;
  // min-height: 15px;
`;
export const Tip = styled(Text)`
  ${space};
  text-align: center;
  color: #bb1616;
  font-size: 12px;
`;
export const LabelText = styled.p`
  ${space};
  font-family: 'CircularProBold';
  font-size: 16px;
  color: #4A4A4A;
  margin-bottom: 10px;
`;



export {MainTitle, MainSubTitle, SubTitle, SubTitle16, Label, Text, ServerError}




