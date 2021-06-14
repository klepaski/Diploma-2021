import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import styled from 'styled-components'
import { Footer, Label, Label2, Title } from '../../Layouts/styledLayouts'
import { Wrapper, WrapperHeight } from '../../StyledComponents/Wrapper'
import { Button } from '../../controls/Button/Button'
import Header from '../../Header/Header'
import Select from '../../controls/Select/Select'
import { Input, InputWrapper } from '../../controls/Input/Input'
import DatePicker from '../../controls/DateTimePickers/Datepicker'
import { apiGetListOffers } from '../../../actions/api'
import ListOffers from '../list/ListOffers'
import { device } from '../../../lib/mediaDevice'
import { useDetectDevice } from '../../../lib/useDetectDevice'
import { ButtonWithIcon } from '../../controls/Button/ButtonWithIcon'

const listCountries = [
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'Saudi Arabia', label: 'Saudi Arabia' },
]

const SearchBlock = ({ blackTitle, searchStr = '', fromP = null, toP = null, countryStr = '' }) => {
  const currentDevice = useDetectDevice()
  const [search, setSearch] = useState(searchStr)
  const [from, setFrom] = useState(fromP)
  const [to, setTo] = useState(toP)
  const [country, setCountry] = useState(countryStr)
  const [listOffers, setListOffers] = useState([])
  const [loading, setLoading] = useState(false)

  let onChangeSearch = (e) => {
    setSearch(e.target.value)
  }
  const onChangeDateFrom = (date) => {
    setFrom(date)
  }
  const onChangeDateTo = (date) => {
    setTo(date)
  }
  const handleChangeCountry = (country) => {
    setCountry(country.value)
  }

  const getListOffers = () => {
    let params = {
      search: search,
      country: country,
    }
    apiGetListOffers(params)
      .then((res) => {
        setListOffers(res.data)
      })
      .catch((e) => {})
  }

  const handleStartSearch = () => {
    let fromSearch = from && new Date(from) ? new Date(from).getTime() : ''
    let toSearch = to && new Date(to) ? new Date(to).getTime() : ''

    Router.push(
      `/offers/search?search=${search}&from=${fromSearch}&to=${toSearch}&country=${country}`,
      `/offers/search?search=${search}&from=${fromSearch}&to=${toSearch}&country=${country}`,
      { shallow: true },
    )
  }

    return (
      <Box>
        <Label small>Who are you looking for?</Label>
        <WrapperFlex>
          <WFBox width={45}>
            <LabelD>Programmer</LabelD>
            <Input
              type={'text'}
              value={search}
              onChange={onChangeSearch}
              placeholder="Anyone"
              mb={'5px'}
              fz={15}
            />
          </WFBox>
          <DateBox>
            <div className={'picker-left'}>
              <LabelD>From</LabelD>
              <DatePicker
                selected={from}
                name="date"
                maxDate={to}
                onChange={onChangeDateFrom}
                showYearDropdown
                dateFormat="dd/MM/yyyy"
                placeholderText={'dd/mm/yyyy'}
              />
            </div>
            <div className={'picker-right'}>
              <LabelD>To</LabelD>
              <DatePicker
                selected={to}
                name="date"
                minDate={from}
                onChange={onChangeDateTo}
                showYearDropdown
                dateFormat="dd/MM/yyyy"
                placeholderText={'dd/mm/yyyy'}
              />
            </div>
          </DateBox>

          <ButtonWithIcon onClick={handleStartSearch} search />
        </WrapperFlex>
      </Box>
    )
}

const SearchingBlockWrapper = styled.div``
const Box = styled.div`
  width: 86%;
  margin: 0 auto;
  position: relative;
  top: -13px;

  @media ${device.iPad} {
    width: 100%;
    top: 50px;
  }

  ${Label} {
    color: #ffffff;
    font-size: 24px;
  }
`
const WrapperFlex = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${ButtonWithIcon} {
    width: 46px;
  }
  ${InputWrapper} {
    height: 46px;
    min-height: 46px;
    margin-bottom: 0;
  }
`
const WFBox = styled.div`
  width: ${(p) => `${p.width}%`};
`
const DateBox = styled.div`
  width: 250px;
  display: flex;

  .picker-left input {
    border-right: 0;
    border-radius: 5px 0px 0px 5px;
  }
  .picker-right input {
    //border-left: 0;
    border-radius: 0 5px 5px 0px;
  }
`

const SelectBox = styled.div`
  width: ${(p) => p.width ? `${p.width}%` : '35%'};

  > div > div > div {
    min-height: 46px;
  }
`
const LabelD = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 10px;
`

export default SearchBlock
