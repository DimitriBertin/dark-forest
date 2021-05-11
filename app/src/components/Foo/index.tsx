import { useEffect, useState } from 'react'
import { FooProps } from './Type'
import Style from './Style'

function Foo({ children, title, index, labelButton, callback }: FooProps): JSX.Element {
  const [isLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className={Style}>
      <h2>
        {index}. {title}
      </h2>
      {children}
      {labelButton && isLoaded && (
        <button type="button" onClick={callback}>
          {labelButton}
        </button>
      )}
    </div>
  )
}

export default Foo
