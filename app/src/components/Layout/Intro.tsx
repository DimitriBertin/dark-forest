// import { IntroProps } from './Type'
import Colors from '../../core/Colors'
import { LoaderIcon } from '../Icons'

function Intro(): JSX.Element {
  return (
    <div className={`intro h-full flex-col flex justify-center items-center`}>
      <p>DarkForest | votre gestionnaire de factures</p>
      <LoaderIcon width={40} height={40} stroke={Colors.secondary} />
    </div>
  )
}

export default Intro
