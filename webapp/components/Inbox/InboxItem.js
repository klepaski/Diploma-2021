import React from "react";
import moment from 'moment'

import {modifySrc} from '../../utils/modifySrc'
import {WrapperInboxItem, Avatar, WrapperContext, WrapperNameDate, NameOffer, DateOffer, LastMessage, Status, WrapLastMessage, UnreadCount} from './styledComponent'
import Link from "next/link";
import {modifyStatus} from '../../utils/modifyForUser'

export default function InboxItem ({chat, me, ...props}) {
    let lastMessage = (chat.lastMessage && chat.lastMessage.id) ? chat.lastMessage : {createDate: null}

    let iCreator  = me.id === chat.offerCreatorId.id;
    let chatAvatar = modifySrc(null, 'profile'),
        companionId = '';


    if(iCreator) {
        chatAvatar = modifySrc((chat.clientId && chat.clientId.profilePhotoURL) ? chat.clientId.profilePhotoURL : '', 'profile')
        companionId = chat.clientId.id
    } else {
        chatAvatar = modifySrc((chat.offerCreatorId && chat.offerCreatorId.profilePhotoURL) ? chat.offerCreatorId.profilePhotoURL : '' , 'profile')
        companionId = chat.offerCreatorId.id
    }

    let typeChat = chat.status? "booking" : "offer"

    return (

        <WrapperInboxItem {...props}>
            <Link href={`/users/[id]`} as={`/users/${companionId}`}>
                <Avatar src={chatAvatar} />
            </Link>
            <Link href={`/inbox/[id]/${typeChat}`} as={`/inbox/${chat.id}/${typeChat}`}>
                <WrapperContext>
                    <WrapperNameDate>
                        <NameOffer>{chat.offerId ? chat.offerId.name : ''}</NameOffer>
                        <DateOffer>{moment(lastMessage.createDate).format('D MMM')}</DateOffer>
                    </WrapperNameDate>
                    <WrapLastMessage>
                        <LastMessage>
                            {lastMessage.text}
                        </LastMessage>
                        {/*!!chat.unreadMessages &&  <UnreadCount />*/}
                    </WrapLastMessage>

                    <Status>{modifyStatus(chat.status)}</Status>
                </WrapperContext>
            </Link>
        </WrapperInboxItem>
    );
}
