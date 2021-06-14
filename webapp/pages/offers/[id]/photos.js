import React, { useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

import {Wrapper, WrapperHeight} from "../../../components/StyledComponents/Wrapper";
import {Footer} from "../../../components/Layouts/styledLayouts";
import {Button} from "../../../components/controls/Button/Button";
import Upload from '../../../components/Offer/photos/Upload'
import Photos from '../../../components/Offer/photos/Photos'
import EditPhoto from '../../../components/Photo/EditPhoto'
import CoverPhoto from '../../../components/Offer/photos/CoverPhoto'
import Video from '../../../components/Offer/photos/Video'
import Header from "../../../components/Header/Header";

import {apiEditOffer, apiOfferPhotos, apiSetOfferCoverPhoto, apiRemoveOfferPhoto, apiEditOfferPhoto} from '../../../actions/api'
import withOfferInfo from "../../../utils/offer";
import {showNotification} from "../../../utils/notification";
import useOffer from "../../../hooks/useOffer"

import '../../../components/Offer/photos/photo.css'
import {MainContext} from "../../../components/contextProviders/MainContext";
import {ContainerDesktop, FooterDesktop} from "../../../components/StyledComponents/Grid";
import styled from "styled-components";
import {device} from "../../../lib/mediaDevice";

const PhotosPage = ({}) => {
    const router = useRouter()
    const {id} = router.query
    const offer = useOffer(id)
    const {setOffer} = useContext(MainContext)
    const [step, setStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [loadingEdit, setLoadingEdit] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [videos, setVideos] = useState([''])
    const [cover, setCover] = useState(null)
    const [photoEditable, setPhotoEditable] = useState({})
    const [keyPhoto, setKeyPhoto] = useState(null)

    useEffect(() => {
        if(offer.videoUrl && offer.videoUrl.length) {
            setVideos(offer.videoUrl)
        }
        if(offer.offerPhoto && offer.offerPhoto.length) {
            setPhotos(offer.offerPhoto)
            setAvatarId()
            setStep(2)
        } else {
            setStep(1)
        }
    }, [offer.id])

    const setAvatarId = () => {
        if(!offer.avatarUrl) {
            setCover(offer.offerPhoto[0].id)
        } else {
            let avatar = offer.offerPhoto.find(item => item.photoUrl === offer.avatarUrl)
            if(avatar && avatar.id) {
                setCover(avatar.id)
            }
        }
    }

    const onDrop = (files) => {
        // setPhotos([...photos, ...files])
        // setStep(2)
        onUploadFiles(files)
    }
    const onUploadFiles = async (files) => {
        let data = new FormData();
        data.append("offerId", id);
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
        let res = await apiOfferPhotos(data)
        if(res.data) {
            setPhotos([...photos, ...res.data])
            if(res.data[0]) setCover(res.data[0].id)
        }
        setUploading(false)
        setStep(2)
    }
    const onSetCover = id => {
        setCover(id)
        setStep(2)
    }
    const handleChangeStep = i => {
        if(step === 5 && i === -1) {
            setStep(2)
            return
        }
        if((step === 1 || step === 2 ) && i === -1) {
            Router.push('/offers/[id]/params', `/offers/${id}/params`, {shallow: true})
        } else {
            setStep(step + i)
        }
    }
    const handleSave = async () => {
        if(step == 1) {
            apiEditOffer(id, {step: 2})
            Router.push('/offers/[id]/regulations', `/offers/${id}/regulations`, {shallow: true})
        }
        if(step == 2) {
            let data = new FormData();
            data.append("offerId", id);
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

            // let photosDeleting = photos.filter((item, key) => (item.blob && item.id))
            // if(photosDeleting.length) {
            //     Promise.all(photosDeleting.map(item => handleRemovePhoto(item.id)))
            //         .then(res => {
            //             handleSendPhotos(data)
            //         })
            // } else {
            //     handleSendPhotos(data)
            // }

        } else if(step == 5) {
            let filterV = videos.filter(item => !!item)
            const res = await apiEditOffer(id, {step: 2, videoUrl: filterV})
            setOffer({...offer, videoUrl: res.data.videoUrl})
            Router.push('/offers/[id]/regulations', `/offers/${id}/regulations`, {shallow: true})
        }
    }

    const handleSendPhotos = data => {
        //TODO optimaze and don't send if something not changed

        setLoading(true)
        apiSetOfferCoverPhoto(id,{offerPhotoId: cover})
            .then(res => {
                debugger
                setOffer({...offer, avatarUrl: res.data.avatarUrl})
            })

        let photosWithDesc = photos.filter(item => item.description)
        Promise.all(photosWithDesc.map(item => handleEditPhoto(item)))
            .then(res => {
               console.log('res', res)
            })

        apiOfferPhotos(data)
            .then(res => {
                setLoading(false)
                let photosFilter = photos.filter((item) => {
                    return (item.id && !item.blob)
                })
                setPhotos([...photosFilter, ...res.data])
                setOffer({...offer, offerPhoto: [...photosFilter, ...res.data]})
                setStep(5)
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
        const res = await apiRemoveOfferPhoto(id)
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
            data.append("offerId", offer.id);
            data.append("file", blob, 'blob file')
            let res = await apiOfferPhotos(data)
            if(ephoto && ephoto.id) {
                await handleRemovePhoto(ephoto.id)
            }
            if(isCover) {
                setCover(res.data[0].id)
            }
            photosCopy[key] = res.data[0]
            setPhotos(photosCopy)
            setLoadingEdit(false)
            setStep(2)
        }
        catch (e) {
            showNotification('error', e)
            setLoadingEdit(false)
        }

    }

    const onChangePhotoDescription = (id, value) => {
        value = value.slice(0, 100)
        let photosClone = [...photos]
        let key = photosClone.findIndex(item => item.id === id)
        photosClone[key].description = value
        setPhotos(photosClone)
        console.log(key, value)
    }

    const disabled = loading;

    return (
        <>
            <Header isReg />
            <Wrapper p={17} pt={35}>
                {offer.id ?
                    <>
                    <ContainerDesktop isOffer>
                        <WrapperHeight>
                            {uploading && <div className='photo-uploading-router'> Uploading... </div>}

                            {step === 1 && <Upload onDrop={onDrop} />}
                            {step === 2 &&
                                <Photos
                                    onDrop={onDrop}
                                    setStep={setStep}
                                    cover={cover}
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
                                    loadingEdit={loadingEdit}
                                />
                            }
                            {step === 5 && <Video videos={videos} setVideos={(videos) => setVideos([...videos])} />}
                        </WrapperHeight>
                    </ContainerDesktop>

                        {step !== 3 && step !== 4 &&
                        <FooterDesktop>
                            <Footer pt={30} >
                                <Button onClick={() => handleChangeStep(-1)}>Back</Button>
                                <Button blue
                                        onClick={() => handleSave()}
                                        loading={loading}
                                >
                                    {step === 1 ? 'Skip' : 'Next'}
                                </Button>
                            </Footer>
                        </FooterDesktop>
                        }

                    </>
                    :
                    <>Loading...</>
                }


            </Wrapper>
        </>
    );
};

export default PhotosPage

