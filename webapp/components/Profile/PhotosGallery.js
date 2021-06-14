import React, { useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'
import {Wrapper, WrapperHeight} from "../StyledComponents/Wrapper";
import {Button} from "../controls/Button/Button";
import Photos from '../Offer/photos/Photos'
import EditPhoto from '../Photo/EditPhoto'
import CoverPhoto from '../Offer/photos/CoverPhoto'

import {
    apiSendProfilePhotos,
    apiGetProfilePhotos,
    apiRemoveProfilePhoto,
    apiSendProfileCoverPhoto
} from '../../actions/api'
import {showNotification} from "../../utils/notification";

import '../Offer/photos/photo.css'

const PhotoGallery = ({photosArr, coverPhoto, isLoading, onSave}) => {
    const [step, setStep] = useState(2)
    const [loading, setLoading] = useState(false)
    const [loadingEdit, setLoadingEdit] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([''])
    const [cover, setCover] = useState(null)
    const [photoEditable, setPhotoEditable] = useState({})
    const [keyPhoto, setKeyPhoto] = useState(null)

    useEffect(() => {
        if(photosArr.length) {
            setPhotos(photosArr)
        }
        if(coverPhoto && coverPhoto.id) {
            setCover(coverPhoto.id)
        }
    }, [])


    const onSetCover = id => {
        setCover(id)
        setStep(2)
    }

    const onDrop = (files) => {
        // setPhotos([...photos, ...files])
        onUploadFiles(files)
    }
    const onUploadFiles = async (files) => {
        let data = new FormData();
        files.forEach(file => {
            if(!file.id || file.blob) {
                if(file.blob) {
                    data.append("file", file.blob, file.name)
                } else {
                    data.append("file", file, file.name)
                }
            }
        });
        setUploading(true)
        let res = await apiSendProfilePhotos(data)
        if(res.data) {
            setPhotos([...photos, ...res.data])
        }
        setUploading(false)
    }

    const handleSavePhotos = async () => {
        let data = new FormData();
        photos.forEach(file => {
            if(!file.id || file.blob) {
                if(file.blob) {
                    data.append("file", file.blob, file.name)
                } else {
                    data.append("file", file, file.name)
                }
            }
        });
        handleSendPhotos(data)
        // setLoading(true)
        // let photosDeleting = photos.filter((item, key) => (item.blob && item.id))
        // if(photosDeleting.length) {
        //     Promise.all(photosDeleting.map(item => handleRemovePhoto(item.id)))
        //         .then(res => {
        //             handleSendPhotos(data)
        //         })
        // } else {
        //     handleSendPhotos(data)
        // }
    }

    const handleSendPhotos = data => {
        setLoading(true)
        apiSendProfilePhotos(data)
            .then(res => {
                setLoading(false)
                let photosFilter = photos.filter((item) => {
                    return (item.id && !item.blob)
                })
                setPhotos([...photosFilter, ...res.data])

                let photosNew = [...photosFilter, ...res.data];

                apiSendProfileCoverPhoto(cover)
                    .then(res => {
                        onSave(photosNew, res.data.coverPhoto)
                    })
                setLoading(false)

            })
            .catch(e => {
                showNotification('error', e)
                setLoading(false)
            })
    }

    const handleEditPhoto = async photo => {
        const res = await apiEditOfferPhoto(photo)
        console.log(res)
        return res
    }

    const handleRemovePhoto = async id => {
        const res = await apiRemoveProfilePhoto(id)
        console.log(res)
        return res
    }

    const handleDeletePhoto = async (key) => {
        let photoByKey = photos[key];
        if(photoByKey.id) {
            const res = await handleRemovePhoto(photoByKey.id)
            let photosClone = [...photos]
            photosClone.splice(key, 1)
            setPhotos(photosClone)
            setStep(2)
        } else {
            let photosClone = [...photos]
            photosClone.splice(key, 1)
            setPhotos(photosClone)
            setStep(2)
        }
    }

    const setEditablePhoto = (photo, key) => {
        setPhotoEditable(photo)
        setKeyPhoto(key)
        setStep(4)
    }
    const handleBackFromEdit = () => {
        setPhotoEditable({})
        setKeyPhoto(null)
        setStep(2)
    }
    const handleRotate = async (blob, url, key) => {
        try {
            let photosCopy = [...photos],
                ephoto = photosCopy[key],
                isCover = !!(cover == ephoto.id)
            setLoadingEdit(true)
            let data = new FormData();
            data.append("file", blob, blob.name)
            let res = await apiSendProfilePhotos(data)
            let res2 = await apiRemoveProfilePhoto(ephoto.id)
            if(isCover) {
                setCover(res.data[0].id)
            }
            photosCopy[key] = res.data[0]
            setPhotos(photosCopy)
            setLoadingEdit(false)
            setStep(2)
        } catch (e) {
            showNotification('error', 'error')
            setLoadingEdit(false)
            setStep(2)
        }

    }

    const onChangePhotoDescription = (id, value) => {
        let photosClone = [...photos]
        let key = photosClone.findIndex(item => item.id === id)
        photosClone[key].description = value
        setPhotos(photosClone)
        console.log(key, value)
    }

    const disabled = loading;

    return (
        <>
            <Wrapper p={17} pt={35}>
                {!loading ?
                    <>
                        <WrapperHeight>
                            {uploading && <div className='photo-uploading-router'> Uploading... </div>}

                            {step === 2 &&
                            <Photos
                                onDrop={onDrop}
                                setStep={setStep}
                                cover={cover}
                                typeDefaultCover={'coverProfile'}
                                photos={photos}
                                setEditablePhoto={setEditablePhoto}
                                isHiddenDeleting={true}
                            />
                            }
                            {step === 3 &&
                            <CoverPhoto
                                photos={photos}
                                setCover={onSetCover}
                                handleBack={handleBackFromEdit}
                                cover={cover}
                            />
                            }
                            {step === 4 &&
                            <EditPhoto
                                keyPhoto={keyPhoto}
                                photo={photoEditable}
                                handleBack={handleBackFromEdit}
                                handleRotate={handleRotate}
                                handleDelete={handleDeletePhoto}
                                onChangePhotoDescription={onChangePhotoDescription}
                                hidedenDescription={true}
                                loadingEdit={loadingEdit}
                            />
                            }

                        </WrapperHeight>

                        <BottomBtnBox>
                            {!!(step === 2 && photos.length) &&  <Button green loading={loading} onClick={handleSavePhotos} mt={70}>Save</Button>}
                        </BottomBtnBox>



                    </>
                    :
                    <>Loading...</>
                }


            </Wrapper>
        </>
    );
};

export default PhotoGallery

const BottomBtnBox = styled.div`
  @media ${device.laptopDesktop} {
    text-align: center;
    button {
      width: 200px;
    }
  }
`