import { shallow } from 'enzyme'
import Register from '.'

describe('Login', () => {
  it('should render Login page with minimum props', () => {
    const component = shallow(<Register />)

    expect(component).toMatchSnapshot()
  });
});