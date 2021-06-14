import React, { useState, useContext, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

import {Wrapper, WrapperHeight} from "../../../components/StyledComponents/Wrapper";
import {Button}from "../../../components/controls/Button/Button";
import {CheckLabel, Footer, Label, Title} from "../../../components/Layouts/styledLayouts";
import Header from "../../../components/Header/Header";
import withOfferInfo from "../../../utils/offer";


const ExpectPage =  () => {
    const router = useRouter()
    const {id} = router.query
    const [loading, setLoading] = useState(false)



    const disabled = loading;



    return (
        <>
            <Header isReg />
            <Wrapper p={17} >
                <WrapperHeight>
                    <Title mb={25} >Based on your settings, here’s what you could expect</Title>
                    <CheckLabel label='As for now, you’re available to be booked from 21t September.'/>
                    <CheckLabel label='Let’s imagine a client is planning an event and thinks that your offer is a perfect match.'/>
                    <CheckLabel label='So the client sends you a message with the booking offer, says he has an event and would like you to perform there.'/>
                    <CheckLabel label='You coordinate the details like time and location, the length of the event, as well as the number of guests and on-time payment for the services.'/>
                    <CheckLabel label='So, well, time to perform and create wonderful memories!'/>
                </WrapperHeight>

                <Footer mt={30}>
                    <Button>Back</Button>
                    <Button blue
                            onClick={() => {}}
                            disabled={disabled}
                    >
                        Next
                    </Button>
                </Footer>

            </Wrapper>
        </>
    );
};

export default withOfferInfo(ExpectPage)
