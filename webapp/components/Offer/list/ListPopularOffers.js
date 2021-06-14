import React, { useState, useEffect } from 'react'
import { useAction, useAtom } from '@reatom/react'
import styled, { css } from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import OfferCardItem from '../../Offer/cards/OfferCardItem'
import { apiGetListOffers } from '../../../actions/api'
import { withReatom } from '../../../lib/withReatom'
import { offersAtom } from '../../../features/offers/atoms'
import { setListOffersAction } from '../../../features/offers/actions'

const ListPopularOffers = ({}) => {
  // const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(false)
  let offers = useAtom(offersAtom)
  const setOffers = useAction((data) => setListOffersAction(data))

  useEffect(() => {
    let getList = async () => {
      setLoading(true)
      let res = await apiGetListOffers()
      setOffers(res.data)
      setLoading(false)
    }
    if (!offers.length) {
      getList()
    }
  }, [])

  return (
    <div className="row">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {offers.map((item, key) => {
            return (
              <Col key={key}>
                <OfferCardItem offer={item} />
              </Col>
            )
          })}
        </>
      )}
    </div>
  )
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
    width: 360px;
    
    margin-bottom: 2rem;
    //padding-right: 10px;
    //padding-left: 10px;
  }
`

export default withReatom(ListPopularOffers)
