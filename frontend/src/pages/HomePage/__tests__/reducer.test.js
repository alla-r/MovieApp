import reducer, { selectors } from '../reducer';
import * as constants from '../constants';

describe('HomePage reducer', () => {
  let mockState;
  let action;

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

  it('should handle GET_TRENDINGS_MEDIA', () => {
    action = {
      type: constants.GET_TRENDINGS_MEDIA
    }
    expect(reducer(mockState, action)).toEqual(mockState);
  });

  it('should handle GET_TRENDINGS_REQUEST', () => {
    action = {
      type: constants.GET_TRENDINGS_REQUEST
    }
    
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      loading: true,
    });
  });

  it('should handle GET_TRENDINGS_SUCCESS', () => {
    action = {
      type: constants.GET_TRENDINGS_SUCCESS,
      payload: {
        page: 1,
        totalPages: 10,
        results: [{
          id: 1,
          data: "test",
        }]
      }
    }
    
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      isNextPageAvailable: true,
      data: [{
        id: 1,
        data: "test"
      }],
      error: null,
      loading: false,
    });
  });

  it('should handle GET_TRENDINGS_ERROR', () => {
    action = {
      type: constants.GET_TRENDINGS_ERROR,
      payload: {
        message: "Error"
      }
    }
    
    expect(reducer(mockState, action)).toEqual({
      ...mockState,
      error: "Error",
      loading: false,
    });
  });

  it('should handle TRENDINGS_CLEAR_DATA', () => {
    action = {
      type: constants.TRENDINGS_CLEAR_DATA
    }
    
    expect(reducer(mockState, action)).toEqual(mockState);
  });
});

describe('HomePage selectors', () => {
  let mockState, store;

  mockState = {
    loading: true,
    data: "test",
    error: "Error",
    isNextPageAvailable: false,
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
