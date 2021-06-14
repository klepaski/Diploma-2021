import React, {useState, useContext, useEffect} from 'react';
import moment from 'moment/moment'

import {MenuSettingsWrapper, MenuSettingsItem} from '../../components/Profile/styledProfileHeader'
import {Text} from "../StyledComponents/Text";
import {Input, TextArea} from "../controls/Input/Input";
import Select from "../controls/Select/Select";
import DatePicker from "../controls/DateTimePickers/Datepicker";
import {Wrapper} from "../StyledComponents/Wrapper";
import {listCountries, listLanguages} from "../../utils/countriesLanguages";
import {Divider} from "../StyledComponents/Divider";
import {Button} from "../controls/Button/Button";
import validate from "../../utils/validation";
import {apiChangePassword} from "../../actions/api";
import {showNotification} from "../../utils/notification";
import {MainContext} from "../contextProviders/MainContext";


const Security = (props) => {
    const {me, setMe} = useContext(MainContext)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [errorNewPassword, setErrorNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(() => {
        if(newPassword !== confirmPassword) {
            setError(`Passwords don't match`)
        } else {
            setError(null)
        }
    }, [newPassword, confirmPassword])

    const onChange = e => {
        let {name, value, required} = e.target
        switch(name) {
            case 'oldPassword':
                setOldPassword(value)
                break;
            case 'newPassword':
                setNewPassword(value)
                if(value.length >= 6) setErrorNewPassword('')
                break;
            case 'confirmPassword':
                setConfirmPassword(value)
                break;
        }

    }

    const onSave = () => {
        let data = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }
        if(newPassword.length < 6) {
            setErrorNewPassword('Min length 6 symbols')
            return
        }
        setLoading(true)
        apiChangePassword(data)
            .then(async (res) => {
                showNotification('info', 'Your password was updated successfully')
                setLoading(false)
            })
            .catch((e) => {
                setLoading(false)
                showNotification('error', e)
            });
    }

    const disabled = !oldPassword || !newPassword || !confirmPassword || error

    return (
        <>
            <Text bold fz={18} mb={20} >Security</Text>
            <Text fz={14} mb={'5px'} >Old Password</Text>
            <Input type={'password'}
                   name="oldPassword"
                   value={oldPassword}
                   onChange={onChange}
                   mb={10}
                   placeholder=""
            />
            <Text fz={14} mb={'5px'} mt={20} >New Password</Text>
            <Input type={'password'}
                   name="newPassword"
                   value={newPassword}
                   error={errorNewPassword}
                   onChange={onChange}
                   mb={10}
                   placeholder=""
            />
            <Text fz={14} mb={'5px'} mt={20} >Confirm Password</Text>
            <Input type={'password'}
                   name="confirmPassword"
                   value={confirmPassword}
                   onChange={onChange}
                   mb={10}
                   placeholder=""
                   error={confirmPassword && error}
            />



            <Button blue onClick={onSave} loading={loading} disabled={disabled} >Update Password</Button>

        </>

    );
};

export default Security;
