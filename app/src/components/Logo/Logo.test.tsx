import { shallow } from 'enzyme'
import Logo from '.'

describe('Logo', () => {
  it('should render Logo with minimum props', () => {
    const component = shallow(<Logo />)

    expect(component).toMatchSnapshot()
  });
});