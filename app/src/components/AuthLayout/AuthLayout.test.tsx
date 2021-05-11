import { shallow } from 'enzyme'
import AuthLayout from '.'

describe('Layout is loaded', () => {
  it('should render Layout with minimum props', () => {
    const component = shallow(<AuthLayout />)

    expect(component).toMatchSnapshot()
  });
});