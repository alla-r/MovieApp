import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../actions';
import * as constants from '../constants';
import TMDBservice from '../../../TMDBservice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('HomePage actions', () => {
  let expectedAction;

  beforeEach(() => {
    store.clearActions();
  });

  it('getTrendingsSuccess should dispatch the correct action and payload', () => {
    expectedAction = {
      type: constants.GET_TRENDINGS_SUCCESS,
      payload: "test",
    }

    store.dispatch(actions.getTrendingsSuccess("test"));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('getTrendingsError should dispatch the correct action and payload', () => {
    expectedAction = {
      type: constants.GET_TRENDINGS_ERROR,
      payload: "error test",
    };

    store.dispatch(actions.getTrendingsError("error test"));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('getTrendingsRequest should dispatch the correct action and payload', () => {
    expectedAction = {
      type: constants.GET_TRENDINGS_REQUEST,
    };

    store.dispatch(actions.getTrendingsRequest());
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('trendingsClearData should dispatch the correct action and payload', () => {
    expectedAction = {
      type: constants.TRENDINGS_CLEAR_DATA,
    };

    store.dispatch(actions.trendingsClearData());
    expect(store.getActions()).toEqual([expectedAction]);
  });
});

describe('getTrendingsMedia thunk', () => {
  let expectedAction;
  const getTrendingsMock = jest.spyOn(TMDBservice, "getTrendings");
  const mockDispatch = jest.fn();

  beforeEach(() => {
    store.clearActions();
  });

  it ('should dispatch getTrendingsRequest', async () => {
    expectedAction = {
      type: constants.GET_TRENDINGS_REQUEST,
    };

    store.dispatch(actions.getTrendingsMedia());

    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should dispatch correct actions on success', async () => {
    const mockedResponseData = {
      data: {
        page: 1,
        total_pages: 2,
        results: [{
          id: 1,
        }]
      }
    }
    const mockFormattedData = {
      page: 1,
      totalPages: 2,
      results: [
        {
          id: 1,
          type: undefined,
          date: "",
          description: undefined,
          poster: "https://image.tmdb.org/t/p/originalundefined",
          title: "",
          voteAvg: 0
        }
      ]
    }

    getTrendingsMock.mockImplementationOnce(() => new Promise((resolve, reject) => resolve(mockedResponseData)));
    await actions.getTrendingsMedia(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(actions.getTrendingsSuccess(mockFormattedData));
  });

  it('should dispatch correct actions on error', async () => {
    getTrendingsMock.mockImplementationOnce(() => new Promise((resolve, reject) => reject("error")));
    await actions.getTrendingsMedia(1)(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(actions.getTrendingsError("error"));  
  });
})