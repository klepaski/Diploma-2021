import React, {useState} from 'react';
import Modal from 'react-modal';
import {Text} from '../StyledComponents/Text'
import {ModalWrapper, FlexWrap} from './styledModal'
import {Button} from '../controls/Button/Button'
import close from '../../static/img/close.svg'
import {TextArea} from '../controls/Input/Input'

import './styles.css'


export const ModalContact = ({isOpen, handleCloseModal, handleSendMessage, isLoading, user}) => {
    const [message, setMessage] = useState('')

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
            className="Modal modal-full"
        >
            <div className={'modal-full-content'}>
                <div className="text-right">
                    <img src={close} alt="" onClick={() => handleCloseModal()}/>
                </div>
                <Text fz={28} mb={10}>
                    Ask {user}

                </Text>
                <Text fz={18} mb={20}>
                    Send a message to find out more about the Offer.
                </Text>

                <TextArea name='message'
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                          height={200}
                          placeholder=""
                />


                <Button blue mt={50} disabled={!message} onClick={() => handleSendMessage(message)} loading={isLoading}>Send messege</Button>
            </div>
        </Modal>
    )
}

