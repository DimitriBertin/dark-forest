import { shallow } from 'enzyme'
import ForgotPassword from '.'

describe('ForgotPassword', () => {
  it('should render Login page with minimum props', () => {
    const component = shallow(<ForgotPassword />)

    expect(component).toMatchSnapshot()
  });
});