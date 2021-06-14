import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {apiGetUserById} from '../actions/api'

const useUserInfo = userId => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await apiGetUserById(userId)
            setUser(res.data)
        }
        if(userId) getUserInfo()
        console.log('userId', userId)
    }, [userId]);

    return user;
}

export default useUserInfo;