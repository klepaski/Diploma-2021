import React, {useCallback} from "react";
import styled from "styled-components";
import {useDropzone} from 'react-dropzone'

import {Button} from '../Button/Button'
import {Close} from '../../StyledComponents/Icon'
import TestImg from '../../../static/img/testImg.jpg'

const Wrapper = styled.div`
    
`;
export const WrapperImages = styled.div`
    min-height: 40px;
    margin-bottom: 20px;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;
export const Hover = styled.div`
    width: 39px;
    height: 39px;
    background: rgb(0, 0, 0, 0.7);
    z-index: 2;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    display: none;
`;
export const WrapperOneImage = styled.div`
    width: 39px;
    height: 39px;
    margin-right: 6px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    
    
    &:hover ${Hover} {
     display: flex;
    }
`;
export const Image = styled.img.attrs({
    src: `${props => props.src}`
})`
    height: 39px;
    width: 100%;
    object-fit: contain;
    overflow: hidden;
    object-position: center center;
`

