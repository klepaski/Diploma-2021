import React, { useState, useContext, useEffect } from 'react'
import moment from 'moment'
import { Footer, Label2, Title } from '../../components/Layouts/styledLayouts'
import { Wrapper, WrapperHeight } from '../../components/StyledComponents/Wrapper'
import styled from 'styled-components'
import { Button } from '../../components/controls/Button/Button'
import Header from '../../components/Header/Header'
import Select from '../../components/controls/Select/Select'
import { Input } from '../../components/controls/Input/Input'
import DatePicker from '../../components/controls/DateTimePickers/Datepicker'
import { listCountries } from '../../utils/countriesLanguages'
import { apiGetListOffers } from '../../actions/api'
import ListOffers from '../../components/Offer/list/ListOffers'
import { MainContext } from '../../components/contextProviders/MainContext'
import { urlSearchParams } from '../../utils/utils'
import SearchBlock from '../../components/Offer/search/SearchBlock'
import {
  WrapSearchParams,
  SearchParamsWrapItem,
  SearchParamsLabel,
  SearchParamsValue,
} from '../../components/StyledComponents/styledComponents'
import { Text } from '../../components/StyledComponents/Text'
import { Divider } from '../../components/StyledComponents/Divider'
import { ContainerDesktop } from '../../components/StyledComponents/Grid'

const Search = () => {
  let { search, from, to, country } = urlSearchParams()
  const { listOffers } = useContext(MainContext)
  const [list, setList] = useState(listOffers)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getListOffers()
  }, [search, from, to, country])

  const getListOffers = () => {
    let params = {
      search: search,
      from: from,
      to: to,
      country: country,
    }
    setLoading(true)
    apiGetListOffers(params)
      .then((res) => {
        setList(res.data)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
      })
  }

  let fromParam = from ? moment(new Date(parseInt(from))).format('DD MMMM YYYY') : null
  let toParam = to ? moment(new Date(parseInt(to))).format('DD MMMM YYYY') : null

  console.log('from', from)
  console.log('to', to)

  return (
    <>
      <Header isProfile />
      <ContainerDesktop>
        <Wrapper p={15}>
          {/*<WrapSearchParams>*/}
          {/*  <Text fz={15}>Results for:</Text>*/}
          {/*  <SearchParamsWrapItem>*/}
          {/*    <SearchParamsLabel>name:</SearchParamsLabel>*/}
          {/*    <SearchParamsValue>{search || 'any'}</SearchParamsValue>*/}
          {/*  </SearchParamsWrapItem>*/}
          {/*  {(from || to) && (*/}
          {/*    <SearchParamsWrapItem>*/}
          {/*      <SearchParamsLabel>from:</SearchParamsLabel>*/}
          {/*      <SearchParamsValue>{fromParam}</SearchParamsValue> ,*/}
          {/*      <SearchParamsLabel ml={10}>to:</SearchParamsLabel>*/}
          {/*      <SearchParamsValue>{toParam}</SearchParamsValue>*/}
          {/*    </SearchParamsWrapItem>*/}
          {/*  )}*/}

          {/*  <SearchParamsWrapItem>*/}
          {/*    <SearchParamsLabel>country:</SearchParamsLabel>*/}
          {/*    <SearchParamsValue>{country || 'any'}</SearchParamsValue>*/}
          {/*  </SearchParamsWrapItem>*/}
          {/*</WrapSearchParams>*/}
          <Box>
            <SearchBlock
              blackTitle={true}
              searchStr={search}
              countryStr={country}
              fromP={from ? new Date(Number(from)) : null}
              toP={to ? new Date(Number(to)) : null}
            />
          </Box>

          <Divider grey mt={30} mb={30} />

          {loading && <div>to do Loading... </div>}

          {list.length ? (
            <ListOffers offers={list} />
          ) : (
            <div>{!loading && <div>No results</div>}</div>
          )}
        </Wrapper>
      </ContainerDesktop>
    </>
  )
}

const Box = styled.div`
  > div {
    margin-left: 0;
  }
  > div > div {
    color: rgba(0, 0, 0, 0.8) !important;
    margin-top: 50px !important;
  }
  > div > div:last-child {
    margin-top: 0 !important;
  }
`

export default Search
