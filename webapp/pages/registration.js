import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MainContext, MainConsumer } from '../components/contextProviders/MainContext'

import styled, {css} from 'styled-components'
import { device } from '../lib/mediaDevice'
import { Wrapper } from '../components/StyledComponents/Wrapper'
import { Button } from '../components/controls/Button/Button'
import { Divider } from '../components/StyledComponents/Divider'
import { Close, LogoGreen } from '../components/StyledComponents/Icon'
import { FlexBlock } from '../components/StyledComponents/FlexBlock'
import { Text, ServerError } from '../components/StyledComponents/Text'
import { Input } from '../components/controls/Input/Input'
import { CheckboxWithLabel } from '../components/controls/Checkbox/Checkbox'
import DatePicker from '../components/controls/DateTimePickers/Datepicker'
import validate from '../utils/validation'
import { hasError } from '../utils/utils'
import { showNotification } from '../utils/notification'
import { Router } from '../routes'
import { OnlyMobile, OnlyDesktop } from '../components/StyledComponents/Grid'

import { apiCreateUser } from '../actions/api'

const RegistrationPage = ({ setView }) => {
    const defaultUserData = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        birthday: null,
        offerId: localStorage.getItem('ioid'),
    }
    const [user, setUser] = useState(defaultUserData)
    const [errors, setErorrs] = useState({})
    const [checked, setCheck] = useState(false)
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState(false)
    const [data, setData] = useState('initial')

    console.log('user', user)

    const onChange = (e) => {
        let { name, value, required } = e.target
        if (name === 'email' || name === 'password') value = value.trim()
        setUser((user) => ({ ...user, [name]: value }))
        let error = validate(name, value, required)
        setErorrs((errors) => ({ ...errors, [name]: error }))
    }
    const onChangeBirthday = (birthday) => {
        setUser((user) => ({ ...user, birthday: birthday }))
    }
    const handleSubmit = () => {
        setLoading(true)
        let clone = { ...user, email: user.email.toLowerCase() }
        apiCreateUser(clone)
            .then((res) => {
                showNotification('info', `Check your mail ${user.email} to activate account`)
                localStorage.removeItem('ioid')
                Router.pushRoute('/login')
            })
            .catch((err) => {
                setLoading(false)
                showNotification('error', err)
            })
    }

    let disabled =
        hasError(errors) || !user.email || !user.firstName || !user.lastName || !user.password

    return (
        <>
            <LoginWrap>

                <Wrapper p={25}>
                    <OnlyMobile>
                        <Wrapper mb={35}>
                            <Close onClick={() => setView(false)} />
                        </Wrapper>
                    </OnlyMobile>

                    <FormWrap>
                        <Input
                            value={user.email}
                            name={'email'}
                            onChange={onChange}
                            error={errors.email}
                            placeholder="Email address"
                            required
                            mb={'5px'}
                            fz={15}
                        />
                        <Input
                            value={user.firstName}
                            name={'firstName'}
                            onChange={onChange}
                            error={errors.firstName}
                            placeholder="First name"
                            required
                            mb={'5px'}
                            fz={15}
                        />
                        <Input
                            value={user.lastName}
                            name="lastName"
                            onChange={onChange}
                            error={errors.lastName}
                            placeholder="Last name"
                            required
                            fz={15}
                            mb={'5px'}
                        />
                        <Input
                            value={user.password}
                            name="password"
                            type="password"
                            onChange={onChange}
                            error={errors.password}
                            required
                            placeholder="Create a password"
                            fz={15}
                        />

                        <Text mt={15} fz={15} bold>
                            Birthday
                        </Text>
                        <Text>To sign up, you must be 18 or older. Other people won’t see your birthday.</Text>

                        <Wrapper mt={20} mb={20} width100>
                            <DatePicker
                                selected={user.birthday}
                                name="birthday"
                                maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
                                onChange={onChangeBirthday}
                                withPortal
                                showYearDropdown
                                dateFormat="dd/MM/yyyy"
                            />
                        </Wrapper>

                        <Button green disabled={disabled} loading={loading} onClick={handleSubmit}>
                            Create account
                        </Button>
                    </FormWrap>

                    <ServerError>{serverError}</ServerError>

                    <Divider grey full mt={20} mb={15} />

                    <FlexBlock right>
                        <Text pr={15}>Already signed up?</Text>
                        <Link href={'/login'}>
                            <Text isLink>Log in</Text>
                        </Link>
                    </FlexBlock>
                </Wrapper>
            </LoginWrap>
        </>
    )
}
const LoginWrap = styled.div`
  ${LogoGreen} {
    width: 46px;
    cursor: pointer;
  }
`
const FormWrap = styled.div`
  @media ${device.laptopDesktop} {
    width: 400px;
    margin: 10% auto 0 auto;

    ${(p) =>
    p.isRegEmail &&
    css`
        margin-top: 0;
      `}
  }
`

export default RegistrationPage
