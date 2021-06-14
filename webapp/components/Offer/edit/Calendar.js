import React, {useState, useContext, useEffect} from 'react';
import dynamic from 'next/dynamic';

import {Button, ButtonMin} from "../../controls/Button/Button";
import {Title} from "../../Layouts/styledLayouts";
import {Text} from "../../StyledComponents/Text";
import {WrapperHeight} from "../../StyledComponents/Wrapper";
const Calendar=dynamic(import ('../../../components/controls/Calendar/Calendar'),{ssr:false});


export default ({offer, onChange, isLoading, onSave}) => {
    let selectedArr = offer.calendar.map(item => item.date)
    const [selectedDays, setSelected] = useState(selectedArr)

    const preOnSave = () => {
        onSave(selectedDays)
    }

    console.log('offer.endDate', offer.endDate)

    return (
        <>
            <Title mb={40} >Update your calendar</Title>
            <Text fz={18} mb={20} >
                Since client can book available days instantly, you should always keep your calendar up to date by blocking the days you can’t perform.
            </Text>
            <Text fz={18} bold>Let the clients know the dates you are availalbe below. </Text>

            <Calendar
                selectedDays={selectedDays}
                setSelected={setSelected}
                enabledAll={true}
                endDate={offer.endDate}
            />
            <Button green loading={isLoading} onClick={preOnSave} mt={70}>Save</Button>
        </>
    );
};

