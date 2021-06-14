import React, { useState, useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'
import moment from 'moment'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Router, { useRouter } from 'next/router'
import { useAction, useAtom } from '@reatom/react'
import { modifyToBr } from '../../../utils/utils'
import { withReatom } from '../../../lib/withReatom'
import Header from '../../../components/Header/Header'
import { GalleryOffer } from '../../../components/Gallery/GalleryOffer'
import { Video } from '../../../components/Gallery/Video'
import {
  apiGetOfferById,
  apiReservOffer,
  apiCreateChatOffer,
  apiGetListUserOffers,
  apiGetUserById,
  apiEditOfferPhoto,
  apiOfferLike,
  apiGetOfferReviews,
} from '../../../actions/api'
import { Text, LabelText } from '../../../components/StyledComponents/Text'
import { FlexBlock } from '../../../components/StyledComponents/FlexBlock'
import { AvatarOffer } from '../../../components/Profile/styledProfileOffer'
import { ReviewAvatar } from '../../../components/Profile/styledProfileHeader'
import { Divider } from '../../../components/StyledComponents/Divider'
import { Button, ButtonMinHeight } from '../../../components/controls/Button/Button'
import { Wrapper } from '../../../components/StyledComponents/Wrapper'
import { showNotification } from '../../../utils/notification'
import { MainContext } from '../../../components/contextProviders/MainContext'
import useUserInfo from '../../../hooks/useUserInfo'
import { modifySrc } from '../../../utils/modifySrc'
import {
  Column,
  Container,
  Row,
  OnlyMobile,
  OnlyDesktop,
} from '../../../components/StyledComponents/Grid'
import { ListLR, ListItem } from '../../../components/controls/Lists/ListData'
import imgArrDown from '../../../static/img/arrow-down.svg'
import {
  HorizontalScrollItem,
  HorizontalScrollWrapper,
} from '../../../components/controls/Scroll/Scroll'
import OfferCardItem from '../../../components/Offer/cards/OfferCardItem'
import DetailsBook from '../../../components/Offer/detailsBook'
import { ModalContact } from '../../../components/Modal/ModalContact'
import { device } from '../../../lib/mediaDevice'
import { useDetectDevice } from '../../../lib/useDetectDevice'

const Calendar = dynamic(import('../../../components/controls/Calendar/Calendar'), { ssr: false })
const CalendarAirbnb = dynamic(import('../../../components/controls/Calendar/CalendarAirbnb'), {
  ssr: false,
})

const OfferPage = () => {
  const currentDevice = useDetectDevice()
  const router = useRouter()
  const { me } = useContext(MainContext)
  const { id } = router.query
  const [offer, setOffer] = useState({
    categoryOptions: [],
  })
  const [bookingDates, setBookingDates] = useState({ startDate: null, endDate: null })
  const [loading, setLoading] = useState(false)
  const [loadingOffers, setLoadingOffers] = useState(false)
  const [isLoadingChat, setIsLoadingChat] = useState(false)
  const [isSendingMessage, setIsSendingMessage] = useState(false)
  const [isLoadingReviews, setIsLoadingReviews] = useState(true)
  const [loadingReserv, setLoadingReserv] = useState(false)
  const [selectedDays, setSelected] = useState([])
  const [reviews, setReviews] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [detailsView, setDetailsView] = useState(false) // TODO change to false by default
  const [showModalContact, setShowModalContact] = useState(false)

  useEffect(() => {
    if (currentDevice.isLaptopDesktop) {
      setShowMore(true)
    }
  }, [currentDevice.isLaptopDesktop])

  // const offerById = useAtom(offersAtom, offers => {
  //     return offers.find(item => item.id === id)
  // } , [id])

  useEffect(() => {
    let getOfferInfo = async () => {
      try {
        const res = await apiGetOfferById(id)
        preInit(res.data)
      } catch (e) {
        showNotification('error', 'Error while loading offer')
      }
    }

    let preInit = (offer) => {
      let calendar = offer.calendar || []
      let selectedArr = calendar.map((item) => item.date)
      setSelected(selectedArr)
      setOffer(offer)

      getOfferReviews(offer.id)
    }
    if (id) {
      getOfferInfo()
    }
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [detailsView])

  const getOfferReviews = async (id) => {
    const res = await apiGetOfferReviews(id)
    setReviews(res.data)
    setIsLoadingReviews(false)
  }

  const onChangeDates = (obj) => {
    let copy = Object.assign({}, obj)
    if (!copy.endDate || copy.endDate == 'Invalid Date') copy.endDate = null
    if (!copy.startDate || copy.startDate == 'Invalid Date') copy.startDate = null
    setBookingDates(copy)
  }
  const onChangeBookingData = (e) => {
    let { name, value } = e.target
    if (name === 'locationDetails' || name === 'additionalTerms') {
      value = value.slice(0, 300)
    }

    console.log(value, value.length)

    setBookingDates({ ...bookingDates, [name]: value })
  }

  const handleBook = () => {
    setLoadingReserv(true)
    apiReservOffer(id, bookingDates)
      .then((res) => {
        setLoadingReserv(false)
        // showNotification('info', 'Success.')
        // todo: save dates to Calendar, maybe change Order
        setOffer({ ...offer, calendar: [...offer.calendar, ...res.data] })
        onChangeDates({})

        if (res.data && res.data[0]) {
          Router.push('/inbox/[id]/booking', `/inbox/${res.data[0].bookingId}/booking`, {
            shallow: true,
          })
        }
      })
      .catch((e) => {
        showNotification('error', e)
        setLoadingReserv(false)
      })
  }

  const handleContactProgrammer = () => {
    // setIsLoadingChat(true)
    if (offer.preChatId) {
      Router.push('/inbox/[id]/offer', `/inbox/${offer.preChatId}/offer`, { shallow: true })
    } else {
      setShowModalContact(true)
    }
  }

  const handleSendMessage = (msg) => {
    setIsSendingMessage(false)
    apiCreateChatOffer(offer.id, msg)
      .then((res) => {
        setIsLoadingChat(false)
        if (res.data && res.data.preChatId) {
          setShowModalContact(false)
          setIsSendingMessage(false)
          Router.push('/inbox/[id]/offer', `/inbox/${res.data.preChatId.id}/offer`, {
            shallow: true,
          })
        }
      })
      .catch((e) => {
        setIsSendingMessage(false)
        showNotification('error', e)
        setIsLoadingChat(false)
      })
  }
  const handleToggleLike = () => {
    if (!me.id) {
      window.location.href = '/login'
      return
    }
    apiOfferLike(offer.id)
      .then((res) => {
        setOffer({ ...offer, myLike: !offer.myLike })
      })
      .catch((e) => {})
  }

  let disabledBtn = !bookingDates.startDate || !bookingDates.endDate || loadingReserv

  const owner = useUserInfo(offer.userId)

  let params1 = offer.categoryOptions.filter(
    (item) => item.templateId && item.templateId.step === 1,
  )
  let params2 = offer.categoryOptions.filter(
    (item) => item.templateId && item.templateId.step === 2,
  )
  let params3 = offer.categoryOptions.filter(
    (item) => item.templateId && item.templateId.step === 3,
  )
  let params4 = offer.categoryOptions.filter(
    (item) => item.templateId && item.templateId.step === 4 && item.value === 'true',
  )

  console.log('offer', offer)
  // console.log('owner', owner)
  // console.log('params4', params4)
  console.log('me', me)

  const iOwner = me.id === offer.userId
  const hasMore =
    offer.description ||
    offer.descriptionWillDone ||
    offer.descriptionWillProvide ||
    offer.descriptionRequirements ||
    offer.descriptionNote

  if (detailsView) {
    return (
      <DetailsBook
        offer={offer}
        bookingDates={bookingDates}
        setDetailsView={setDetailsView}
        onChange={onChangeBookingData}
        handleBook={handleBook}
        loadingReserv={loadingReserv}
      />
    )
  }

  if (!offer.id) return null

  return (
    <>
      <Header isProfile isTransparent />
      <>
        <GalleryOffer offer={offer} handleToggleLike={handleToggleLike} />
        <Box>
          <Wrapper pl={18} pr={18} pb={80}>
            <Flex>
              <Left isName>
                <Text grey2 fz={16} mt={18}>
                  {offer.subCategory && offer.subCategory.category
                    ? offer.subCategory.category
                    : offer.category.category}
                </Text>
                <Text fz={23}>{offer.name}</Text>
              </Left>
              <Right right isOwner>
                <Link href={iOwner ? '/profile' : `/users/${offer.userId}`}>
                  <FlexBlock left verticalcenter nowidth mt={12}>
                    {owner.id && (
                      <>
                        <AvatarOffer src={modifySrc(owner.profilePhotoURL, 'person')} />
                        <div>
                          <Text ml={15} fz={16} bold>
                            {owner.firstName} {owner.lastName}
                          </Text>
                          <Text ml={15} fz={14}>
                            {owner.country}
                          </Text>
                          <Text ml={15} fz={10}>
                            Joined {moment(owner.createdAt, 'YYYYMMDD').fromNow()}
                          </Text>
                        </div>
                      </>
                    )}
                  </FlexBlock>
                </Link>
              </Right>
            </Flex>

            <Flex>
              <Left>
                <Container mt={30}>
                  <Row>
                    {params1.map((item) => {
                      if (!item.value) return null
                      return (
                        <Column key={item.id} xs={6} mb={15}>
                          <Text bold>{item.value}</Text>
                          <Text grey4a>{item.templateId.title}</Text>
                        </Column>
                      )
                    })}
                  </Row>
                </Container>
                <OnlyDesktop>
                  <Divider grey mt={20} mb={20} />
                  <Text bold fz={18} mt={12} mb={20}>
                    Availability
                  </Text>
                  <div style={{ marginTop: '20px' }}>
                    {me.id === offer.userId ? (
                      <Calendar
                        selectedDays={selectedDays}
                        enabledAll={true}
                        noEditable={true}
                        endDate={offer.endDate}
                      />
                    ) : (
                      <CalendarAirbnb
                        userId={me.id}
                        calendar={offer.calendar}
                        endDateOffer={offer.endDate}
                        onChangeDates={onChangeDates}
                        bookingDates={bookingDates}
                      />
                    )}
                  </div>
                  <Divider grey mt={20} mb={20} />
                </OnlyDesktop>
              </Left>
              <Right>
                {offer.videoUrl && !!offer.videoUrl.length && (
                  <>
                    <HorizontalScrollWrapper>
                      {offer.videoUrl.map((item, key) => (
                        <HorizontalScrollItem key={key}>
                          <Video src={item} />
                        </HorizontalScrollItem>
                      ))}
                    </HorizontalScrollWrapper>
                    <Divider grey mt={20} mb={20} />
                  </>
                )}

                <Text grey4a dangerouslySetInnerHTML={modifyToBr(offer.summary)} />


                {/*!iOwner && (
                  <ButtonMinHeight
                    transparentGreen
                    h36
                    mt={24}
                    disabled={isLoadingChat}
                    onClick={handleContactProgrammer}
                  >
                    Contact
                  </ButtonMinHeight>
                )*/}

                {!!params4.length && (
                  <>
                    <Divider grey mt={24} mb={22} />
                    <Text bold fz={18} mt={12} mb={20}>
                      Special conditions
                    </Text>
                    <Container mt={20}>
                      <Row>
                        {params4.map((item, key) => (
                          <Column key={item.id} xs={6} mb={15}>
                            <ListItem title={item.templateId.title} type={'blackGreen'} fz={14} />
                          </Column>
                        ))}
                      </Row>
                    </Container>
                  </>
                )}

                <OnlyMobile>
                  <Divider grey mt={20} mb={20} />
                  <Text bold fz={18} mt={12} mb={20}>
                    Availability
                  </Text>
                  <div style={{ marginTop: '20px' }}>
                    {me.id === offer.userId ? (
                      <Calendar
                        selectedDays={selectedDays}
                        enabledAll={true}
                        noEditable={true}
                        endDate={offer.endDate}
                      />
                    ) : (
                      <CalendarAirbnb
                        userId={me.id}
                        calendar={offer.calendar}
                        endDateOffer={offer.endDate}
                        onChangeDates={onChangeDates}
                        bookingDates={bookingDates}
                      />
                    )}
                  </div>
                </OnlyMobile>

                {/*<Divider grey full />*/}

                {!!params2.length && (
                  <>
                    <Text bold fz={18} mt={50} mb={20}>
                      Conditions{' '}
                    </Text>
                    {params2.map((item, key) => (
                      <ListLR key={item.id} title={item.templateId.title} value={item.value} />
                    ))}
                  </>
                )}

                {!!params3.length && (
                  <>
                    <Text bold fz={18} mt={30} mb={15}>
                      Rules
                    </Text>
                    {params3.map((item, key) => (
                      <ListItem key={item.id} title={item.templateId.title} type={'black'} />
                    ))}
                    <Divider grey mt={20} mb={25} />
                  </>
                )}

                <Divider grey mt={20} mb={20} />

                {isLoadingReviews ? (
                  <>Loading...</>
                ) : (
                  <>
                    <Text bold fz={18} mb={30}>
                      {reviews.length} reviews
                    </Text>
                    <Divider grey mb={22} />

                    {reviews.map((item) => (
                      <Link href={'/users/[id]'} as={`/users/${item.userId.id}`} shallow>
                        <div>
                          <FlexBlock left>
                            <ReviewAvatar src={modifySrc(item.userId.profilePhotoURL, 'person')} />
                            <FlexBlock column nowidth>
                              <Text
                                bold
                                fz={14}
                                ml={12}
                              >{`${item.userId.firstName} ${item.userId.lastName}`}</Text>
                              <Text fz={12} ml={12}>
                                {moment(item.createdAt).format('D MMMM, YYYY')}
                              </Text>
                            </FlexBlock>
                          </FlexBlock>
                          <Text mt={10}>{item.text}</Text>
                          <Divider grey mt={20} mb={22} />
                        </div>
                      </Link>
                    ))}
                  </>
                )}
              </Right>
            </Flex>

          </Wrapper>
        </Box>
        <div className="footer-offer">
          {me.id === offer.userId ? (
            <>
              <Button blue onClick={() => Router.push(`/offers/${offer.id}/edit`)}>
                Edit offer
              </Button>
            </>
          ) : (
            <>
              {offer.status === 'open' && (
                <Button blue disabled={disabledBtn} onClick={() => setDetailsView(true)}>
                  Book dates
                </Button>
              )}
            </>
          )}
        </div>
        }
      </>

      <ModalContact
        isOpen={showModalContact}
        handleCloseModal={() => setShowModalContact(false)}
        handleSendMessage={handleSendMessage}
        isLoading={isSendingMessage}
        user={owner.firstName}
      />
    </>
  )
}

export default withReatom(OfferPage)

const Loader = styled.div`
  padding: 5%;
`
const Box = styled.div`
  @media ${device.laptopDesktop} {
    width: 90%;
    margin: 0 auto;
  }
`
const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;
    justify-content: space-between;
  }
`
const Left = styled.div`
  @media ${device.laptopDesktop} {
    width: 290px;

    ${(p) =>
      p.isName &&
      css`
        width: 70%;
        margin-bottom: 20px;
      `}
  }
`
const Right = styled.div`
  @media ${device.laptopDesktop} {
    width: calc(100% - 330px);
    padding-left: 30px;
    padding-right: 10%;

    ${(p) =>
      p.right &&
      css`
        display: flex;
        justify-content: flex-end;
      `}

    ${(p) =>
      p.isOwner &&
      css`
        width: 30%;
      `}
  }
`
