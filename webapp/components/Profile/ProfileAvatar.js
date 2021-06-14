import React, { useState, useContext, useRef } from 'react'
import styled, { css } from 'styled-components'
import { MenuSettingsWrapper, MenuSettingsItem } from '../../components/Profile/styledProfileHeader'
import { Text } from '../StyledComponents/Text'
import { FlexBlock } from '../StyledComponents/FlexBlock'
import { Input, TextArea } from '../controls/Input/Input'
import Select from '../controls/Select/Select'
import DatePicker from '../controls/DateTimePickers/Datepicker'
import { Wrapper } from '../StyledComponents/Wrapper'
import { listCountries, listLanguages } from '../../utils/countriesLanguages'
import { Divider } from '../StyledComponents/Divider'
import { Button } from '../controls/Button/Button'
import RegAvatar from '../../components/controls/Upload/RegAvatar'
import { showNotification } from '../../utils/notification'
import { modifySrc } from '../../utils/modifySrc'
import { device } from '../../lib/mediaDevice'

const ProfileAvatar = (props) => {
  const [user, setUser] = useState({ ...props.user })
  const regAvatarEl = useRef(null)

  const test = () => {
    console.log('onLoadSuccess function', regAvatarEl)
  }

  React.useEffect(() => {
    setUser(props.user)
  }, [props.user])

  const onSave = () => {
    // validate photo
    try {
      regAvatarEl.current.editor.getImageScaledToCanvas().toBlob(
        function (blob) {
          props.onSavePhoto(blob)
        }.bind(this),
        'image/png',
        1,
      )
    } catch (e) {
      showNotification('error', 'Error while loading photo')
    }
  }

  return (
    <Box>
      <FlexBlock>
        <Text bold fz={18} mb={20}>
          Profile Photo
        </Text>
        {user.profilePhotoURL && (
          <Text fz={14} underline onClick={() => props.handleDeleteAvatar()}>
            Delete
          </Text>
        )}
      </FlexBlock>

      <RegAvatar
        profilePhotoURL={modifySrc(user.profilePhotoURL, 'person')}
        onLoadSuccess={() => test()}
        ref={regAvatarEl}
      />

      <Divider grey mt={28} mb={25} />
      <Button blue onClick={onSave} disabled={props.loading}>
        Save
      </Button>
    </Box>
  )
}

export default ProfileAvatar

const Box = styled.div`
  @media ${device.laptopDesktop} {
    width: 400px;
    margin: 0 auto;
  }
`
