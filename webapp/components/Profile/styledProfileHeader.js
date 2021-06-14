import avatar from '../../static/img/avatar.jpg'
import reviewAvatar from '../../static/img/review-avatar.jpg'
import {Text} from "../StyledComponents/Text";
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'

// const ProfileAvatar = styled.img`
//   height: 130px;
//   width: 130px;
//   border-radius: 50%;
//   margin-top: -50px;
//   background-size: cover;
//   ${props =>
//     props.src &&
//     css`
//       background: url(${props.src}) no-repeat;
//     `}
// `;

const ProfileAvatar = styled.img`
      height: 130px;
      width: 130px;
      border-radius: 50%;
      margin-top: -50px;
      z-index: 2;
`

const ReviewAvatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;

const ReviewTab = styled.div`
  padding: 8px 0;
  margin-right: 15px;
  border-bottom: ${props => !!props.active ? '3px solid #00C874' : '3px solid transparent' };
`;

const ReviewTabBlock = ({title, number, ...props}) => {
    return (
        <ReviewTab {...props}>
            <Text fz={12}>{title} ({number})</Text>
        </ReviewTab>
    )
}

export const MenuSettingsWrapper = styled.div`
  margin: 20px;
`;
export const MenuSettingsItem = styled.div`
  margin-bottom: 15px;
  font-family: ${props => !!props.active ? 'CircularProBold' : 'inherit' };
  cursor: pointer;
 
`;
export const SettingsWrapper = styled.div`
  margin: 20px;
  
   @media ${device.laptopDesktop} { 
    margin: 0 0 50px 0;
   }
`;


export {ProfileAvatar, ReviewAvatar, ReviewTabBlock}

