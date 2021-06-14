import styled from 'styled-components'
import { space } from 'styled-system'
import { Text } from '../../StyledComponents/Text'
import { Plus, Minus } from '../../StyledComponents/Icon'
import { Input } from '../Input/Input'
import React from 'react'

const Wrapper = styled.div`
  ${space};
  display: flex;

  ${Minus}, ${Plus} {
    cursor: pointer;
  }
`
const Count = styled.div`
  width: ${(props) => (props.small ? '32px' : '65px')};
  height: ${(props) => (props.small ? '32px' : '46px')};
  font-size: ${(props) => (props.small ? '18px' : '24px')};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`
const InputCounter = styled.input.attrs((props) => ({
  type: props.type,
  readOnly: props.readOnly,
}))`
  // ${space};
  //width: 32px;
  width: 54px;
  line-height: 32px;
  height: 32px;
  font-size: 18px;
  color: rgba(1, 1, 1, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 3px;
  box-sizing: border-box;
  text-align: center;

  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: rgba(1, 1, 1, 0.5);
  }
  :-ms-input-placeholder {
    color: rgba(1, 1, 1, 0.5);
  }
  ::placeholder {
    color: rgba(1, 1, 1, 0.5);
  }
  -moz-appearance: textfield;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Label = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  padding-right: 20px;
`
const WrapperWithLabel = styled(Wrapper)`
  ${space};
  justify-content: space-between;
  min-height: 46px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  Label {
    width: 60%;
  }
  Counter {
    width: 40%;
  }
`
const WrapperYesNo = styled.div`
  ${space};
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  height: 32px;
  align-items: center;
  color: rgba(0, 0, 0, 0.3);
`
const SpanYesNo = styled.span`
  ${space};
  padding: 0 12px;
  font-size: 16px;
  color: ${(props) => (props.active ? '#000000' : 'rgba(0, 0, 0, 0.3)')};
  cursor: pointer;
`

const Counter = ({ name, value, onChange, small, readOnly }) => {
  const preOnChange = (i) => {
    if (i === -1 && value === 0) return
    onChange({ name: name, value: Number(value) + i })
  }

  const preOnChangeInput = (value) => {
    onChange({ name: name, value: value })
  }

  return (
    <Wrapper>
      <Minus small mr={small ? 10 : 30} onClick={() => preOnChange(-1)} />
      {/*<Count small={!!small} >{value}</Count>*/}
      <InputCounter
        type={'number'}
        value={value}
        onChange={(e) => preOnChangeInput(e.target.value)}
        placeholder={''}
        readOnly={readOnly}
      />
      <Plus small ml={small ? 10 : 30} onClick={() => preOnChange(1)} />
    </Wrapper>
  )
}
const CounterLabel = ({ title, ...props }) => {
  return (
    <WrapperWithLabel>
      <Label>{title}</Label>
      <Counter small {...props} />
    </WrapperWithLabel>
  )
}

const YesNoLabel = ({ title, active, handleClick, keyArr, params }) => {
  console.log(active)
  if (typeof active === 'string') {
    active = active === 'true' ? true : false
  }

  return (
    <WrapperWithLabel>
      <Label>{title}</Label>
      <WrapperYesNo>
        <SpanYesNo active={!active} onClick={() => handleClick(keyArr, 'no', params)}>
          No
        </SpanYesNo>
        |
        <SpanYesNo active={active} onClick={() => handleClick(keyArr, 'yes', params)}>
          Yes
        </SpanYesNo>
      </WrapperYesNo>
    </WrapperWithLabel>
  )
}

export { Counter, CounterLabel, YesNoLabel }
