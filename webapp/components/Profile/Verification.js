import React, {useState, useContext} from 'react';
import {Text} from "../StyledComponents/Text";
import {Button} from "../controls/Button/Button";


const Photos = ({user}) => {
    return (
        <>
            <Text bold fz={18} mb={10} >Be ready to book</Text>
            <Text fz={14} mb={30} grey6 >You’ll need to provide identification before you book, so get a head start by doing it now.</Text>
            <Button blue inline >Provide ID</Button>
            <Text bold fz={18} mb={30} mt={50} >Your verified info</Text>
            <Text bold fz={14} mb={10} >Email address</Text>
            <Text fz={14} mb={30} grey6 >
                You have confirmed your email: <span className={'text-bold'}>{user.email}.</span> A confirmed email is important to allow us to securely communicate with you.

            </Text>

            {/*user.typeRegistration == 'facebook' &&
                <>
                    <Text bold fz={18} mb={20} mt={50} >Your social accounts</Text>
                    <Text bold fz={14} mb={10} >Facebook</Text>
                </>
            */}

        </>

    );
};

export default Photos;
