import React, { useState, useContext, useEffect } from 'react';
import Link from "next/link";
import { sortable } from 'react-sortable';
import moment from "moment/moment";
import { MainContext, MainConsumer } from "../../contextProviders/MainContext"

import {ArrowLeft, UploadImg} from "../../StyledComponents/Icon";
import {WrapperHeight} from "../../StyledComponents/Wrapper"
import {WrapLine, LeftText, RightText} from './styled'
import {Button} from "../../controls/Button/Button";
import {PhotoItem} from '../../Photo/Photo'
import {Text} from "../../StyledComponents/Text";
import {Footer} from "../../Layouts/styledLayouts";
import {Container, Row, Column} from '../../StyledComponents/Grid'
import {modifySrc} from "../../../utils/modifySrc";

import packageJSON from "../../../package";




const CoverPhoto = ({photos, setCover, cover, handleBack}) => {
    const onChangeActive = (id) => {
        setCover(id)
    }

    return (
        <>
            <div className={'z-photo-edit-header'}  >
                <div className='display-flex' onClick={() => handleBack()}>
                    <ArrowLeft mr={15}/>
                    <Text fz={14}>Cover photo</Text>
                </div>
            </div>

            {/*<Text fz={20}>Select a cover photo</Text>*/}
            {/*<Text mb={20}>Which one best illustrates your offer?</Text>*/}
            <WrapperHeight>
                <Container>
                    <Row>
                        {photos.map((item, key) =>
                            <Column key={key} xs={6} >
                                <PhotoItem
                                    src={`${modifySrc(item.photoUrl)}`}
                                    active={cover == item.id}
                                    onClick={() => onChangeActive(item.id)}
                                    hasIconCover={true}
                                />
                            </Column>
                        )}
                    </Row>
                </Container>
            </WrapperHeight>


        </>
    );
};

export default CoverPhoto;



