import React, {useState} from 'react';
import Router from 'next/router'

import {Button} from "../../controls/Button/Button";
import {Title, WrapButton, TipWrapper} from  "./../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {Wrapper} from "../../StyledComponents/Wrapper";
import {CounterLabel} from "../../controls/Counter/Counter";
import Select from "../../controls/Select/Select";

const Notices = ({pd, onChange}) => {
    let onChangeSelect = (value) => {
        onChange({type: 'daysBeforeBooking', value: value.value})
    }

    const options = [
        { value: 'Same day', label: 'Same day' },
        { value: '1 day', label: '1 day' },
        { value: '2 days', label: '2 days' },
        { value: '3 days', label: '3 days' },
        { value: '7 days', label: '7 days' },
    ];

    return (
        <>
            <Title mb={40} >Notices</Title>
            <Text fz={18} mb={20} >
                How many days before the event can a client book your offer.
            </Text>
            <Select
                options={options}
                value={pd.daysBeforeBooking}
                onChange={onChangeSelect}
                mb={25}
            />
            <Text mt={25} >
                Tip: Letting clients book same-day can help you get clients who book last-minute events.
            </Text>
        </>
    );
};

export default Notices;
