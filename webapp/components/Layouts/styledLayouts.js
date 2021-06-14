import styled, {css} from "styled-components";
import {space} from 'styled-system'
import {Text} from "../StyledComponents/Text";
import {Check, CheckBlue, CheckGreenBlack, CheckGreenTransparent, Clr1, Clr2} from '../StyledComponents/Icon'
import { device } from '../../lib/mediaDevice'

const WrapperLayout = styled.div`
  ${space};
  min-height: calc(100vh - 50px);
  position: relative; 
`;
const Title = styled.p`
  ${space};
  color: rgba(0, 0, 0, 0.8);
  font-size: 28px;
  line-height: 120%;
  margin-top: 0;  
  text-align: ${ props => props.textCenter ? 'center' : props.textRight ? 'right' : 'left' };
  
  @media ${device.laptopDesktop} {
    margin-bottom: 50px;
  }
`;
const WhoWrapper = styled.div`
  ${space};
  padding: 16px;
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 15px;
  border: 1px solid blue;
  border-color: ${props => !!props.active ? '#00C874' : 'transparent' };
`;
const Label = styled.div`
  ${space};
  font-size: 18px;
  font-weight: ${props => props.bold ? '700' : '400' };
  line-height: 23px;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 15px;
  
   ${props =>
    props.disabled &&
    css`
        opacity: 0.4
    `}
`;
const Label2 = styled.div`
  ${space};
  font-size: 14px;
  color: rgba(8, 8, 8, 0.8);
  margin-bottom: 5px;
`;
const Footer = styled.div`
  ${space};
  width: 100%;
  display: flex;
  justify-content: ${props => props.flexEnd ? 'flex-end' : 'space-between' };
  
  @media ${device.laptopDesktop} {
    justify-content: space-between;
  }
  
  button {
    width: calc(50% - 10px)
  }
`
const TipWrapper = styled.div`
  ${space};
  background: rgba(0, 200, 116, 0.15);
  border-radius: 15px;
  padding: 25px 30px;
  
   ${props =>
    props.blue &&
    css`
        background: rgba(100, 54, 199, 0.07);
        border: 1px solid rgba(100, 54, 199, 0.41);
        padding: 15px 20px;
    `}
`
const TipWrapper2 = styled(TipWrapper)`
  ${space};
  padding: 15px;
  border-radius: 10px;
`
const TipWrapper3 = styled(TipWrapper2)`
  ${space};
  background-color: #979797;
  color: #ffffff;
  
  ${props =>
    props.blue &&
    css`
        background: #6436C7;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
        color: #ffffff;
    `}
`
const WrapperCheck = styled.div`
  ${space};
  display: flex;
  padding-left: 20px;
  margin-top: 15px;
`;
const WrapperGrBlCheck = styled.div`
  ${space};
  display: flex;
  align-items: center;
    margin-top: 5px;
`;
const EventItemWrapper = styled.div`
  ${space};
  display: flex;
  flex-wrap: wrap;
`;
const EventItem = styled.div`
  ${space};
  display: flex;
  height: 37px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border: 1px solid ${props => props.active ? '#00C874' : 'rgba(0, 0, 0, 0.3)' };
  color: ${props => props.active ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)' };
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const WrapButton = styled.div`
  ${space};
  width: 50%;
`;
const WrapRadioBlock = styled.div`
  ${space};
  display: flex;
  
  ${Text} {
    width: 70%;
    padding: 0 20px 0 15px;
  }
  ${Clr1} {
    height: 65px;
  }
   ${props =>
    props.disabled &&
    css`
        opacity: 0.4
    `}
`;
const WrapRadioBlock2 = styled(WrapRadioBlock)`
  ${space};
  ${Text} {
    width: calc(100% - 50px);
    padding-left: 0;
  }
`;


const WhoCard = ({title, description, ...props}) => {
    return (
        <WhoWrapper {...props} >
            <Text fz={18} mb={'5px'} bold>{title}</Text>
            <Text>{description}</Text>
        </WhoWrapper>
    )
}
const CheckLabel = ({label, blue, grbl}) => {
    return (
        <>
            {grbl ?
                <WrapperGrBlCheck>
                    {/*<CheckGreenBlack/>*/}
                    <CheckGreenTransparent/>
                    <Text fz={14} pl={10}>{label}</Text>
                </WrapperGrBlCheck>
                :
                <WrapperCheck>
                    {blue ?
                        <CheckBlue/> :
                        <Check/>
                    }
                    <Text fz={14} pl={20}>{label}</Text>
                </WrapperCheck>
            }
        </>
    )
}


export {
    WrapperLayout,
    Title,
    WhoCard,
    Label,
    Label2,
    Footer,
    TipWrapper,
    TipWrapper2,
    TipWrapper3,
    CheckLabel,
    EventItem,
    EventItemWrapper,
    WrapButton,
    WrapRadioBlock,
    WrapRadioBlock2
}