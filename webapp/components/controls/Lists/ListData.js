import React from "react";
import {LiItemIcon} from "../../StyledComponents/Icon";
import './style.css'

export const ListLR = ({title, value, ...props}) => {
    return (
        <div className='listlr-item'>
            <div className='listlr-title'>{title}</div>
            <div className='listlr-value'>{value}</div>
        </div>
    )
}
export const ListItem = ({type, title, fz, ...props}) => {
    return (
        <div className='z-list-item'>
            {type === 'black' && <div className="ls-type-black"></div>}
            {type === 'blackGreen' && <LiItemIcon pr={'5px'}/>}
            <div className={`z-list-text ${fz === 14 && 'fz-14'}`}>{title}</div>
        </div>
    )
}




