import React, { useState, useContext, useEffect, useRef } from 'react';
import Link from "next/link";
import moment from 'moment'
import dynamic from 'next/dynamic';
import Router, { useRouter } from 'next/router'
import Header from "../../../components/Header/Header";
import {HeaderChat, ContainerMessages, FooterChat, TextareaMessage, SendBtn, ProtectMessage, WrapperContentMessages, Details, OfferNameHeaderWrapper, OfferNameHeader, OfferDates, FadeMessages} from "../../../components/Inbox/styledComponent"
import Message from "../../../components/Inbox/Message"
import {Text} from "../../../components/StyledComponents/Text"
import {
    apiGetChatById,
    apiGetChatMessages,
    apiGetUserById,
    apiReadMessages,
    apiSendMessage
} from "../../../actions/api";
import {MainContext} from "../../../components/contextProviders/MainContext";
import {Button} from "../../../components/controls/Button/Button";
import {Footer} from "../../../components/Layouts/styledLayouts";
import arrowBack from "../../../static/img/arrow-back.svg"
import { ContainerDesktop } from '../../../components/StyledComponents/Grid'


export default  () => {
    const router = useRouter()
    const { id } = router.query
    const {me, handleChangeUnreadMessages} = useContext(MainContext)
    const [chat, setChat] = useState({})
    const [sender, setSender] = useState({})
    const [dates, setDates] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [isCoverFade, setIsCoverFade] = useState(true)
    const [loadingMessages, setLoadingMessages] = useState(true)
    const messagesEnd = useRef(null);
    const myRef = useRef(null)


    useEffect(() => {
        if(id && me.id) {
            apiGetChatById(id)
                .then(res => {
                    setChat(res.data)
                    getDates(res.data.calendar)
                    setLoading(false)

                    apiGetChatMessages(id)
                        .then(res => {
                            setLoadingMessages(false)
                            setMessages(res.data)
                            getSender(res.data)
                            readMessages(res.data)
                        })
                        .catch(e => {
                            console.log(e)
                            setLoading(false)
                        })
                })
                .catch(e => {
                    console.log(e)
                    setLoading(false)
                })
        }
    }, [id, me.id]);

    useEffect(() => {
        scrollToBottom()
        setTimeout(() => {
            setIsCoverFade(false)
        }, 500)
    }, [messages.length]);

    const scrollToBottom = () => {
        if(messagesEnd.current){
            messagesEnd.current.scrollIntoView();
        }
    }

    const readMessages = msgs => {
        let count = 0,
            arr = []
        msgs.map(item => {
            if(item.senderId !== me.id && item.status != 'read') {
                arr.push(item.id)
            }
            if(item.status === 'pending') count++
        })

        if(count) {
            apiReadMessages(arr)
                .then(res => {
                    handleChangeUnreadMessages(count)
                })
                .catch(e => {})
        }
    }

    const getSender = async (msgs) => {
        let senderMsg = msgs.find(item => {
            if(!item.senderId) return null
            return item.senderId !== me.id
        })
        console.log('senderMsg', senderMsg)
        if(senderMsg && senderMsg.senderId) {
            const res = await apiGetUserById(senderMsg.senderId)
            setSender(res.data)
        }
    }

    const getDates =  (calendar) => {
        if(!calendar.length) return
        calendar.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        let from = calendar[0].date,
            to = calendar[calendar.length - 1].date;

        if(calendar.length === 1) {
            setDates(moment(from).format('D MMM YYYY'))
        } else {
            setDates(moment(from).format('D MMM YYYY') + ' - ' + moment(to).format('D MMM YYYY'))
        }

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // e.preventDefault()
            // send()
        }
    }
    const send = () => {
        console.log('send', newMessage)
        if(!newMessage) return
        apiSendMessage(id, {text: newMessage})
            .then(res => {
                setNewMessage('')
                setMessages([...messages, res.data])
                scrollToBottom()
            })
            .catch(e => {

            })
    }



    const approve = () => {
        Router.push('/booking/[id]', `/booking/${id}`, {shallow: true})
    }
    const goToReview = () => {
        Router.push('/booking/[id]/review', `/booking/${id}/review`, {shallow: true})
    }


    if(!chat.offerId) chat.offerId = {}

    console.log(chat)

    let showBtnBottomToOwner = (chat.offerCreatorId === me.id && chat.status === 'pending')
    let showBtnBottomToPay = (chat.offerCreatorId !== me.id && chat.status === 'approve')

    return (
        <>
            {/*<Header isProfile/>*/}

            {!loading ?
                <div style={{height: '100vh'}}>
                    <HeaderChat>
                        <Link href={`/inbox`}>
                            <img src={arrowBack} alt=""/>
                        </Link>

                        <OfferNameHeaderWrapper>
                            <OfferNameHeader>{chat.offerId.name}</OfferNameHeader>
                            <OfferDates>{chat.offerId.name}</OfferDates>
                        </OfferNameHeaderWrapper>
                        <Link href="/offers/[id]" as={`/offers/${chat.offerId.id}`} shallow>
                            <Details>
                                Details
                            </Details>
                        </Link>
                    </HeaderChat>
                    <ContainerDesktop>
                        <WrapperContentMessages >
                            <ProtectMessage>
                                {dates}, {chat.offerId.country} <br/>
                                {chat.location && <>{chat.location}, </> }
                                {chat.locationDetails} <br/>
                                {chat.startTime && <>{chat.startTime}, </> }
                                {chat.additionalTerms}
                            </ProtectMessage>

                            {!loadingMessages ?
                                <ContainerMessages>
                                    {isCoverFade &&  <FadeMessages />}
                                    {messages.map((item, key) =>
                                        <Message key={key}
                                                 message={item}
                                                 me={me}
                                                 sender={sender}
                                        />
                                    )}
                                </ContainerMessages>
                                :
                                <div>Loading...</div>
                            }
                            <div style={{ float:"left", clear: "both" }} ref={messagesEnd}></div>
                        </WrapperContentMessages>

                        <FooterChat>
                            <TextareaMessage
                                placeholder='Write a message'
                                value={newMessage}
                                onChange={e => setNewMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <SendBtn onClick={send}>Send</SendBtn>

                            {showBtnBottomToOwner &&
                            <Button blue onClick={approve} > Approve or Decline  </Button>
                            }
                            {showBtnBottomToPay &&
                            <div className={'flex-2-column'}>
                                <Button green onClick={goToReview} ml={10} > Leave review </Button>
                            </div>

                            }

                        </FooterChat>
                    </ContainerDesktop>

                </div>
                :
                <>Loading...</>
            }
        </>
    );
};

