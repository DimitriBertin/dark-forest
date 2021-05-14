import { shallow } from 'enzyme'
import { MouseEvent } from 'react'
import Button from '.'


describe('Button', () => {
  it('should render Field with minimum props', () => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      console.log('Click')
    }

    const component = shallow(<Button type="button" handleClick={handleClick} ><span>Bouton</span></Button>)

    expect(component).toMatchSnapshot()
  });
});