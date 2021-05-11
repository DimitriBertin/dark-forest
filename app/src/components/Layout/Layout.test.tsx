import { shallow } from 'enzyme'
import Layout from '.'

describe('Layout is loaded', () => {
  it('should render Layout with minimum props', () => {
    const component = shallow(<Layout />)

    expect(component).toMatchSnapshot()
  });
});