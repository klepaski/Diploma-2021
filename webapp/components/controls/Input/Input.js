import styled from 'styled-components'
import { space } from 'styled-system'
import { Check } from '../../StyledComponents/Icon'
import { Text } from '../../StyledComponents/Text'
import { Counter } from '../Counter/Counter'
import { Button } from '../Button/Button'

export const InputWrapper = styled.div`
  ${space};
  position: relative;
  min-height: 61px;
  height: 61px;
  width: 100%;
`
const InputStyled = styled.input.attrs((props) => ({
  type: props.type,
}))`
  // ${space};
  font-size: ${(props) => (props.fz ? `${props.fz}px` : '14px')}
  color: rgba(1, 1, 1, 0.8);
  width: 100%;
  height: ${(props) => (props.height40 ? '40px' : '46px')}
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 13px;
  box-sizing: border-box;
  
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
`
const TextAreaStyled = styled.textarea.attrs((props) => ({
  type: props.type,
}))`
  ${space};
  font-size: ${(props) => (props.fz ? `${props.fz}px` : '14px')}
  color: rgba(1, 1, 1, 0.8);
  width: 100%;
  height:  ${(props) => (props.height ? `${props.height}px` : '95px')};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 13px;
  box-sizing: border-box;
  white-space: pre-line;
  resize: none;
  
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
  ::before {
    content: ${(props) => props.count};
  }  
`
const TextAreaWrapper = styled.div`
  ${space};
  position: relative;
`
const TextAreaCount = styled.div`
  ${space};
  position: absolute;
  bottom: 7px;
  right: 7px;
  font-size: 12px;
  color: #898989;
`
const Error = styled.div`
  ${space};
  position: relative;
  font-size: 11px;
  text-align: right;
  color: #bb1616;
`

const Input = ({ count, ...props }) => {
  return (
    <InputWrapper {...props}>
      <InputStyled {...props} />
      {props.error && <Error>{props.error}</Error>}
    </InputWrapper>
  )
}

const TextArea = ({ maxLength, value = '', ...props }) => {
  let mL = maxLength || 300,
    count = mL - value.length
  if (count < 0) count = 0
  if (!maxLength) count = ''
  return (
    <TextAreaWrapper>
      <TextAreaStyled value={value} {...props} />
      <TextAreaCount>{count}</TextAreaCount>
    </TextAreaWrapper>
  )
}

const Input2 = ({ ...props }) => {
  return (
    <InputWrapper {...props}>
      <InputStyled {...props} />
    </InputWrapper>
  )
}

const Wrapper = styled.div`
  ${space};
  display: flex;
  width: 100%;

  Input2 {
    width: calc(100% - 80px);
  }

  input {
    border-radius: 5px 0 0 5px;
    border-right: none;
  }

  Button {
    width: 80px;
    border-radius: 0 5px 5px 0;
  }
`

const InputWithButton = ({ disabled, handleClick, ...props }) => {
  return (
    <Wrapper>
      <Input2 {...props} />
      <Button transparent disabled={disabled} onClick={handleClick}>
        Add
      </Button>
    </Wrapper>
  )
}

export { Input, TextArea, InputWithButton }
