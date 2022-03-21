import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GenreItem from '../GenreItem';
import { wrapperWithTheme } from '../../../global/helpers';

describe('<GenreItem />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      onClickHandler: jest.fn(),
      isActive: false,
      genre: "Test"
    }
  });

  const component = (props) => wrapperWithTheme(shallow, <GenreItem {...props} />);

  it('should be defined', () => {
    const wrapper = component(defaultProps);

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot', () => {
    const wrapper = component(defaultProps);
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should have active class', () => {
    defaultProps.isActive = true;
    const wrapper = shallow(<GenreItem {...defaultProps} />);

    expect(wrapper.find('.active')).toBeTruthy();
    expect(wrapper.find('.active')).not.toBeFalsy();
  });
});

