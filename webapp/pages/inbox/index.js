import React, { useState, useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import Router, { useRouter } from 'next/router'
import Header from '../../components/Header/Header'
import { apiGetListChats } from '../../actions/api'
import { Title } from '../../components/Inbox/styledComponent'
import InboxItem from '../../components/Inbox/InboxItem'
import { Divider } from '../../components/StyledComponents/Divider'
import { MainContext } from '../../components/contextProviders/MainContext'
import { ContainerDesktop } from '../../components/StyledComponents/Grid'

export default () => {
  const router = useRouter()
  const { id } = router.query
  const { me } = useContext(MainContext)
  const [chats, setChats] = useState([])
  const [photos, setPhotos] = useState([])
  const [bookingDates, setBookingDates] = useState({ startDate: null, endDate: null })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiGetListChats()
      .then((res) => {
        setChats(res.data.reverse())
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header isProfile />
      <ContainerDesktop>
        <Title>Inbox</Title>
        <Divider full grey />
        {!loading ? (
          <>
            {!chats.length ? (
              <NotYet>You have no messages yet</NotYet>
            ) : (
              <>
                {chats.map((item, key) => (
                  <InboxItem key={key} chat={item} me={me} />
                ))}
              </>
            )}
          </>
        ) : (
          <>Loading...</>
        )}
      </ContainerDesktop>
    </>
  )
}

const NotYet = styled.div`
  font-size: 18px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
`
