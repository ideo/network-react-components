import React from 'react'
import styled from 'styled-components'
import BaseFormControl, {
  FormControlProps,
} from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import FieldError from '~shared/components/atoms/FieldError'
import FieldLabel from '~shared/components/atoms/FieldLabel'
import RadioInput from '~shared/components/atoms/RadioInput'
import {
  colors,
  sizeStyles,
  spaceStyles,
  typography,
} from '~shared/styles/index'
import { SizeProps } from '~shared/styles/props/size'
import { SpaceProps } from '~shared/styles/props/space'
import { pxToRem } from '~shared/styles/utils'
import Flex from '~shared/components/atoms/Flex'

interface StyleProps extends SpaceProps, SizeProps {
  inheritFont?: boolean
}

export interface Props extends StyleProps {
  label?: string
  className?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  options: ObjectifiableFormOption[]
  labelPlacement: 'end' | 'start' | 'top' | 'bottom'
  value?: string
  id?: string
  error?: string
  type?: string
  disabled?: boolean
  format?: (value: string) => string
  readOnly?: boolean
  required?: boolean
}

const fontStyles = ({ inheritFont = false }: StyleProps) => {
  if (inheritFont) {
    return `
      font: inherit;
      color: inherit;
      letter-spacing: inherit;
      line-height: inherit;
    `
  }
  return `
    font-family: ${typography.sans};
    font-size: ${pxToRem(16)};
    line-height: 1.1;
    letter-spacing: ${pxToRem(0.6)};
  `
}

const FormControl = styled(
  ({ children, disabled, error, className }: FormControlProps) => (
    <BaseFormControl disabled={disabled} error={error} className={className}>
      {children}
    </BaseFormControl>
  )
)`
  ${sizeStyles};
  ${spaceStyles};
  && input {
    border-bottom: 1px solid ${colors.black};
  }
  && > div,
  && input {
    ${fontStyles};
  }
`

const RadioField = ({
  label,
  className,
  onChange,
  onBlur,
  onFocus,
  options,
  value,
  id,
  type = 'radio',
  labelPlacement = 'end',
  disabled,
  error,
  format,
  readOnly,
  required,
  ...styleProps
}: Props) => (
  <FormControl
    {...styleProps}
    disabled={disabled}
    error={!!error}
    className={className}
  >
    {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
    <RadioGroup
      id={id}
      name={name}
      onChange={onChange}
      value={format && value ? format(value) : value}
      row={true}
    >
      {options.map(option => (
        <FormControlLabel
          key={option}
          value={option}
          label={option}
          control={<Radio color="primary" />}
          labelPlacement={labelPlacement}
        />
      ))}
    </RadioGroup>
    {error && <FieldError>{error}</FieldError>}
  </FormControl>
)

export default RadioField
