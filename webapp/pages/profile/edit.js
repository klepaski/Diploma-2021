import React, { useState, useContext } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'
import Header from '../../components/Header/Header'
import { MenuEdit } from '../../components/Profile/MenuSettings'
import EditProfile from '../../components/Profile/EditProfile'
import ProfileAvatar from '../../components/Profile/ProfileAvatar'
import PhotosGallery from '../../components/Profile/PhotosGallery'
import Verification from '../../components/Profile/Verification'
import { SettingsWrapper } from '../../components/Profile/styledProfileHeader'
import { ButtonMinHeight } from '../../components/controls/Button/Button'
import { Divider } from '../../components/StyledComponents/Divider'
import { ContainerDesktop } from '../../components/StyledComponents/Grid'
import { MainContext } from '../../components/contextProviders/MainContext'
import { withAuthSync } from '../../utils/auth'
import { apiEditMe, apiEditProfilePhoto, apiDeleteProfilePhoto } from '../../actions/api'
import { showNotification } from '../../utils/notification'
import Security from "../../components/Profile/Security";

const Edit = () => {
  const { me, setMe } = useContext(MainContext)
  const [tab, setTab] = useState(1)
  const [loading, setLoading] = useState(false)

  let user = Object.assign({}, me)

  const onSave = (data) => {
    setLoading(true)
    apiEditMe(data)
      .then(async (res) => {
        await setMe(res.data)
        showNotification('info', 'profile was updated successfully')
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        showNotification('error', e)
      })
  }

  const onSavePhoto = (blob) => {
    setLoading(true)
    let data = new FormData()
    data.append('avatar', blob, 'avatar.png')

    apiEditProfilePhoto(user.id, data)
      .then(async (res) => {
        await setMe(res.data)
        showNotification('info', 'profile photo was updated successfully')
        setLoading(false)
        setTab(1)
      })
      .catch((e) => {
        setLoading(false)
        showNotification('error', e)
      })
  }

  const onSaveGallery = async (photosNew, cover) => {
    let userCopy = Object.assign({}, user, { photos: photosNew, coverPhoto: cover })
    await setMe(userCopy)
    showNotification('info', 'profile gallery was updated successfully')
    setLoading(false)
  }

  const handleDeleteAvatar = () => {
    apiDeleteProfilePhoto(user.id)
      .then(async (res) => {
        await setMe(res.data)
        showNotification('info', 'profile photo was removed successfully')
        setLoading(false)
        setTab(1)
      })
      .catch((e) => {
        setLoading(false)
        showNotification('error', e)
      })
  }

  return (
    <>
      <Header isProfile />

      <ContainerDesktop>
        <Flex>
          <FlexLeft>
            <MenuEdit tab={tab} setTab={setTab} />
          </FlexLeft>
          <FlexRight>
            <SettingsWrapper>
              <TopBtnWrapper>
                <Link href={'/profile'}>
                  <ButtonMinHeight transparentBlue black mt={20}>
                    View profile
                  </ButtonMinHeight>
                </Link>
              </TopBtnWrapper>

              <Divider grey mt={28} mb={22} />

              {user.id ? (
                <>
                  {tab === 1 && <EditProfile user={user} onSave={onSave} loading={loading} />}
                  {tab === 2 && (
                    <ProfileAvatar
                      user={user}
                      onSavePhoto={onSavePhoto}
                      handleDeleteAvatar={handleDeleteAvatar}
                      loading={loading}
                    />
                  )}
                  {tab === 3 && (
                    <PhotosGallery
                      photosArr={user.photo || []}
                      coverPhoto={user.coverPhoto}
                      onSave={onSaveGallery}
                      loading={loading}
                    />
                  )}
                  {tab === 4 && <BoxCenter><Security user={user} loading={loading} /></BoxCenter>}
                </>
              ) : (
                <div>Loading</div>
              )}

            </SettingsWrapper>
          </FlexRight>
        </Flex>
      </ContainerDesktop>
    </>
  )
}

const FlexLeft = styled.div``
const FlexRight = styled.div``

const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;

    ${FlexLeft} {
      width: 20%;
    }

    ${FlexRight} {
      width: 80%;
    }
  }
`
const TopBtnWrapper = styled.div`
  text-align: right;
  @media ${device.laptopDesktop} {
    ${ButtonMinHeight} {
      width: 200px;
    }
  }
`
const BoxCenter = styled.div`
  @media ${device.laptopDesktop} {
    width: 400px;
    margin: 0 auto;
  }
`

export default withAuthSync(Edit)
