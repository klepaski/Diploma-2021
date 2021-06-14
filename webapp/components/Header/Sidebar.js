import React, {useState, useContext, useRef} from 'react';
import Link from "next/link";
import useOnClickOutside from 'use-onclickoutside'
import {MainContext, MainConsumer} from "../contextProviders/MainContext";
import {SidebarWrapper, SidebarItem, SidebarHeaderHome, HeaderWrapper} from './styledHeader'
import {Divider} from '../StyledComponents/Divider'
import {FlexBlock} from "../StyledComponents/FlexBlock";
import {Bars, Close, Logo} from "../StyledComponents/Icon";
import {SubTitle} from "../StyledComponents/Text";
import {logout} from "../../utils/auth";
import Router from "next/router";
import {Wrapper} from "../StyledComponents/Wrapper";
import styled from "styled-components";
import {useDetectDevice} from "../../lib/useDetectDevice";


const Sidebar = ({isHomepage, toggleSidebar, hideSidebar, logout}) => {
    const {me, setMe, unreadMessages} = useContext(MainContext)
    const currentDevice = useDetectDevice()

    const handleDelayClose = () => {
        setTimeout(() => {
            toggleSidebar()
        }, 100)
    }

    const ref = useRef(null)
    useOnClickOutside(ref, hideSidebar)

    return (
        <SidebarWrapper ref={currentDevice.isLaptopDesktop ? ref : null} className='sidebar-is-opened' isHomepage>
            {isHomepage &&
            <SidebarHeaderHome>
                <div>
                    {/*<Logo/>*/}
                    {/*<Bars onClick={toggleSidebar} />*/}
                </div>
                <Close onClick={toggleSidebar} />
                {/*{!me.id ?*/}
                {/*    <Link href="/registration">*/}
                {/*        <SubTitle>Sign up</SubTitle>*/}
                {/*    </Link>*/}
                {/*    :*/}
                {/*    <SubTitle onClick={logout}>Logout</SubTitle>*/}
                {/*}*/}
            </SidebarHeaderHome>
            }

            <div onClick={() => handleDelayClose()}>
                <Link href={'/'}>
                    <SidebarItem>Home</SidebarItem>
                </Link>

                {me.id ?
                <>
                    <Divider grey full mt={'5px'} mb={20} />
                    <Link href={'/profile/edit'}>
                        <SidebarItem>Profile</SidebarItem>
                    </Link>
                    {/*<Link href={''}>*/}
                    {/*    <SidebarItem isNoActive >Orders</SidebarItem>*/}
                    {/*</Link>*/}

                    <Link href={'/profile/offers'}>
                        <SidebarItem>My offers</SidebarItem>
                    </Link>

                    <Link href={'/inbox'}>
                        <SidebarItem>
                            Messages
                            {!!unreadMessages && <UnreadMessagesContainer>
                                <UnreadMessages>{unreadMessages}</UnreadMessages>
                            </UnreadMessagesContainer>}
                        </SidebarItem>
                    </Link>
                    <Link href={'/profile/wish-list'}>
                        <SidebarItem >Wishlist</SidebarItem>
                    </Link>

                    <Link href={'/admin/categories'}>
                        <SidebarItem >Admin</SidebarItem>
                    </Link>

                    <Divider grey full mt={'5px'} mb={20} />
                    <SidebarItem onClick={logout}>Logout</SidebarItem>
                </>
                    :
                    <>
                        <Divider grey full mt={'5px'} mb={20} />
                        <Link href="/login" as={'/login'}>
                            <SidebarItem>Login</SidebarItem>
                        </Link>

                    </>
                }


            </div>




        </SidebarWrapper>

    );
};

export default Sidebar;


const UnreadMessagesContainer = styled.div`
  display: inline-block;
  margin-left: 5px;
`;
const UnreadMessages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00C874;
  height: 23px;
  width: 23px;
  border-radius: 50%;
  font-size: 14px;
`;