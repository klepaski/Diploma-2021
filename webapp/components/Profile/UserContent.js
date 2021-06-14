import React, {useState, useContext, useEffect, useRef} from 'react';
import Router from 'next/router'
import moment from 'moment/moment'
import ImageGallery from "react-image-gallery";

import {CheckLabel, Title, WhoCard} from "../../components/Layouts/styledLayouts";
import { ContainerDesktop } from '../../components/StyledComponents/Grid'
import {Wrapper} from "../../components/StyledComponents/Wrapper";
import Header from "../../components/Header/Header"
import { withAuthSync} from '../../utils/auth'
import {FlexBlock} from "../../components/StyledComponents/FlexBlock";
import {ProfileAvatar} from "../../components/Profile/styledProfileHeader";
import {modifySrc} from "../../utils/modifySrc";
import {Text} from "../../components/StyledComponents/Text";
import {ButtonMinHeight} from "../../components/controls/Button/Button";
import {Divider} from "../../components/StyledComponents/Divider";
import {HorizontalScrollItem, HorizontalScrollWrapper} from "../../components/controls/Scroll/Scroll";
import {MainContext} from "../../components/contextProviders/MainContext";
import {apiGetListUserOffers} from "../../actions/api";
import OfferCardItem from "../../components/Offer/cards/OfferCardItem";
import {Wallpaper, DotList} from "../../components/Profile/styledUser"
import {ButtonWithIcon} from "../../components/controls/Button/ButtonWithIcon";




const UserContent = ({user}) => {
    const [arrayPhotos, setArrayPhotos] = useState([])
    const [offers, setOffers] = useState([])
    const [loadingOffers, setLoadingOffers] = useState([])

    const {me, setMe} = useContext(MainContext)
    const refGallery = useRef(null)

    useEffect(() => {
        if(user.photo && user.photo.length) {
            try{
                let coverUrl = (user.coverPhoto && user.coverPhoto.photoUrl) ? user.coverPhoto.photoUrl : null
                let filteredPhoto = user.photo.filter(item => (item.photoUrl && user.photoUrl !== coverUrl))
                if(coverUrl) filteredPhoto.unshift({photoUrl: coverUrl})
                let images = filteredPhoto.map(item => {
                    if(item.photoUrl)  {
                        return {original: modifySrc(item.photoUrl, 'coverProfile')}
                    }
                })
                setArrayPhotos(images)
            } catch (e) {
                setArrayPhotos([])
            }

        }
    }, [])

    useEffect(() => {
        if(user.id) {
            setLoadingOffers(true)
            apiGetListUserOffers(user.id)
                .then(res => {
                    setOffers(res.data)
                    setLoadingOffers(false)
                })
                .catch(e => {
                    setLoadingOffers(false)
                })
        }
    }, [user.id])



    let profilePhotoSrc = modifySrc(user.profilePhotoURL, 'profile')
    let coverSrc =  modifySrc((user.coverPhoto &&  user.coverPhoto.photoUrl) ?  user.coverPhoto.photoUrl : null, 'coverProfile')



    const handleFullScreen = () => {
        refGallery.current.fullScreen()
    }

    console.log('arrayPhotos', arrayPhotos)


    return (
        <>
            <Wallpaper src={coverSrc}>
                {!!arrayPhotos.length && <ButtonWithIcon gallery textRight onClick={handleFullScreen}>Gallery</ButtonWithIcon> }
            </Wallpaper>

            <ImageGallery
                ref={refGallery}
                items={arrayPhotos}
                showThumbnails={false}
                showPlayButton={false}
                additionalClass={'z-profile-gallery'}
            />

            <ContainerDesktop>
                <Wrapper pl={16} pr={16} pb={50}>
                    <FlexBlock left mb={30}>
                        <ProfileAvatar src={profilePhotoSrc} alt={'logo'} />
                        <FlexBlock column nowidth mt={30} ml={12}>
                            <Text bold fz={18}>{`${user.firstName || ''} ${user.lastName || ''}`}</Text>
                            <Text fz={10}>Joined {moment(new Date(user.createdAt), "YYYYMMDD").fromNow()}</Text>
                        </FlexBlock>
                    </FlexBlock>

                        <>
                            {user.country &&
                            <FlexBlock left ml={25} mb={20}>
                                <DotList/>
                                <Text fz={16}>Lives in {user.country}</Text>
                            </FlexBlock>
                            }
                            {user.phone &&
                            <FlexBlock left ml={25} mb={20}>
                                <DotList/>
                                <Text green2 fz={16}>{user.phone}</Text>
                            </FlexBlock>
                            }
                            {user.email &&
                            <FlexBlock left ml={25} mb={20}>
                                <DotList/>
                                <Text green2 fz={16}>{user.email}</Text>
                            </FlexBlock>
                            }
                        </>


                    <Divider grey mt={40} mb={22}/>
                    <Text bold fz={18}>Education</Text>
                    <Text fz={14} mt={15}>{user.education}</Text>
                    <Divider grey mt={28} mb={22}/>

                    <Text bold fz={18}>Experience</Text>
                    <Text fz={14} mt={15}>{user.experience}</Text>

                    <Divider grey mt={28} mb={22}/>
                    {/*<CheckLabel grbl label='Government ID'/>*/}
                    <CheckLabel grbl label='Email address'/>
                    {/*<CheckLabel grbl label='Phone number'/>*/}

                    <Divider grey mt={28} mb={22}/>

                    <Text bold fz={18} mb={30}>{`${user.firstName || ''} ${user.lastName || ''}`} offers</Text>
                    {loadingOffers ?
                        <>
                            Loading...
                        </>
                        :
                        <HorizontalScrollWrapper>
                            {offers.map((item, key) =>
                                <HorizontalScrollItem key={key}>
                                    <OfferCardItem offer={item} />
                                </HorizontalScrollItem>
                            )}
                        </HorizontalScrollWrapper>
                    }

                </Wrapper>
            </ContainerDesktop>
        </>

    );
};

export default UserContent

