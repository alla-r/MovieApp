import { mount } from 'enzyme';
import Loader from '../Loader';
import { wrapperWithTheme } from '../../../global/helpers';

describe('<Loader />', () => {
  const component = () => wrapperWithTheme(mount, <Loader />);

  it('should be defined', () => {
    const wrapper = component();

    expect(wrapper).toBeDefined();
  });

  it('should be rendered', () => {
    const wrapper = component();

    expect(wrapper.find('.loader-container')).toBeTruthy();
    expect(wrapper.find('.loader-container')).not.toBeFalsy();
  });
});

