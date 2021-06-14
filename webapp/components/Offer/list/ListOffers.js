import React from "react";
import OfferCardItem from "../../Offer/cards/OfferCardItem";
import styled from "styled-components";
import {device} from "../../../lib/mediaDevice";


export default function ListOffers ({offers, withStatus}) {
    if(!offers) offers = []

    return (
        <div className="row">
            {offers.map((item, key) => {
                return (
                    <Col key={key}>
                        <OfferCardItem
                            offer={item}
                            withStatus={withStatus}
                        />
                    </Col>
                )
            })}
        </div>
    );
}


const Col = styled.div`
  cursor: pointer;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  max-width: 50%;
  width: 50%;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  @media ${device.laptopDesktop} {
    //-ms-flex-preferred-size: 33.333%;
    //flex-basis: 33.333%;
    //max-width: 33.333%;
    width: 32%;
    margin-bottom: 20px;
    //padding-right: 10px;
    //padding-left: 10px;
  }
`
