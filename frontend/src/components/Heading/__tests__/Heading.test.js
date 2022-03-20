import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Heading from "../Heading";
import theme from '../../../theme';
import { wrapperWithTheme } from '../../../global/helpers';

describe('<Heading />', () => {
  const component = () => wrapperWithTheme(shallow, <Heading content="test" />);

  it('should be defined', () => {
    const wrapper = component();

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = component();
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children[0]).toHaveStyleRule('background-color', theme.colors.primary);
    expect(tree.children[1]).toHaveStyleRule('color', theme.colors.dark);
  });
});

