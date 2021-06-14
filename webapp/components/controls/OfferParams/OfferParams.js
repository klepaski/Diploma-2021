import React, { useState, useContext } from 'react'

import { modifyForReactSealect } from '../../../utils/utils'
import { Title, Label2 } from './../../Layouts/styledLayouts'
import Select from '../../controls/Select/Select'
import { CounterLabel, YesNoLabel } from '../Counter/Counter'
import { Wrapper } from '../../StyledComponents/Wrapper'
import { Divider } from '../../StyledComponents/Divider'

import './styles.css'
import { Input } from '../Input/Input'
import styled from 'styled-components'
import { device } from '../../../lib/mediaDevice'
import { Column } from '../../StyledComponents/Grid'

const OfferParams = ({ params, step, onChange }) => {
  let paramsStep = params.filter((item) => item.step === step)

  const preOnChangeSelect = (item, value) => {
    let clone = Object.assign({}, item)
    clone.value = value.value
    onChange(clone)
  }
  const preOnChangeBool = (obj, value, item) => {
    let clone = Object.assign({}, item)
    clone.value = value === 'yes' ? true : false
    onChange(clone)
  }

  const preOnChangeInt = (item, value) => {
    let clone = Object.assign({}, item)
    if (!value) value = 0
    clone.value = value.value
    onChange(clone)
  }

  const preOnChangeInput = (item, value) => {
    let clone = Object.assign({}, item)
    clone.value = value
    onChange(clone)
  }

  console.log('paramsStep', paramsStep)

  return (
    <Box>
      {paramsStep.map((item, key) => {
        let units = item.units ? `(${item.units})` : ''
        if (item.units === 'Currency') units = ''

        return (
          <div className="z-item-params" key={key}>
            {item.type === 'list' && (
              <div className="z-list-params">
                <Label2>{`${item.title} ${units}`}</Label2>
                <Select
                  options={modifyForReactSealect(item.possibleValues)}
                  value={item.value}
                  onChange={(value) => preOnChangeSelect(item, value)}
                  mb={25}
                />
              </div>
            )}

            {item.type === 'input' && (
              <div className="z-input-params">
                <Label2>{`${item.title} ${units}`}</Label2>
                <Input
                  type={'text'}
                  value={item.value}
                  onChange={(e) => preOnChangeInput(item, e.target.value)}
                  placeholder={''}
                  height40
                />
              </div>
            )}

            {item.type === 'int' && (
              <div className="z-int-params">
                <CounterLabel
                  title={`${item.title} ${units}`}
                  name={''}
                  value={Number(item.value)}
                  onChange={(val) => preOnChangeInt(item, val)}
                />
              </div>
            )}

            {item.type === 'bool' && (
              <div className="z-bool-params">
                <YesNoLabel
                  key={key}
                  keyArr={key}
                  title={`${item.title} ${units}`}
                  active={item.value}
                  params={item}
                  handleClick={preOnChangeBool}
                />
              </div>
            )}
          </div>
        )
      })}
    </Box>
  )
}

export default OfferParams

const Box = styled.div`
  @media ${device.laptopDesktop} {
    .z-item-params {
      border-bottom: none;
      margin-bottom: 30px;
    }
  }
`
