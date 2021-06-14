import styled, { css } from 'styled-components'
import { space } from 'styled-system'

export const Title = styled.div`
  ${space};
  font-size: 28px;
  color: rgba(0, 0, 0, 0.8);
  padding: 20px;
`
export const WrapperInboxItem = styled.div`
  ${space};
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`
export const Avatar = styled.img`
  ${space};
  // src: ${(props) => props.src};
  width: 40px;
  max-height: 40px;
  border-radius: 20px;
`
export const WrapperContext = styled.div`
  ${space};
  width: calc(100% - 40px);
  padding-left: 15px;
`
export const WrapperNameDate = styled.div`
  ${space};
  display: flex;
  justify-content: space-between;
`
export const NameOffer = styled.div`
  ${space};
  width: calc(100% - 50px);
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const DateOffer = styled.div`
  ${space};
  width: 70px;
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
`
export const WrapLastMessage = styled.div`
  ${space};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`
export const LastMessage = styled.div`
  ${space};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.6);
  font-size: 15px;
  width: calc(100% - 30px);
`
export const UnreadCount = styled.div`
  ${space};
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #00c874;
`

export const Status = styled.div`
  ${space};
  padding-top: 5px;
  color: #4000c8;
  font-size: 15px;
`
export const HeaderChat = styled.div`
  ${space};
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-align: center;
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerMessages = styled.div`
  ${space};
  position: relative;
  // padding: 20px;
  // height: calc(100vh - 235px);
  // background-color: #ffffff;
  // overflow-y: scroll;
`
export const FadeMessages = styled.div`
   position: absolute;
   height: 100%
   width: 100%;
   background-color: #ffffff;
   z-index: 2;
`
export const FooterChat = styled.div`
    ${space};
    height: 130px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    // padding: 20px;
    position: relative;
    width: 100%;
    bottom: 0;
    padding 0 20px;
`
export const TextareaMessage = styled.textarea`
  ${space};
  height: 70px;
  padding: 10px 0;
  border: none;
  width: calc(100% - 50px);
  font-size: 14px;
  resize: none;

  :focus {
    outline: none;
  }
`
export const SendBtn = styled.div`
  ${space};
  color: #00c874;
  font-size: 16px;
  display: inline-block;
  position: absolute;
  top: 10px;
  ${(props) =>
    props.disabled &&
    css`
      color: #00c87473;
    `}
`
export const WrapperContentMessages = styled.div`
  ${space};
  padding: 20px;
  height: calc(100vh - 200px);
  overflow-y: auto;
`
export const ProtectMessage = styled.div`
  ${space};
  padding: 0 15% 20px 15%;
  font-size: 15px;
  line-height: 130%;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  word-wrap: break-word;
`
export const MessageWrapper = styled.div`
  ${space};
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
`
export const AvatarMessage = styled.img`
  ${space};
  width: 36px;
  height: 36px;
  border-radius: 18px;
`
export const TextMessage = styled.div`
  ${space};
  color: #ffffff;
  word-break: break-all;
`
export const DateMessage = styled.div`
  ${space};
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
  ${(props) =>
    props.isSystem &&
    css`
      text-align: center;
      color: rgba(0, 0, 0, 0.4);
    `}
`

export const MessageTextWrap = styled.div`
  ${space};
  padding: 10px;
  font-size: 15px;
  line-height: 130%;
  background: rgba(1, 1, 1, 0.6);
  border-radius: 8px 8px 8px 0;
  color: #ffffff;
  width: 100%;
  margin-left: 10px;
  position: relative;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    position: absolute;
    left: -20px;
    bottom: 0;
    background: radial-gradient(
        circle,
        transparent 19px,
        ${(props) => (props.isMy ? '#DADADA' : '#01010199')} 20px
      )
      21px 21px / 41px 40px;
  }

  ${(props) =>
    props.isMy &&
    css`
      background: #dadada;
    `}

  ${TextMessage} {
    ${(props) =>
      props.isMy &&
      css`
        color: rgba(0, 0, 0, 0.7);
      `}
  }
  ${DateMessage} {
    ${(props) =>
      props.isMy &&
      css`
        color: rgba(0, 0, 0, 0.3);
      `}
  }
`

export const SystemMessageTextWrap = styled.div`
  ${space};
  padding: 10px;
  font-size: 15px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.6);
  width: 100%;
`
export const Details = styled.div`
  ${space};
  color: #00c874;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
`
export const OfferNameHeaderWrapper = styled.div`
  ${space};
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`
export const OfferNameHeader = styled.div`
  ${space};
  font-size: 18px;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const OfferDates = styled.div`
  ${space};
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
`
export const TextSystemMessage = styled.div`
  ${space};
  color: #6436c7;
  font-size: 16px;
  font-family: 'CircularProBold';
  text-align: center;
`
