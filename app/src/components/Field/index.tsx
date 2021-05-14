import { FieldProps } from './Type'
import Style from './Style'

function Field({ type, value, label, id, name, disabledLabel, placeholder }: FieldProps): JSX.Element {
  return (
    <div className={`field ${Style}`}>
      <label htmlFor={id} className={disabledLabel ? 'sr-only' : ''}>
        {label}
      </label>
      <input type={type} id={id} defaultValue={value} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Field
