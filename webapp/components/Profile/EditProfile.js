import React, { useState, useContext } from 'react'
import moment from 'moment/moment'
import styled, { css } from 'styled-components'
import { device } from '../../lib/mediaDevice'
import { MenuSettingsWrapper, MenuSettingsItem } from '../../components/Profile/styledProfileHeader'
import { Text } from '../StyledComponents/Text'
import { Input, TextArea } from '../controls/Input/Input'
import Select from '../controls/Select/Select'
import DatePicker from '../controls/DateTimePickers/Datepicker'
import { Wrapper } from '../StyledComponents/Wrapper'
import { listCountries, listLanguages } from '../../utils/countriesLanguages'
import { Divider } from '../StyledComponents/Divider'
import { Button } from '../controls/Button/Button'
import validate from '../../utils/validation'
import { CURRENCY } from '../../utils/data'
import { useDetectDevice } from '../../lib/useDetectDevice'

const EditProfile = (props) => {
  const currentDevice = useDetectDevice()
  const [user, setUser] = useState({ ...props.user })
  React.useEffect(() => {
    setUser(props.user)
  }, [props.user])

  const onChange = (e) => {
    let { name, value, required } = e.target
    setUser((user) => ({ ...user, [name]: value }))
  }

  let preOnChangeSelect = (name, value, required) => {
    let obj = {
      target: {
        name: name,
        value: value.value,
        required: required,
      },
    }
    onChange(obj)
  }

  const onSave = () => {
    // validate user
    props.onSave(user)
  }

  const listGender = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ]
  console.log(user)

  return (
    <>
      <Text bold fz={18} mb={20}>
        Your name
      </Text>
      <Flex>
        <FlexLeft>
          <Input
            type={'text'}
            name="firstName"
            value={user.firstName}
            onChange={onChange}
            mb={10}
            placeholder="First name"
          />
        </FlexLeft>
        <FlexRight>
          <Input
            type={'text'}
            name="lastName"
            value={user.lastName}
            onChange={onChange}
            mb={10}
            placeholder="Last name"
          />
        </FlexRight>
      </Flex>

      <Flex>
        <FlexLeft>
          <Text bold fz={14} mb={10}>
            I am
          </Text>
          <Select
            options={listGender}
            value={user.gender}
            onChange={(value) => preOnChangeSelect('gender', value, false)}
            mb={20}
            placeholder="Gender"
          />
          <Text fz={14} mb={30} grey6>
            We use this data for analysis and never share it with other users
          </Text>
        </FlexLeft>
        <FlexRight>
          <Text bold fz={14}>
            Date of birth{' '}
          </Text>
          <Wrapper mt={10} mb={10} width100>
            <DatePicker
              selected={user.birthday ? new Date(user.birthday) : null}
              maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
              onChange={(value) => preOnChangeSelect('birthday', { value: value }, false)}
              showYearDropdown
              dateFormat="dd/MM/yyyy"
              withPortal={currentDevice.isMobileTablet ? true : false}
            />
          </Wrapper>
        </FlexRight>
      </Flex>

      <Flex>
        <FlexLeft>
          <Text bold fz={14} mb={10}>
            Education
          </Text>
          <TextArea
            name="education"
            value={user.education}
            onChange={onChange}
            count={user.education ? user.education.length : ''}
            placeholder="Education"
          />
        </FlexLeft>
        <FlexRight>
          <Text bold fz={14}>
            Experience
          </Text>
          <Wrapper mt={10} mb={10} width100>
            <TextArea
              name="experience"
              value={user.experience}
              onChange={onChange}
              count={user.experience ? user.experience.length : ''}
              placeholder="Experience"
            />
          </Wrapper>
        </FlexRight>
      </Flex>

      <Divider grey mt={28} mb={25} />

      <BottomBtnBox>
        <Button blue onClick={onSave} disabled={props.loading}>
          Save
        </Button>
      </BottomBtnBox>
    </>
  )
}

const FlexLeft = styled.div``
const FlexRight = styled.div``

const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;

    ${FlexLeft} {
      width: 50%;
      padding-right: 20px;
    }

    ${FlexRight} {
      width: 50%;
      padding-left: 20px;
    }
  }
`
const BottomBtnBox = styled.div`
  @media ${device.laptopDesktop} {
    text-align: center;
    button {
      width: 200px;
    }
  }
`

export default EditProfile
