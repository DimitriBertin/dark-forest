import Colors from '../../core/Colors'
import { LoaderIcon } from '../Icons'
import { Logo } from './..'

function Intro(): JSX.Element {
  return (
    <div className={`intro h-full flex-col flex justify-center items-center`}>
      <Logo />
      <LoaderIcon width={40} height={40} stroke={Colors.secondary} />
    </div>
  )
}

export default Intro
