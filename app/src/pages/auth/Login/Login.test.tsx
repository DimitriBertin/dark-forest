import { shallow } from 'enzyme'
import Login from '.'

describe('Login', () => {
  it('should render Login page with minimum props', () => {
    const component = shallow(<Login />)

    expect(component).toMatchSnapshot()
  });
});