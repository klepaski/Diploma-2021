import React from 'react'
import styled, {css} from 'styled-components'
import { space } from 'styled-system'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  float: left;
`
const CheckboxWrapper = styled.div`
  ${space};
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${props => (props.checked ? '#00C874' : 'transparent')}
  border: 1px solid ${props => (props.checked ? '#00C874' : '#979797')};
  border-radius: 2px;
  transition: all 150ms;
  
  ${props =>
    props.blue &&
    css`
        background: ${props => (props.checked ? '#6436C7' : 'transparent')}
        border: 1px solid ${props => (props.checked ? '#6436C7' : '#979797')};
    `}

  ${HiddenCheckbox}:focus + & {
    // box-shadow: 0 0 0 2px #09ee7f;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Label = styled.div`
  margin-left: 32px;
  font-size: ${props => props.fz ? `${props.fz}px` : '12px'};
  color: rgba(0, 0, 0, 0.8);
`



const Checkbox = ({ className, checked, blue, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} blue={blue}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
    </CheckboxContainer>
)

const CheckboxWithLabel = ({checked, onChange, label, fz, blue}) => {
    return (
        <CheckboxWrapper>
            <label>
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                    blue={blue}
                />
                <Label fz={fz} >
                    {label}
                </Label>
            </label>
        </CheckboxWrapper>
    )

}

export {Checkbox, CheckboxWithLabel}


