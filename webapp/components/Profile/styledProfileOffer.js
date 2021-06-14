import styled from 'styled-components'
import avatar from '../../static/img/avatar.jpg'

const AvatarOffer = styled.div`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  background: url(${(props) => props.src}) no-repeat;
  background-size: cover;
  cursor: pointer;
`

export { AvatarOffer }
