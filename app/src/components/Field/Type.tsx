import { ChangeEventHandler } from 'react'

export interface FieldProps {
  type: string
  value: string
  label: string
  id: string
  name: string
  disabledLabel?: boolean
  placeholder?: string
  handleChange: (value: string) => void
}
