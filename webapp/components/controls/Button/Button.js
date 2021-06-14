import React from 'react'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import spinner from '../../../static/img/spinner.gif'

const Spinner = styled.img`
  width: 20px;
  position: absolute;
  right: 15px;
  top: 13px;
`

export const StyledButton = styled.button`
  ${space};
  width: 100%;
  height: 46px;
  position: relative;
  line-height: 46px;
  text-align: center;
  font-size: 15px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 0 10px;

  :disabled {
    opacity: 0.6;
    cursor: ${(props) => (props.loadingg ? 'wait' : 'not-allowed')};
  }

  ${(props) =>
    props.white &&
    css`
      color: #2f364f;
      background-color: #ffffff;
    `}
  ${(props) =>
    props.transparentBlack &&
    css`
      color: #ffffff;
      background: rgba(1, 1, 1, 0.7);
      border: 2px solid #ffffff;
    `}
    ${(props) =>
    props.green &&
    css`
      color: #ffffff;
      background-color: #00c874;
    `}
    ${(props) =>
    props.red &&
    css`
      color: #ffffff;
      background-color: #ff0000;
    `}
    ${(props) =>
    props.blue &&
    css`
      color: #ffffff;
      background-color: #6436c7;
    `}
    ${(props) =>
    props.transparentGreen &&
    css`
      color: #00c874;
      background-color: #ffffff;
      border: 1px solid #00c874;
    `}
    ${(props) =>
    props.transparentBlue &&
    css`
      color: #6436c7;
      background-color: #ffffff;
      border: 1px solid #6436c7;
    `}
    ${(props) =>
    props.transparentPurple &&
    css`
      color: #6436c7;
      background-color: #ffffff;
      border: 1px solid #6436c7;
    `}
    ${(props) =>
    props.transparent &&
    css`
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.3);
    `}
    ${(props) =>
    props.inline &&
    css`
      display: inline-block;
      width: auto;
      padding: 0 35px;
    `}
    ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
   
     ${(props) =>
    props.w100 &&
    css`
      width: 100% !important;
    `}
`

const ButtonMin = styled(StyledButton)`
  ${space};
  height: 32px;
  line-height: 32px;
  width: auto;
  padding: 0 25px;
`

const ButtonMinHeight = styled(StyledButton)`
  ${space};
  height: 36px;
  line-height: 32px;
  width: 100%;
  padding: 0 25px;
  font-weight: 500;

  ${(props) =>
    props.black &&
    css`
      color: #000000;
    `}
`

const Button = ({ loading, disabled, ...props }) => (
  <StyledButton {...props} disabled={disabled || loading} loadingg={loading}>
    {props.children}
    {loading ? <Spinner src={spinner} alt="" /> : <></>}
  </StyledButton>
)

export { Button, ButtonMin, ButtonMinHeight }
