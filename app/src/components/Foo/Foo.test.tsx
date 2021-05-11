import { shallow } from 'enzyme'
import Foo from './'

describe('Foo', () => {
  it('should render Foo with minimum props', () => {
    const component = shallow(<Foo title="Foo test" index={0}>Foo children - How we learn react.</Foo>)

    expect(component).toMatchSnapshot()
  });
});