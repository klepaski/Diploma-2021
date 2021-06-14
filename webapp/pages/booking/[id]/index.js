import React, { useState, useContext, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";

import Router, { useRouter } from 'next/router'
import Header from "../../../components/Header/Header";
import {HeaderChat} from "../../../components/Inbox/styledComponent"
import Message from "../../../components/Inbox/Message"
import {Text} from "../../../components/StyledComponents/Text"
import {apiGetChatById, apiDeclineBooking, apiApprove} from "../../../actions/api";
import {MainContext} from "../../../components/contextProviders/MainContext";
import {Button} from "../../../components/controls/Button/Button";
import {Footer} from "../../../components/Layouts/styledLayouts";
import {showNotification} from '../../../utils/notification'
import {Wrapper} from "../../../components/StyledComponents/Wrapper";
import {Title, SubTitle} from "../../../components/Booking/styledComponent"
import {Divider} from "../../../components/StyledComponents/Divider";
import arrowBack from "../../../static/img/arrow-back.svg"

export default  () => {
    const router = useRouter()
    const { id } = router.query
    const {me} = useContext(MainContext)
    const [booking, setBooking] = useState({})
    const [offer, setOffer] = useState({})
    const [loading, setLoading] = useState(true)
    const [loadingPre, setLoadingPre] = useState(false)
    const messagesEnd = useRef(null);
    const myRef = useRef(null)

    useEffect(() => {
        console.log('id effect', id)
        if(id) {
            apiGetChatById(id)
                .then(res => {
                    setBooking(res.data)
                    if(res.data.offerId) setOffer(res.data.offerId)
                    setLoading(false)
                })
                .catch(e => {
                    setLoading(false)
                })
        }
    }, [id]);


    const approve = () => {
        let data = {
            bookingId: id
        }
        setLoadingPre(true)
        apiApprove(offer.id, data)
            .then(res => {
                setLoadingPre(false)
                showNotification('info', 'offer is approved')
                Router.push('/inbox/[id]/booking', `/inbox/${booking.id}/booking`, {shallow: true})
            })
            .catch(e => {
                setLoadingPre(false)
            })
    }

    const handleDecline = () => {
        let data = {
            bookingId: id
        }
        setLoadingPre(true)
        apiDeclineBooking(offer.id, data)
            .then(res => {
                setLoadingPre(false)
                Router.push('/inbox/[id]/booking', `/inbox/${booking.id}/booking`, {shallow: true})
            })
            .catch(e => {
                setLoadingPre(false)
            })
    }


    return (
        <>
            {/*<Header isProfile/>*/}

            <HeaderChat>
                <Link href="/inbox/[id]/booking" as={`/inbox/${booking.id}/booking`} shallow>
                    <img src={arrowBack} alt=""/>
                </Link>
                <div></div>
            </HeaderChat>
            {!loading ?
                <Wrapper p={17}>
                    <Title>{offer.name}</Title>
                    <SubTitle>{offer.subCategory.category}</SubTitle>
                    {/*<Text mt={'5px'} mb={'5px'} fz={20} grey4a >Name - The Pirates of Arabia Live action</Text>*/}
                    {/*<Text grey fz={16} >40 minutes  |   1 Act  |  AED 500</Text>*/}
                    <Text grey fz={16} >Programmer: {me.firstName} {me.lastName}</Text>
                    <Divider mt={15} mb={15} full grey />
                    <Text grey fz={16}>
                        Are you sure that you want to approve this request?
                    </Text>
                    <Button mt={20} mb={10} blue onClick={approve} loading={loadingPre}>Approve</Button>
                    <Button onClick={handleDecline} >Decline</Button>
                </Wrapper>
                :
                <>Loading...</>
            }
        </>
    );
};


