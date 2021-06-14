import React, { useState, useContext, useEffect } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Footer, Label2 } from '../../components/Layouts/styledLayouts'
import { Wrapper, WrapperHeight } from '../../components/StyledComponents/Wrapper'
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

const Categories = () => {
  let { search, last, type } = urlSearchParams()
  const { listOffers } = useContext(MainContext)
  const [list, setList] = useState(listOffers)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getListOffers()
  }, [search])

  const getListOffers = () => {
    let params = {
      search: search,
      last: last,
      type: type
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

  let title = ''
  if(last) title = 'Recently added'
  if(search) title = `Category: ${search.charAt(0).toUpperCase() + search.slice(1)}`
  if(type) title = `For: ${type.charAt(0).toUpperCase() + type.slice(1)}`

  return (
    <>
      <Header isProfile />
      <ContainerDesktop>
        <Wrapper p={15}>
          <Title>{title}</Title>
          {loading && <div>Loading... </div>}

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

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 50px;
  margin-top: 20px;
`

export default Categories
