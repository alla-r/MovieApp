import reducer, { selectors } from '../reducer';
import * as actions from '../actions';

describe('HomePage reducer', () => {
  let mockState;
  let response;

  beforeEach(() => {
    mockState = {
      isNextPageAvailable: false,
      loading: false,
      data: [],
      error: null,
    };
  });

  it('should return initial state if action type is undefined', () => {
    expect(reducer(undefined, {})).toEqual(mockState);
  });

  it('should handle TRENDINGS_CLEAR_DATA', () => {
    response = reducer(mockState, actions.trendingsClearData());

    expect(response).toEqual(mockState);
  });

  it('should handle GET_TRENDINGS_REQUEST', () => {
    const expectedResult = {
      ...mockState,
      loading: true,
      isNextPageAvailable: false,
    };

    response = reducer(mockState, actions.getTrendingsRequest());

    expect(response).toEqual(expectedResult);
  });

  it('should handle GET_TRENDINGS_SUCCESS', () => {
    const mockedSuccessData = {
      results: [{ title: 'test' }],
      page: 1,
      totalPages: 10,
    };
    const expectedResult = {
      ...mockState,
      loading: false,
      data: [{ title: 'test' }],
      isNextPageAvailable: true,
    };

    response = reducer(mockState, actions.getTrendingsSuccess(mockedSuccessData));

    expect(response).toEqual(expectedResult);
  });

  it('should handle GET_TRENDINGS_ERROR', () => {
    const mockedErrorData = {
      message: 'test error',
    };
    const expectedResult = {
      ...mockState,
      loading: false,
      error: 'test error',
    };

    response = reducer(mockState, actions.getTrendingsError(mockedErrorData));

    expect(response).toEqual(expectedResult);
  });
});

describe('HomePage selectors', () => {
  let mockState, store;

  mockState = {
    isNextPageAvailable: true,
    loading: false,
    data: [],
    error: null,
  };

  store = {
    homePageReducer: mockState,
  };

  it('selectors work', () => {
    expect(selectors.trendingsLoading(store)).toEqual(mockState.loading);
    expect(selectors.trendingsData(store)).toEqual(mockState.data);
    expect(selectors.trendingsError(store)).toEqual(mockState.error);
    expect(selectors.trendingsIsNextPageAvailable(store)).toEqual(mockState.isNextPageAvailable);
  });
});
