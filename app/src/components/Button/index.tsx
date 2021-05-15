import { ButtonProps } from './Type'
import Style from './Style'
import { LoaderIcon } from './../Icons'

function Button({ children, type, handleClick, theme = 'primary', wait }: ButtonProps): JSX.Element {
  return (
    <button type={type} onClick={handleClick} className={`flex items-center justify-center mx-auto ${Style(theme)}`}>
      {wait && <LoaderIcon width={22} height={22} stroke="white" className="icon" />}
      {children}
    </button>
  )
}

export default Button
