import React, {useState, useContext, useEffect} from 'react';

import {Title, Label, EventItemWrapper, EventItem} from "./../../Layouts/styledLayouts";
import {Input, TextArea} from "../../controls/Input/Input";
import {Tab} from "../../controls/Tabs/Tabs";
import Select from "../../controls/Select/Select";
import {listCountries} from "../../../utils/countriesLanguages";
import {Wrapper, WrapperHeight} from "../../StyledComponents/Wrapper";
import {Button} from "../../controls/Button/Button";
import {addOrRemove, isIncludesThisId} from "../../../utils/utils";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {CounterLabel} from "../../controls/Counter/Counter";


export default ({offer, onChange, isLoading, onSave}) => {

    const preOnChange = ({name, value}) => {
        onChange({target: {name: name, value: value}})
    }
    let onChangeSelect = (value) => {
        preOnChange({name: 'daysBeforeBooking', value: value.value})
    }
    let onChangeSelect2 = (value) => {
        preOnChange({name: 'timeOpenCalendar', value: value.value})
    }

    const options = [
        { value: 'Same day', label: 'Same day' },
        { value: '1 day', label: '1 day' },
        { value: '2 days', label: '2 days' },
        { value: '3 days', label: '3 days' },
        { value: '7 days', label: '7 days' },
    ];

    const options2 = [
        { value: 'any time', label: 'any time' },
        { value: '1 month', label: '1 month' },
        { value: '2 month', label: '2 month' },
        { value: '6 month', label: '6 month' },
        { value: '1 year', label: '1 year' },
    ];

    return (
        <>
            <Title mb={20} >Offer details</Title>
            <Text fz={18} black >
                How many times during the day can you execute your offer? <br/>
                You can set the minimum and maximum numbers for one event.
            </Text>

            <Wrapper mt={30} mb={10} >
                <Divider grey full />
                <CounterLabel title='Minimal number of acts' name={'maxNumberOfActs'} value={offer.maxNumberOfActs} onChange={preOnChange} />
                <CounterLabel title="Maximum number of acts" name={'minNumberOfActs'} value={offer.minNumberOfActs} onChange={preOnChange} />
            </Wrapper>

            <Text mt={25} mb={50} >
                Tip: The more times you can perform within one event, the higher can be the remuneration for one booking
            </Text>

            <Title mb={20} >Notices</Title>
            <Text fz={18} mb={20} >
                How many days before the event can a client book your offer.
            </Text>
            <Select
                options={options}
                value={offer.daysBeforeBooking}
                onChange={onChangeSelect}
                mb={25}
            />
            <Text mt={25} mb={50} >
                Tip: Letting clients book same-day can help you get clients who book last-minute events.
            </Text>
            <Title mb={40} >Choose how far out clients can book </Title>
            <Text fz={18} mb={20} >
                Select the amount of time you’d like to keep your calendar open for a client to book with you.
            </Text>
            <Select
                options={options2}
                value={offer.timeOpenCalendar}
                onChange={onChangeSelect2}
                mb={25}
            />
            <Text mt={25} >
                Tip: Unblock dates early so that clients have time to book.
            </Text>


            <Button green loading={isLoading} onClick={onSave} mt={70}>Save</Button>
        </>
    );
};

