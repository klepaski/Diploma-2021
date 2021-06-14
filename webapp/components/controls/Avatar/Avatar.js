import React from 'react'
import styled, {css} from 'styled-components'
import { space } from 'styled-system'
import {EmptyAvatar} from '../../StyledComponents/Icon'

const WrapperAvatar = styled.div`
  ${space};
  text-align: center;
  img {
    width: ${ props => props.width ? props.width + 'px' : '50px' };
  }
`;

const Avatar = ({src}) => {
    return (
        <WrapperAvatar width={100}>
            {src ?
                <img src={src} alt=""/>
                :
                <EmptyAvatar />
            }
        </WrapperAvatar>
    )

}

export {Avatar}


