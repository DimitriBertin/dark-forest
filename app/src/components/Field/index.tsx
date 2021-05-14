import { FieldProps } from './Type'
import Style from './Style'
import { ChangeEvent } from 'react'

function Field({ type, value, label, id, name, disabledLabel, placeholder, handleChange }: FieldProps): JSX.Element {
  return (
    <div className={`field ${Style}`}>
      <label htmlFor={id} className={disabledLabel ? 'sr-only' : ''}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.currentTarget.value)}
      />
    </div>
  )
}

export default Field
