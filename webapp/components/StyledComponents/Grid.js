import React from 'react'
import styled, { css } from 'styled-components'
import { space } from 'styled-system'
import { device } from '../../lib/mediaDevice'
import { Footer } from '../Layouts/styledLayouts'

function getWidthString(span) {
  if (!span) return
  let width = (span / 12) * 100
  return `width: ${width}%;`
}

export const Container = styled.div`
  ${space};
  margin-right: auto;
  margin-left: auto;
  padding-left: 5px;
  padding-right: 5px;
`
export const ContainerDesktop = styled.div`
  @media ${device.laptopDesktop} {
    padding-top: 70px;
    width: 90%;
    margin: 0 auto;

    ${(p) =>
      p.isOffer &&
      css`
        width: 80%;
        padding-top: 150px;
        padding-bottom: 200px;
      `}
  }
`

export const Row = styled.div`
  ${space};
  // display: flex;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
  margin-left: -10px;
  margin-right: -10px;
`

export const Column = styled.div`
  position: relative;
  min-height: 1px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 5px;
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%;')};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
  ${space};
`

export const OnlyMobile = styled.div`
  @media ${device.laptopDesktop} {
    display: none;
  }
`
export const OnlyDesktop = styled.div`
  position: relative;

  @media ${device.mobileTablet} {
    display: none;
  }
`
// export const OfferFooterDesktop = styled.div`
//   @media ${device.laptopDesktop} {
//     position: fixed;
//     width: 100%;
//     left: 0;
//     bottom: 0;
//     background: #F2F2F2;
//     height: 130px;
//     padding-left: 10%;
//
//     > button {
//       width: 340px;
//     }
//   }
// `
export const FooterDesktop = styled.div`
  @media ${device.laptopDesktop} {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #f2f2f2;
    height: 100px;
    padding-left: 10%;
    padding-top: 27px;

    ${Footer} {
      width: 350px;
      margin-top: 0;
      padding-top: 0;
    }

    button {
      width: 160px;
      margin-top: 0;
    }
  }
`

export const FlexLeft = styled.div``
export const FlexRight = styled.div``
export const Flex = styled.div`
  @media ${device.laptopDesktop} {
    display: flex;

    ${FlexLeft} {
      width: 50%;
      padding-right: 20px;
    }

    ${FlexRight} {
      width: 75%;
      padding-left: 20px;
    }
  }
`
