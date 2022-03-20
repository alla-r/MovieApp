import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Footer from '../Footer';
import theme from '../../../theme';
import { wrapperWithTheme } from '../../../global/helpers';

describe('<Footer />', () => {
  const component = () => wrapperWithTheme(shallow, <Footer />);
  
  it('should be defined', () => {
    const wrapper = component();

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = component();
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
