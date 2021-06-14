import React from "react";
import moment from 'moment'

import {modifySrc} from '../../utils/modifySrc'
import {MessageWrapper, AvatarMessage, MessageTextWrap, SystemMessageTextWrap, TextMessage, DateMessage, TextSystemMessage} from './styledComponent'

export default function Message ({message, me, sender}) {
    let senderId = (message.senderId && message.senderId.id) ? message.senderId.id : message.senderId
    let isMymsg = me.id === senderId

    let avatarSrc = isMymsg ? modifySrc(me.profilePhotoURL, 'person') : modifySrc(sender.profilePhotoURL, 'person')


    return (
        <MessageWrapper>
            {message.senderId ?
                <>
                    <AvatarMessage src={avatarSrc} />
                    <MessageTextWrap isMy={isMymsg}>
                        <TextMessage>{message.text}</TextMessage>
                        <DateMessage>{moment(message.createDate).format('HH:mm, D MMMM, YYYY')}</DateMessage>
                    </MessageTextWrap>
                </>
                :
                <SystemMessageTextWrap>
                    <TextSystemMessage isSystem>{message.text}</TextSystemMessage>
                    <DateMessage isSystem>{moment(message.createDate).format('HH:mm, D MMMM, YYYY')}</DateMessage>
                </SystemMessageTextWrap>
            }

        </MessageWrapper>
    );
}
