import * as reactRedux from 'react-redux';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "../HomePage";
import { wrapperWithTheme } from "../../../global/helpers"

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => jest.fn().mockImplementation(),
}));

describe("<HomePage />", () => {
  const mountPage = () => {
    return wrapperWithTheme(mount, 
      <Router>
        <HomePage />
      </Router>,
    );
  };
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('should be defined', () => {
    expect(<HomePage />).toBeDefined();
  });

  it('should render loader', () => {
    const mockedDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockedDispatch);
    useSelectorMock.mockReturnValueOnce(true);
    useSelectorMock.mockReturnValueOnce([]);
    useSelectorMock.mockReturnValueOnce(null);
    useSelectorMock.mockReturnValueOnce(false);

    const wrapper = mountPage();
  });
})