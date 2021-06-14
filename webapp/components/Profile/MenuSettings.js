import React, {useState, useContext} from 'react';

import {MenuSettingsWrapper, MenuSettingsItem} from '../../components/Profile/styledProfileHeader'


export const MenuEdit = ({tab, setTab}) => {
    return (
        <>
            <MenuSettingsWrapper>
                <MenuSettingsItem active={tab === 1} onClick={() => setTab(1)} >Edit Profile</MenuSettingsItem>
                <MenuSettingsItem active={tab === 2} onClick={() => setTab(2)}>Profile Photo</MenuSettingsItem>
                <MenuSettingsItem active={tab === 3} onClick={() => setTab(3)}>PhotosGallery</MenuSettingsItem>
                <MenuSettingsItem active={tab === 4} onClick={() => setTab(4)} >Security</MenuSettingsItem>
            </MenuSettingsWrapper>
        </>
    );
};


