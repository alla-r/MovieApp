import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import CircleProgressBar from '../CircleProgressBar';

describe('<CircleProgressBar />', () => {
  it('should be defined', () => {
    const wrapper = mount(<CircleProgressBar voteAvg={5} percentage={52} />)

    expect(wrapper).toBeDefined();
  });

  it('should match snapshot with float number', () => {
    const wrapper = mount(<CircleProgressBar voteAvg={5.2} percentage={52} />)
    const tree = renderer.create(wrapper).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

