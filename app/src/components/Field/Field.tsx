import { shallow } from 'enzyme'
import Field from '.'
/**
 * Some test
 * - Email testing
 * - Required testing
 * - Phone testing
 * - Number testing
 */

describe('Field', () => {
  it('should render Field with minimum props', () => {
    const component = shallow(<Field type='text' value='' label='Votre email' id='input-email' name='email' handleChange={(value) => console.log(value)} />)

    expect(component).toMatchSnapshot()
  });
});