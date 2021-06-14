import React, {useState, useContext, useEffect, useRef} from 'react';

import Header from "../../components/Header/Header"
import UserContent from "../../components/Profile/UserContent"
import {MainContext} from "../../components/contextProviders/MainContext";





const Profile = () => {
    const {me, setMe} = useContext(MainContext)

    return (
        <>
            <Header isProfile/>
            {me.id ?
                <UserContent user={me}  />
                :
                <>Loading</>
            }
        </>

    );
};

export default Profile

