import configureStore from 'redux-mock-store';
import * as actions from '../actions';
import * as constants from '../constants';

const mockStore = configureStore();
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