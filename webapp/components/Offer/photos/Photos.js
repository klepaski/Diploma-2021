import React, { useState, useContext } from 'react';
import Link from "next/link";
import { sortable } from 'react-sortable';
import moment from "moment/moment";
import { MainContext, MainConsumer } from "../../contextProviders/MainContext"
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import {WrapLine, LeftText, RightText} from './styled'
import {Button} from "../../controls/Button/Button";
import {CoverPhotoPreview, PhotoItem} from '../../Photo/Photo'
import EditPhoto from '../../Photo/EditPhoto'
import {Footer} from "../../Layouts/styledLayouts";
import {Container, Row, Column} from '../../StyledComponents/Grid'
import UploadBtn from '../../controls/Upload/UploadBtn'
import {Text} from "../../StyledComponents/Text";
import {FlexBlock} from "../../StyledComponents/FlexBlock";

import './photo.css'
import {ButtonWithIcon} from "../../controls/Button/ButtonWithIcon";
import {modifySrc} from "../../../utils/modifySrc";


const Photos = ({photos, cover, onDrop, setEditablePhoto, setStep, typeDefaultCover, handleDeleteAll, isDeletingAll, isHiddenDeleting, uploading}) => {
    const preonDrop = (files) => {
        onDrop(files)
    }
    let avatarUrl = '',
        avatar = photos.find(item => item.id === cover);
    if(avatar && avatar.id) {
        avatarUrl = avatar.photoUrl
    }

    return (
        <>
            <Flex>
                <FlexLeft>
                    {!!photos.length &&
                    <>
                        <WrapLine mt={50} mb={15}>
                            <LeftText>Cover photo</LeftText>
                            <RightText onClick={() => setStep(3)}>Change</RightText>
                        </WrapLine>

                        <CoverPhotoPreview src={(avatar && avatar.preview) ? avatar.preview : modifySrc(avatarUrl, typeDefaultCover ? typeDefaultCover : 'offer')}/>
                    </>
                    }

                    <UploadBtn
                        Btn={<Button blue inline disabled={uploading} >{uploading ? 'uploading' : 'Add more photos'}</Button>}
                        onDropFiles={preonDrop}
                        multiple={true}
                    />
                </FlexLeft>
                <FlexRight>
                    <WrapLine mt={50} mb={15} >
                        {!!photos.length &&
                        <FlexBlock verticalcenter>
                            <Text fz={20}>
                                Photos
                                <span className={'tip-photo-edit'}>(click to edit)</span>
                            </Text>

                            {!isHiddenDeleting &&
                            <div className='edit-photo-delete-item'>
                                {isDeletingAll ?
                                    <span>deleting...</span>
                                    :
                                    <span onClick={() => handleDeleteAll()}>delete all photos</span>

                                }
                            </div>
                            }

                        </FlexBlock>
                        }
                    </WrapLine>

                    <Box>
                        <Row>
                            {photos.map((item, key) => {
                                return (
                                    <Column xs={6} key={key} >
                                        <PhotoItem
                                            src={item.preview ? item.preview : modifySrc(item.photoUrl)}
                                            onClick={() => setEditablePhoto(item, key)}
                                        />
                                    </Column>
                                )
                            })}
                        </Row>
                    </Box>

                </FlexRight>
            </Flex>

            {/*<SortableList ref={(sortedList) => {this.sortedList = sortedList}} items={photos} onRemove={this.onRemove}/>*/}

        </>
    );

}

export default Photos;

const FlexLeft = styled.div``
const FlexRight = styled.div``

const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;

    ${FlexLeft} {
      width: 30%;
      padding-right: 20px;
      
      button {
        margin-top: 20px;
      }
    }

    ${FlexRight} {
      width: 70%;
      padding-left: 20px;
    }
  }
`

const Box = styled.div`
    @media ${device.laptopDesktop} {
      ${Column} {
        margin-bottom: 10px;
        
        > div {
            border: 1px solid #dcdcdc;
        }
      }
    }
`
