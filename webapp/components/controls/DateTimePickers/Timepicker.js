import React from "react";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import {PickerWrapper} from './styledPickers'

export default function DPicker ({date, onChange}) {
    return (
        <PickerWrapper>
            <TimePicker
                value={date}
                onChange={onChange}
            />
        </PickerWrapper>
    );
}

