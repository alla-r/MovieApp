import { mount } from 'enzyme';
import * as ReactRouterDom from 'react-router-dom';
import ContentContainer from '../ContentContainer';
import Loader from '../../Loader';
import { Error } from '../styles';
import Button from '../../Button';
import MovieCard from '../../MovieCard';
import { wrapperWithTheme } from '../../../global/helpers';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('<ContentContainer />', () => {
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      loading: false, 
      data: [
        {
          id: 1,
          voteAvg: 6.6,
          title: "test",
          date: '1995-12-17',
          poster: 'test',
          type: 'movie'
        },
        {
          id: 2,
          voteAvg: 6.6,
          title: "test2",
          date: '1995-12-17',
          poster: 'test',
          type: 'movie'
        }
      ], 
      error: {
        status: false,
        message: "error test"
      }, 
      paginationBtn: {
        status: false,
        text: "test btn",
        onClickHandler: jest.fn()
      }, 
      heading: "test"
    }
  });

  const component = (props) => wrapperWithTheme(mount,
    <ReactRouterDom.BrowserRouter>
      <ContentContainer {...props} />
    </ReactRouterDom.BrowserRouter>
  );

  it('should be defined', () => {
    const wrapper = component(defaultProps);

    expect(wrapper).toBeDefined();
  });

  it('should render items', () => {
    const wrapper = component(defaultProps);

    expect(wrapper.find('.items-container')).toHaveLength(2);
  });

  it('should show message in case Nothing was found', () => {
    defaultProps.data = [];
    const wrapper = component(defaultProps);

    expect(wrapper.find('.not-found')).toHaveLength(1);
  });

  it('should show loader', () => {
    defaultProps.loading = true;
    const wrapper = component(defaultProps);

    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it('should show error message', () => {
    defaultProps.error = {
      status: true,
      message: "Test"
    };
    const wrapper = component(defaultProps);

    expect(wrapper.find(Error)).toHaveLength(1);
  });

  it('should show pagination button', () => {
    defaultProps.paginationBtn = {
      status: true,
      message: "Show more",
      onClickHandler: jest.fn()
    };
    const wrapper = component(defaultProps);

    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('should call navigate after click on MovieCard', () => {
    jest.spyOn(ReactRouterDom, 'useNavigate').mockReturnValue(jest.fn(() => jest.fn));
    const wrapper = component(defaultProps);

    wrapper.find(MovieCard).at(0).props().onClickHandler();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/movie/1");
  });
});

