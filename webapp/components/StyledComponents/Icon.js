import styled from "styled-components";
import { space } from 'styled-system'

import logo from '../../static/img/logo.svg'
import logogreen from '../../static/img/logogreen.svg'
import logopurple from '../../static/img/logo-purple.svg'
import bars from '../../static/img/bars.svg'
import close from '../../static/img/close.svg'
import closeWihite from '../../static/img/close-white.svg'
import avatar from '../../static/img/empty-avatar.png'
import check from '../../static/img/check.svg'
import checkblue from '../../static/img/check-blue.svg'
import checkGreen from '../../static/img/check-green.svg'
import checkGreenTransparent from '../../static/img/check-green-trt.png'
import checkgrbl from '../../static/img/check-grbl.svg'
import plus from '../../static/img/plus.svg'
import pluspurple from '../../static/img/plus-iconpurple.svg'
import minus from '../../static/img/minus.svg'
import icon1 from '../../static/img/icon1.svg'
import icon2 from '../../static/img/icon2.svg'
import icon3 from '../../static/img/icon3.svg'
import offerBlue1 from '../../static/img/offer-blue-1.svg'
import offerBlue2 from '../../static/img/offer-blue-2.svg'
import offerBlue3 from '../../static/img/offer-blue-3.svg'
import clr1 from '../../static/img/clr-1.svg'
import clr2 from '../../static/img/clr-2.svg'
import greenarrowdown from '../../static/img/greenarrow-down.svg'
import purplearrowdown from '../../static/img/purplearrow-down.svg'
import arrowright from '../../static/img/arrow-right.svg'
import arrowright2 from '../../static/img/arrow-r2.svg'
import arrowleft from '../../static/img/arrow-left.svg'
import preferences from '../../static/img/preferences.svg'
import defaultavatar from '../../static/img/photo-upload.png'
import icavatar from '../../static/img/ic_avatar.svg'
import liItemIcon from '../../static/img/li-item-icon.svg'


const Logo = styled.img.attrs(props => ({src: logo}))`
    cursor: pointer;
`
const LogoGreen = styled.img.attrs(props => ({src: logogreen}))``
const LogoPurple = styled.img.attrs(props => ({src: logopurple}))``
// const Bars = styled.img.attrs(
//     props => ({src: bars}))`
//     `

const Bars = styled.img.attrs({
    src: bars
})`
    padding-left: 10px;
    height: 20px;
`

const Close = styled.img.attrs(props => ({src: props.white ? closeWihite : close}))``
const EmptyAvatar = styled.img.attrs(props => ({ src: avatar}))``
const Check = styled.img.attrs(props => ({src: check}))``
export const CheckGreen = styled.img.attrs(props => ({src: checkGreen}))` ${space}`
const CheckBlue = styled.img.attrs(props => ({src: checkblue}))``
export const CheckGreenTransparent = styled.img.attrs(props => ({src: checkGreenTransparent}))``
const CheckGreenBlack = styled.img.attrs(props => ({src: checkgrbl}))``
const Plus = styled.img.attrs(props => ({src: plus}))` ${space}`
const PlusPurple = styled.img.attrs(props => ({src: pluspurple}))` ${space}`
const Minus = styled.img.attrs(props => ({src: minus}))` ${space}`
const Icon1 = styled.img.attrs(props => ({src: icon1}))` ${space}`
const Icon2 = styled.img.attrs(props => ({src: icon2}))` ${space}`
const Icon3 = styled.img.attrs(props => ({src: icon3}))` ${space}`
export const OfferBlue1 = styled.img.attrs(props => ({src: offerBlue1}))` ${space}`
export const OfferBlue2 = styled.img.attrs(props => ({src: offerBlue2}))` ${space}`
export const OfferBlue3 = styled.img.attrs(props => ({src: offerBlue3}))` ${space}`
const Clr1 = styled.img.attrs(props => ({src: clr1}))` ${space}`
const Clr2 = styled.img.attrs(props => ({src: clr2}))` ${space}`
const GreenArrowDown = styled.img.attrs(props => ({src: greenarrowdown}))` ${space}`
const PurpleArrowDown = styled.img.attrs(props => ({src: purplearrowdown}))` ${space}`
const ArrowRight = styled.img.attrs(props => ({src: arrowright}))` ${space}`
const ArrowRight2 = styled.img.attrs(props => ({src: arrowright2}))` ${space}`
const ArrowLeft = styled.img.attrs(props => ({src: arrowleft}))` ${space}`
const Preferences = styled.img.attrs(props => ({src: preferences}))` ${space}`
const UploadImg = styled.img.attrs(props => ({src: defaultavatar}))` ${space}`
const IcAvatar = styled.img.attrs(props => ({src: icavatar}))` ${space}`
export const LiItemIcon = styled.img.attrs(props => ({src: liItemIcon}))` ${space}`

const WrapperIcon = styled.div`
  ${space};
  text-align: center;
`;

export {ArrowLeft, UploadImg, IcAvatar, Logo, LogoGreen, LogoPurple, Bars, Close, EmptyAvatar, Check, CheckBlue, CheckGreenBlack, Plus, PlusPurple, Minus, Icon1, Icon2, Icon3, WrapperIcon, Clr1, Clr2, GreenArrowDown, PurpleArrowDown, ArrowRight, ArrowRight2, Preferences}
