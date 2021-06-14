import styled from "styled-components";
import galleryBg from '../../static/img/gallery-bg.jpg'
import {MainTitle, SubTitle} from '../StyledComponents/Text'

const GalleryWrapper = styled.div`
  height: 40vh;
  background: url(${galleryBg}) no-repeat;
  background-size: cover;
  padding: 15px 15px 20px 15px;
`;

const GalleryOfferWrapper = styled.div`
  height: 65vh;
  background: url(${galleryBg}) no-repeat;
  background-size: cover;
  padding: 15px 15px 20px 15px;
`;

export {GalleryWrapper, GalleryOfferWrapper}

