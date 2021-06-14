import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import google from '../../../static/img/google.svg'
import facebook from '../../../static/img/facebook.svg'
import envelope from '../../../static/img/envelope.svg'
import plusBlue from '../../../static/img/plus-blue.svg'
import gallery from '../../../static/img/camera-icon.svg'
import share from '../../../static/img/icon-share.svg'
import likeActive from '../../../static/img/icon-like-active.svg'
import like from '../../../static/img/icon-like.svg'
import search from '../../../static/img/search.svg'

const ButtonWithIcon = styled.button`
  ${space};
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;

  ${(props) =>
    props.google &&
    css`
      width: 100%;
      color: #ffffff;
      background-color: #dc4e41;
      background-image: url(${google});
      background-repeat: no-repeat;
      background-position: 15px 15px;
    `}
  ${(props) =>
    props.facebook &&
    css`
      width: 100%;
      color: #ffffff;
      background: #3b5998;
      background-image: url(${facebook});
      background-repeat: no-repeat;
      background-position: 20px 14px;
    `}
    ${(props) =>
    props.email &&
    css`
      width: 100%;
      color: #979797;
      background-color: #ffffff;
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.07);
      background-image: url(${envelope});
      background-repeat: no-repeat;
      background-position: 17px 15px;
    `}
    ${(props) =>
    props.upload &&
    css`
      width: 100%;
      color: #005563;
      background-color: transparent;
      border: 1px solid #005563;
      background-position: 17px 15px;
    `}
    ${(props) =>
    props.gallery &&
    css`
      width: 90px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      float: right;
      padding-left: 20px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      background-color: #fff;
      border: 1px solid #e0e0e0;
      box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.368518);
      background-image: url(${gallery});
      background-repeat: no-repeat;
      background-position: 7px 9px;
    `}
    ${(props) =>
    props.offer &&
    css`
      width: 80px;
      height: 32px;
      line-height: 32px;
      float: right;
      padding-left: 20px;
      margin-left: 12px;
      background: #ffffff;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.253595);
      border-radius: 4px;
      color: #4a4a4a;
      background-image: url(${share});
      background-repeat: no-repeat;
      background-position: 8px 8px;
    `}
    ${(props) =>
    props.share &&
    css`
      background-image: url(${share});
    `}
    ${(props) =>
    props.like &&
    css`
      background-image: url(${like});
    `}
    ${(props) =>
    props.plusBlue &&
    css`
      width: 100%;
      color: rgba(1, 1, 1, 0.7);
      font-weight: 700;
      background-color: transparent;
      border: 1px solid #6436c7;
      background-image: url(${plusBlue});
      background-repeat: no-repeat;
      background-position: 20px 14px;
    `}
    ${(props) =>
    props.plusGreen &&
    css`
      width: 100%;
      color: rgba(1, 1, 1, 0.7);
      font-weight: 700;
      background-color: transparent;
      border: 1px solid #00c874;
      background-image: url(${plusBlue});
      background-repeat: no-repeat;
      background-position: 20px 14px;
    `}
    ${(props) =>
    props.search &&
    css`
      width: 46px;
      height: 46px;
      background-color: #00c874;
      border-radius: 5px;
      background-image: url(${search});
      background-repeat: no-repeat;
      background-position: 13px 12px;
    `}
`

const ButtonIcon = styled.button`
  ${space};
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;

  ${(props) =>
    props.offer &&
    css`
      float: right;
      margin-left: 8px;
      background: #ffffff;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.253595);
      border-radius: 4px;
      color: #4a4a4a;
      background-repeat: no-repeat;
      background-position: 8px 8px;
    `}

  ${(props) =>
    props.share &&
    css`
      background-image: url(${share});
    `}
    
    
    ${(props) =>
    props.like &&
    css`
      background-image: url(${like});
    `}
    ${(props) =>
    props.like &&
    props.active &&
    css`
      background-image: url(${likeActive});
      background-position: 10px 10px;
    `}
`

export { ButtonWithIcon, ButtonIcon }
