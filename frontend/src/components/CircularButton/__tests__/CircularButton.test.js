import { shallow } from 'enzyme';
import CircularButton from '../CircularButton';
import HeartIcon from '../../../global/images/heart-icon.svg';

describe('<CircularButton />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      onClickHandler: jest.fn(),
      isActive: false,
      iconSrc: HeartIcon
    }
  });
  
  it('should be defined', () => {
    const wrapper = shallow(<CircularButton {...defaultProps} />)

    expect(wrapper).toBeDefined();
  });

  it('should have active class', () => {
    defaultProps.isActive = true;
    const wrapper = shallow(<CircularButton {...defaultProps} />)

    expect(wrapper.find('.active')).toBeTruthy();
  });
});

