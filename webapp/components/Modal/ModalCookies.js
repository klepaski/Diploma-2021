import React from 'react';
import Modal from 'react-modal';
import {Text} from '../StyledComponents/Text'
import {ModalWrapper, FlexWrap} from './styledModal'
import {Button} from '../controls/Button/Button'

const customStyles = {
    content : {
        bottom: '20px',
        top: 'auto'
    }
};

export default function ModalCookies ({isOpen, afterOpenModal, closeModal}) {
    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="Modal"
        >

            <ModalWrapper>
                <Text mb={20} fz={12} >
                    We use cookies to help personalize content, tailor and measure ads,
                    and provide a safer experience. By navigating the site, you agree to
                    the use of cookies to collect information on and off Airbnb. Read our
                    Cookie Policy to learn more or go to Cookie Preferences to manage your settings.
                </Text>

                <FlexWrap>
                    <Button green >
                        Cookie
                    </Button>
                    <Button transparentGreen >
                        Settings
                    </Button>
                </FlexWrap>
            </ModalWrapper>
        </Modal>
    )

}

