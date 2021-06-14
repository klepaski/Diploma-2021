import styled, {css} from "styled-components";
import { space } from 'styled-system'
import {HeaderWrapperOffer} from "../../Header/styledHeader";
import {ArrowLeft} from "../../StyledComponents/Icon";
import {Text} from "../../StyledComponents/Text";
import React from "react";

export const WrapperHeader = styled.div`
    ${space};
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 0 20px;
    
    ${Text} {
        width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const ImgEditMain = styled.img`
    ${space};
    width: 100%;
    height: calc(100vw * 9/16);
    max-height: calc(100vw * 9/16);
    object-fit: contain;
    overflow: hidden;
    object-position: center center;    
    background-color: #ececec;
`;
export const NameOffer = styled.div`
    ${space};
    color: rgba(1, 1, 1, 0.7);
    font-size: 28px;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
`;
export const StatusOffer = styled.div`
    ${space};
    color: #848484;
    font-size: 21px;
    padding-left: 20px;
`;
export const WrapFooterBtns = styled.div`
    ${space};
    padding: 30px 20px;
`;




