import styled from "styled-components";
import {ButtonWithIcon} from "../controls/Button/ButtonWithIcon";

export const Wallpaper = styled.div`
      width: 100%;
      height: 250px;
      position: relative;
      background: url(${props => props.src}) center/cover no-repeat;
      
      ${ButtonWithIcon} {
            position: absolute;
            top: 20px;
            right: 20px;
      }
      
`
export const DotList = styled.span`
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: #C4C4C4;
      margin-right: 15px;
`

