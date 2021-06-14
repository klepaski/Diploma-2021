import React, { useState, useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import moment from 'moment'
import styled, { css } from 'styled-components'
import dynamic from 'next/dynamic'
import Router, { useRouter } from 'next/router'
import Header from '../../../components/Header/Header'
import {
  HeaderChat,
  ContainerMessages,
  FooterChat,
  TextareaMessage,
  SendBtn,
  ProtectMessage,
  WrapperContentMessages,
  Details,
  OfferNameHeaderWrapper,
  OfferNameHeader,
  OfferDates,
  FadeMessages,
} from '../../../components/Inbox/styledComponent'
import Message from '../../../components/Inbox/Message'
import { Text } from '../../../components/StyledComponents/Text'
import {
  apiGetPreChat,
  apiGetPreChatMessages,
  apiGetUserById,
  apiSendPreChatMessage,
  apiReadMessages,
} from '../../../actions/api'
import { MainContext } from '../../../components/contextProviders/MainContext'
import { Button } from '../../../components/controls/Button/Button'
import { Footer } from '../../../components/Layouts/styledLayouts'
import arrowBack from '../../../static/img/arrow-back.svg'
import { ContainerDesktop } from '../../../components/StyledComponents/Grid'

export default () => {
  const router = useRouter()
  const { id } = router.query
  const { me, handleChangeUnreadMessages } = useContext(MainContext)
  const [chat, setChat] = useState({})
  const [sender, setSender] = useState({})
  const [dates, setDates] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [isSending, setIsSending] = useState(false)
  const [isCoverFade, setIsCoverFade] = useState(true)
  const [loadingMessages, setLoadingMessages] = useState(true)
  const messagesEnd = useRef(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (id && me.id) {
      apiGetPreChat(id)
        .then((res) => {
          setChat(res.data)
          setLoading(false)

          apiGetPreChatMessages(id)
            .then((res) => {
              setLoadingMessages(false)
              setMessages(res.data)
              getSender(res.data)
              readMessages(res.data)
            })
            .catch((e) => {
              setLoading(false)
            })
        })
        .catch((e) => {
          setLoading(false)
        })
    }
  }, [id, me.id])

  useEffect(() => {
    scrollToBottom()
    setTimeout(() => {
      setIsCoverFade(false)
    }, 500)
  }, [messages.length])

  const scrollToBottom = () => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView()
    }
  }

  const readMessages = (msgs) => {
    let count = 0,
      arr = []
    msgs.map((item) => {
      if (item.senderId !== me.id && item.status != 'read') {
        arr.push(item.id)
      }
      if (item.status === 'pending') count++
    })

    if (count) {
      apiReadMessages(arr)
        .then((res) => {
          handleChangeUnreadMessages(count)
        })
        .catch((e) => {})
    }
  }

  const getSender = async (msgs) => {
    let senderMsg = msgs.find((item) => {
      if (!item.senderId) return null
      return item.senderId !== me.id
    })
    console.log('senderMsg', senderMsg)
    if (senderMsg && senderMsg.senderId) {
      const res = await apiGetUserById(senderMsg.senderId)
      setSender(res.data)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // e.preventDefault()
      // send()
    }
  }
  const send = () => {
    if (!newMessage || isSending) return
    setIsSending(true)
    apiSendPreChatMessage(id, { text: newMessage })
      .then((res) => {
        setNewMessage('')
        setIsSending(false)
        setMessages([...messages, res.data])
        scrollToBottom()
      })
      .catch((e) => {
        setIsSending(false)
      })
  }

  if (!chat.offerId) chat.offerId = {}

  return (
    <Box>
      {!loading ? (
        <div style={{ height: '100vh' }}>
          <HeaderChat>
            <Link href={`/inbox`}>
              <img src={arrowBack} alt="" />
            </Link>

            <OfferNameHeaderWrapper>
              <OfferNameHeader>{chat.offerId.name}</OfferNameHeader>
              {/*<OfferDates>{chat.offerId.name}</OfferDates>*/}
            </OfferNameHeaderWrapper>
            <Link href="/offers/[id]" as={`/offers/${chat.offerId.id}`} shallow>
              <Details>Details</Details>
            </Link>
          </HeaderChat>
          <ContainerDesktop>
            <WrapperContentMessages>
              {!loadingMessages ? (
                <ContainerMessages>
                  {isCoverFade && <FadeMessages />}
                  {messages.map((item, key) => (
                    <Message key={key} message={item} me={me} sender={sender} />
                  ))}
                </ContainerMessages>
              ) : (
                <div>Loading...</div>
              )}
              <div style={{ float: 'left', clear: 'both' }} ref={messagesEnd}></div>
            </WrapperContentMessages>

            <FooterChat>
              <TextareaMessage
                placeholder="Write a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                readOnly={isSending}
              />
              <SendBtn onClick={send} disabled={isSending}>
                Send
              </SendBtn>
            </FooterChat>
          </ContainerDesktop>
        </div>
      ) : (
        <>Loading...</>
      )}
    </Box>
  )
}

const Box = styled.div`
  ${ContainerDesktop} {
    padding-top: 0;
  }
  ${WrapperContentMessages} {
    height: calc(100vh - 220px);
  }
`
