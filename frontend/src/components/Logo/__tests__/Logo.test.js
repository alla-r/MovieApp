import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Logo from '../Logo';
import { wrapperWithTheme } from '../../../global/helpers';

describe('<Logo />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      onClickHandler: jest.fn(),
      size: 24
    }
  });

  const component = (props) => wrapperWithTheme(shallow, <Logo {...props} />);

  it('should be defined', () => {
    const wrapper = component(defaultProps);

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = component(defaultProps);
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

