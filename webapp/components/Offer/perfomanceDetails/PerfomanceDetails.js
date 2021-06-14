import React from 'react';
import Router from 'next/router'

import {Title} from  "./../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {Divider} from "../../StyledComponents/Divider";
import {Wrapper} from "../../StyledComponents/Wrapper";
import {CounterLabel} from "../../controls/Counter/Counter";
import Select from "../../controls/Select/Select";

const PerformanceDetails = ({pd, onChange}) => {
    const preOnChange = ({name, value}) => {
        onChange({type: name, value: value})
    }
    let onChangeSelect = (value) => {
        onChange({type: 'daysBeforeBooking', value: value.value})
    }
    let onChangeSelect2 = (value) => {
        onChange({type: 'timeOpenCalendar', value: value.value})
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
            </Text>

            <Wrapper mt={30} mb={10} >
                <Divider grey full />
                {/*<CounterLabel title='Minimum' name={'minNumberOfActs'} value={pd.minNumberOfActs} onChange={preOnChange} />*/}
                <CounterLabel title="Maximum" name={'maxNumberOfActs'} value={pd.maxNumberOfActs} onChange={preOnChange} />
            </Wrapper>

            <Text fz={18} mb={20} ><br/><br/><br/>
                How many days before the meeting can a client book your offer.
            </Text>
            <Select
                options={options}
                value={pd.daysBeforeBooking}
                onChange={onChangeSelect}
                mb={25}
            />

            <Text fz={18} mb={20} ><br/><br/><br/>
                Select the amount of time you’d like to keep your calendar open for a client to book your offer.
            </Text>
            <Select
                options={options2}
                value={pd.timeOpenCalendar}
                onChange={onChangeSelect2}
                mb={25}
            />

        </>
    );
};

export default PerformanceDetails;
