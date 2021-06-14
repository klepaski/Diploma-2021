import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery'
import Slider from 'react-slick'
import styled from 'styled-components'
import galleryBg from '../../static/img/gallery-bg.jpg'
import { modifySrc } from '../../utils/modifySrc'
import { ButtonIcon } from '../controls/Button/ButtonWithIcon'
import { device } from '../../lib/mediaDevice'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useDetectDevice } from '../../lib/useDetectDevice'
import { OnlyMobile, OnlyDesktop } from '../StyledComponents/Grid'
import './styles.css'
import ArrowIcon from '../../static/img/white-arrow.png'
import OfferCover from '../../static/img/offer_cover_big.jpg'

const GalleryOffer = ({ offer, handleToggleLike }) => {
  const { avatarUrl, offerPhoto, status } = offer
  const [active, setActive] = useState(0)
  const [arrayPhotos, setArrayPhotos] = useState([])
  const currentDevice = useDetectDevice()

  useEffect(() => {
    let filteredPhoto = offerPhoto.filter((item) => item.photoUrl !== avatarUrl)
    let photos = avatarUrl ? [{ photoUrl: avatarUrl }, ...filteredPhoto] : filteredPhoto
    let images = photos.map((item) => {
      return { original: modifySrc(item.photoUrl, 'offer') }
      // return { original: item.photoUrl }
    })
    setArrayPhotos(images)
  }, [offer.id])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return <img className={className} src={ArrowIcon} onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return <img className={className} src={ArrowIcon} onClick={onClick} />
  }

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }


  return (
    <GalleryWrapper>
      <OnlyMobile>
        {!!arrayPhotos.length &&
        <ImageGallery
            items={arrayPhotos}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={currentDevice.isLaptopDesktop ? false : true}
        />
        }
      </OnlyMobile>

      {offer.id && (
        <OnlyDesktop>
          {arrayPhotos.length > 2 ? (
            <Slider {...settings}>
              {arrayPhotos.map((item) => (
                <img src={item.original} alt="img" />
              ))}
            </Slider>
          ) : (
            <Cover src={arrayPhotos[0] ? arrayPhotos[0].original : null} />
          )}
        </OnlyDesktop>
      )}

      <BtnShareLike>
        <ButtonIcon offer like active={offer.myLike} onClick={handleToggleLike}></ButtonIcon>
      </BtnShareLike>
    </GalleryWrapper>
  )
}

const GalleryWrapper = styled.div`
  position: relative;

  @media ${device.laptopDesktop} {
    .image-gallery-slide img {
      height: 50vh;
      min-height: 50vh;
    }
  }
`
const BtnShareLike = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  @media ${device.laptopDesktop} {
    right: 150px;
    bottom: 15px;
    top: auto;
  }
`

const Cover = styled.div`
  height: 70vh;
  width: 100%;
  background: url(${(p) => (p.src ? p.src : OfferCover)});
  background-size: cover;
`

export { GalleryOffer }
