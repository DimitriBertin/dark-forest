import { ButtonProps } from './Type'
import Style from './Style'

function Button({ children, type, handleClick, theme = 'primary' }: ButtonProps): JSX.Element {
  return (
    <button type={type} onClick={handleClick} className={Style(theme)}>
      {children}
    </button>
  )
}

export default Button
