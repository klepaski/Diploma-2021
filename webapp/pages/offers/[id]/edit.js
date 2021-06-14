import React, { useEffect, useMemo, useState } from 'react'
import Router, { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import { Text } from '../../../components/StyledComponents/Text'
import { Wrapper } from '../../../components/StyledComponents/Wrapper'
import Header from '../../../components/Header/Header'
import { EditRow } from '../../../components/ListingOffers/UnlistedOffers'
import {
  WrapperHeader,
  ImgEditMain,
  NameOffer,
  StatusOffer,
  WrapFooterBtns,
} from '../../../components/Offer/edit/styledEditOffer'
import { ArrowLeft } from '../../../components/StyledComponents/Icon'
import Main from '../../../components/Offer/edit/Main'
import Photos from '../../../components/Offer/edit/Photos'
import Videos from '../../../components/Offer/edit/Videos'
import Performance from '../../../components/Offer/edit/Performance'
import Calendar from '../../../components/Offer/edit/Calendar'
import Price from '../../../components/Offer/edit/Price'
import {
  apiEditOffer,
  apiGetEventTypes,
  apiGetOfferById,
  apiGetProgrammerCategories,
  apiOfferPhotos,
  apiSetOfferCoverPhoto,
  apiAddPerformanceDetails,
  apiOfferUpdateDisabled,
  apiOfferCreatePrice,
  apiCreateOfferParams,
  apiDeleteOffer,
} from '../../../actions/api'
import { showNotification } from '../../../utils/notification'
import { modifySrc } from '../../../utils/modifySrc'
import { Divider } from '../../../components/StyledComponents/Divider'
import { Button, ButtonMinHeight } from '../../../components/controls/Button/Button'
import { ContainerDesktop } from '../../../components/StyledComponents/Grid'

const Edit = () => {
  const router = useRouter()
  const { id } = router.query
  const [step, setStep] = useState(0)
  const [offer, setOffer] = useState({})
  const [activePhoto, setActivePhoto] = useState({})
  const [listEventTypes, setListEventTypes] = useState([])
  const [listCategories, setListCategories] = useState([])
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isCloning, setIsCloning] = useState(false)
  const [isPublishing, setIsPublishing] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  useEffect(() => {
    if (id) {
      apiGetOfferById(id)
        .then((res) => {
          res.data.country = res.data.country.split(', ')
          let arr = []
          let country = res.data.country.map((item) => {
            return { label: item, value: item }
          })
          res.data.country = country
          setOffer(res.data)
          setLoading(false)
        })
        .catch((e) => {
          setLoading(false)
          showNotification('error', 'Error while loading offer')
        })
    }
  }, [id])
  useEffect(() => {
    let getListEventTypes = async () => {
      const res = await apiGetEventTypes()
      setListEventTypes(res.data)
    }
    const getCategories = async () => {
      const res = await apiGetProgrammerCategories()
      setListCategories(res.data)
    }
    getCategories()
    getListEventTypes()
  }, [])
  const onChange = (e) => {
    let { name, value, required } = e.target
    if (
      name == 'summary' ||
      name == 'description' ||
      name == 'descriptionWillDone' ||
      name == 'descriptionWillProvide' ||
      name == 'descriptionRequirements' ||
      name == 'descriptionNote'
    ) {
      value = value.slice(0, 500)
    }
    setOffer((offer) => ({ ...offer, [name]: value }))
  }
  const onChangeParams = (obj) => {
    console.log(obj)
    // let {name, value, required} = obj
    // setEvent(event => ({...event, [name]: value}))
  }
  const onChangeVideos = (key, value) => {
    let clone = [...offer.videoUrl]
    clone[key] = value
    setOffer({ ...offer, videoUrl: clone })
  }
  const handleAddInput = (obj) => {
    let clone = [...offer.videoUrl]
    if (clone[clone.length - 1] || !clone.length) {
      clone.push('')
    }
    setOffer({ ...offer, videoUrl: clone })
  }

  const onSaveMain = async (e) => {
    let clone = Object.assign({}, offer)

    let obj = {
      name: clone.name,
      summary: clone.summary,
      description: clone.description,
      descriptionWillDone: clone.descriptionWillDone,
      descriptionWillProvide: clone.descriptionWillProvide,
      descriptionRequirements: clone.descriptionRequirements,
      descriptionNote: clone.descriptionNote,
      category: clone.category.id,
      subCategory: clone.subCategory && clone.subCategory.id ? clone.subCategory.id : '',
      country:
        clone.country && Array.isArray(clone.country)
          ? clone.country.map((item) => item.value).join(', ')
          : clone.country,
      type: clone.type,
    }
    setIsLoading(true)
    const res = await apiEditOffer(id, obj)
    console.log(res)
    if (!res.err) {
      showNotification('info', 'Offer was edited successfully')
      setStep(0)
    } else {
      setIsLoading(false)
      debugger
      showNotification('error', res.err)
    }
    setIsLoading(false)
  }
  const onSaveParams = async (params) => {
    const clone = [...params]
    let arr = []
    clone.map((item, key) => {
      arr.push({
        templateId: item.id,
        value: item.value,
      })
    })
    setIsLoading(true)
    apiCreateOfferParams(id, arr)
      .then((res) => {
        setIsLoading(false)
        showNotification('info', 'Offer was edited successfully')
        setOffer({ ...offer, categoryOptions: res.data.categoryOptions })
        setStep(0)
      })
      .catch((err) => {
        setIsLoading(false)
        showNotification('error', err)
      })
  }
  const onSavePhotos = async (e) => {
    showNotification('info', 'Photos was updated successfully')
    setStep(0)
  }

  const onSaveVideos = async (e) => {
    let filterV = offer.videoUrl.filter((item) => !!item)
    setIsLoading(true)
    const res = await apiEditOffer(id, { videoUrl: filterV })
    setIsLoading(true)
    showNotification('info', 'Videos was updated successfully')
    setStep(0)
  }

  const sendPhotos = async () => {
    if (photos.length) {
      let data = new FormData()
      data.append('offerId', offer.id)
      photos.forEach((file) => data.append('file', file, file.name))
      setIsLoading(true)
      let res = await apiOfferPhotos(data)
      return res.data
    } else {
      return null
    }
  }
  const sendCover = async () => {
    if (activePhoto.id) {
      let res = await apiSetOfferCoverPhoto(id, { offerPhotoId: activePhoto.id })
      return res.data
    } else {
      return null
    }
  }

  const onSavePerfomance = async () => {
    let clone = Object.assign({}, offer)
    let obj = {
      offerId: offer.id,
      maxNumberOfActs: clone.maxNumberOfActs,
      minNumberOfActs: clone.minNumberOfActs,
      daysBeforeBooking: clone.daysBeforeBooking,
      timeOpenCalendar: clone.timeOpenCalendar,
      endDate: getEndDay(clone.startDate),
    }
    setIsLoading(true)
    const res = await apiAddPerformanceDetails(obj)
    if (!res.err) {
      showNotification('info', 'Offer was edited successfully')
      setStep(0)
      console.log(offer)
      debugger
      setOffer({
        ...offer,
        maxNumberOfActs: res.data.maxNumberOfActs,
        minNumberOfActs: res.data.minNumberOfActs,
        daysBeforeBooking: res.data.daysBeforeBooking,
        timeOpenCalendar: res.data.timeOpenCalendar,
        endDate: res.data.endDate,
      })
    } else {
      showNotification('error', res.err)
    }
    setIsLoading(false)
  }
  const onSaveCalendar = async (selectedDays) => {
    setIsLoading(true)
    const obj = {
      offerId: offer.id,
      disabledTimes: selectedDays,
    }

    setIsLoading(true)
    const res = await apiOfferUpdateDisabled(obj)
    if (!res.err) {
      setOffer({ ...offer, calendar: res.data })
      showNotification('info', 'Offer was edited successfully')
      setStep(0)
    } else {
      showNotification('error', res.err)
    }
    setIsLoading(false)
  }
  const onSavePrice = async (event) => {
    setIsLoading(true)
    const clone = { ...offer }
    let obj = {
      offerId: clone.id,
      typePrice: clone.typePrice,
      pricePerAct: clone.pricePerAct,
      currency: clone.currency,
      kickstart: clone.kickstart,
    }
    const res = await apiOfferCreatePrice(obj)
    if (!res.err) {
      showNotification('info', 'Offer was edited successfully')
      setOffer({
        ...offer,
        typePrice: res.data.typePrice,
        pricePerAct: res.data.pricePerAct,
        currency: res.data.currency,
        kickstart: res.data.kickstart,
      })
      setIsLoading(false)
      setStep(0)
    } else {
      showNotification('error', res.err)
    }
    setIsLoading(false)
  }
  const getEndDay = (startDate) => {
    let timeOpenCalendar = offer.timeOpenCalendar
    debugger
    let copiedDate = new Date(startDate)
    let lastDate
    switch (timeOpenCalendar) {
      case '1 month':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 1))
        break
      case '2 month':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 2))
        break
      case '6 month':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 6))
        break
      case '1 year':
        lastDate = new Date(copiedDate.setMonth(copiedDate.getMonth() + 12))
        break
    }
    return lastDate
  }

  const handleChangeStep = () => {
    step ? setStep(0) : Router.push('/offers/[id]', `/offers/${id}`, { shallow: true })
  }

  const handlePublishOffer = () => {
    let data = {
      status: 'open',
    }
    setIsPublishing(true)
    apiEditOffer(id, data)
      .then((res) => {
        setOffer({ ...offer, status: res.data.status })
        showNotification('info', 'Offer was published successfully')
        window.scrollTo(0, 0)
        setIsPublishing(false)
      })
      .catch((e) => {
        showNotification('error', e)
        setIsPublishing(false)
      })
  }

  const handleDeleteOffer = () => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      setLoadingDelete(true)
      apiDeleteOffer(id)
        .then((res) => {
          setLoadingDelete(false)
          Router.push('/profile/offers', `/profile/offers`, { shallow: true })
        })
        .catch((e) => {
          showNotification('error', e)
          setLoadingDelete(false)
        })
    }
  }

  return (
    <>
      {!step && <Header isProfile={!step} previewOfferCb={handleChangeStep} />}

      <ContainerDesktop>
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <Flex>
              {step ? (
                <WrapperHeader onClick={() => handleChangeStep()}>
                  <ArrowLeft mr={15} />
                  <Text fz={18}>{!!step ? offer.name : 'Back to offer'}</Text>
                </WrapperHeader>
              ) : (
                <FlexRight>
                  <ImgEditMain src={modifySrc(offer.avatarUrl, 'offer')} />
                  <NameOffer>{offer.name}</NameOffer>
                  <StatusOffer>{offer.status}</StatusOffer>
                  <Divider mt={40} grey />

                  <WrapFooterBtns2>
                    {offer.status !== 'open' && (
                      <Button transparentBlue onClick={handlePublishOffer} loading={isPublishing}>
                        Publish offer
                      </Button>
                    )}
                    <Button red mt={15} onClick={handleDeleteOffer} loading={loadingDelete}>
                      Delete offer
                    </Button>
                  </WrapFooterBtns2>
                </FlexRight>
              )}

              {step ? (
                <Wrapper pl={18} pr={18} mt={15} pb={70}>
                  {step === 1 && (
                    <Main
                      offer={offer}
                      onChange={onChange}
                      listCategories={listCategories}
                      listEventTypes={listEventTypes}
                      isLoading={isLoading}
                      onSave={onSaveMain}
                    />
                  )}
                  {step === 2 && (
                    <Photos
                      offer={offer}
                      isLoading={isLoading}
                      setOffer={setOffer}
                      onSave={onSavePhotos}
                    />
                  )}
                  {step === 3 && (
                    <Videos
                      videos={offer.videoUrl}
                      onChange={onChangeVideos}
                      isLoading={isLoading}
                      handleAddInput={handleAddInput}
                      onSave={onSaveVideos}
                    />
                  )}
                  {step === 4 && (
                    <Performance
                      offer={offer}
                      onChange={onChange}
                      isLoading={isLoading}
                      onSave={onSavePerfomance}
                    />
                  )}
                  {step === 5 && (
                    <Calendar
                      offer={offer}
                      onChange={onChange}
                      isLoading={isLoading}
                      onSave={onSaveCalendar}
                    />
                  )}
                  {step === 6 && (
                    <Price
                      offer={offer}
                      onChange={onChange}
                      isLoading={isLoading}
                      onSave={onSavePrice}
                    />
                  )}
                </Wrapper>
              ) : (
                <FlexLeft>
                  <EditRow title="Main" onClick={() => setStep(1)} />
                  <EditRow title="Photos" onClick={() => setStep(2)} />
                  <EditRow title="Videos" onClick={() => setStep(3)} />
                  <EditRow title="Details" onClick={() => setStep(4)} />
                  <EditRow
                    title="Calendar"
                    desc="Calendar preferences"
                    onClick={() => setStep(5)}
                  />
                  <EditRow title="Price" onClick={() => setStep(6)} />

                  <WrapFooterBtns>
                    {offer.status !== 'open' && (
                      <Button transparentBlue onClick={handlePublishOffer} loading={isPublishing}>
                        Publish offer
                      </Button>
                    )}
                    <Button red mt={15} onClick={handleDeleteOffer} loading={loadingDelete}>
                      Delete offer
                    </Button>
                  </WrapFooterBtns>
                </FlexLeft>
              )}
            </Flex>
          </>
        )}
      </ContainerDesktop>
    </>
  )
}

const FlexLeft = styled.div``
const FlexRight = styled.div``

const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    ${FlexLeft} {
      width: 60%;
      order: 1;

      ${WrapFooterBtns} {
        display: none;
      }
    }

    ${FlexRight} {
      width: 35%;
      order: 2;

      img {
        height: auto;
        max-height: 50vh;
      }
    }
  }
`

const WrapFooterBtns2 = styled.div`
  margin-top: 20px;
  @media ${device.mobile} {
    display: none;
  }
`

export default Edit
