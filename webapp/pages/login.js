import React, { useState, useContext } from 'react';
import Link from "next/link";
import Router from 'next/router'
import styled, { css } from 'styled-components'
import MainProvider, { MainContext, MainConsumer } from "../components/contextProviders/MainContext"

import {Wrapper} from "../components/StyledComponents/Wrapper";
import {Button} from "../components/controls/Button/Button";
import {Divider} from "../components/StyledComponents/Divider";
import {Close} from '../components/StyledComponents/Icon'
import {FlexBlock} from '../components/StyledComponents/FlexBlock'
import {Text} from "../components/StyledComponents/Text";
import {Input} from '../components/controls/Input/Input'
import validate from "../utils/validation";
import {apiLoginUser} from "../actions/api";
import {showNotification} from "../utils/notification";
import {auth, login} from "../utils/auth";
import {initAxios} from "../config/axios";
import { device } from '../lib/mediaDevice'
import { LogoGreen } from '../components/StyledComponents/Icon'
import { useDetectDevice } from '../lib/useDetectDevice'



const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const currentDevice = useDetectDevice()

    const onChangeEmail = e => {
        let {value, name} = e.target
        setEmail(value)
        let error = validate(name, value, true)
        setErrors((errors) => ({ ...errors, [name]: error }))
    }
    const onChangePassword = e => {
        let {value} = e.target
        setPassword(value)
    }
    const {setMe} = useContext(MainContext)

    const handleSubmit = () => {
        setLoading(true);
        apiLoginUser({email: email.toLowerCase(), password})
            .then(async res => {
                let {token, id} = res.data;
                await login({ token, id })
                await setMe(res.data)
                // TODO check if is first time
                initAxios(() => {
                    Router.push('/')
                })

            })
            .catch(err => {
                setLoading(false);
                showNotification('error', err)
            })
    }



    let disabled = loading || !email || !password;

    return (
        <LoginWrap>
            <Wrapper p={25}>
                <Wrapper mb={35}>
                    {currentDevice.isMobileTablet ?
                        <Close onClick={() => Router.back()} />
                        :
                        <Link href={'/'}>
                            <LogoGreen />
                        </Link>
                    }

                </Wrapper>
                <FormWrap>
                    <Input type={'text'}
                           name={'email'}
                           value={email}
                           onChange={onChangeEmail}
                           placeholder="Email address"
                           error={errors.email}
                           mb={'5px'}
                           fz={15}
                    />
                    <Input type={'password'}
                           value={password}
                           placeholder="Password"
                           onChange={onChangePassword}
                           fz={15}
                    />
                    <Button green mt={25} onClick={handleSubmit} disabled={errors.email} loading={loading} >Log in</Button>
                    <Divider grey full mt={25} mb={15} />
                    <FlexBlock right>
                        <Text mr={10} >New to Programmerbooking?</Text>
                        <Link href={'/registration'}>
                            <a><Text isLink textRight >Sign up</Text></a>
                        </Link>
                    </FlexBlock>
                </FormWrap>
                
            </Wrapper>

        </LoginWrap>
    );
};

export default LoginPage;

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
     }
`
