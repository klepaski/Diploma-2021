import React, {useState} from 'react';
import Router from 'next/router'

import {Button} from "../../controls/Button/Button";
import {Title, WrapButton, TipWrapper} from  "./../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {Wrapper} from "../../StyledComponents/Wrapper";
import {CounterLabel} from "../../controls/Counter/Counter";
import Select from "../../controls/Select/Select";

const ChooseHowFar = ({pd, onChange}) => {
    let onChangeSelect = (value) => {
        onChange({type: 'timeOpenCalendar', value: value.value})
    }

    const options = [
        { value: 'any time', label: 'any time' },
        { value: '1 month', label: '1 month' },
        { value: '2 month', label: '2 month' },
        { value: '6 month', label: '6 month' },
        { value: '1 year', label: '1 year' },
    ];

    return (
        <>
            <Title mb={40} >Choose how far out clients can book </Title>
            <Text fz={18} mb={20} >
                Select the amount of time you’d like to keep your calendar open for a client to book your offer.
            </Text>
            <Select
                options={options}
                value={pd.timeOpenCalendar}
                onChange={onChangeSelect}
                mb={25}
            />
            <Text mt={25} >
                Tip: Unblock dates early so that clients have time to book.
            </Text>
        </>
    );
};

export default ChooseHowFar;
