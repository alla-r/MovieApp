import axios from 'axios'; 
import * as constants from './constants';

export const getTrendingsRequest = (pageNumber) => {
  return async dispatch => {
    console.log(pageNumber);
    try {
      const response = await axios.get(`/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
      dispatch(getTrendingsSuccess(response.data));
      // dispatch({
      //   type: constants.GET_TRENDINGS_REQUEST,
      //   payload: response.data
      // })

    } catch(error) {
      dispatch(getTrendingsError(error));
    }
   
    // console.log(response)
  }
  // return {
  //   type: constants.GET_TRENDINGS_REQUEST,
  // }
};

export const getTrendingsSuccess = (data) => {
  return {
    type: constants.GET_TRENDINGS_SUCCESS,
    payload: data
  }
};

export const getTrendingsError = (error) => {
  return {
    type: constants.GET_TRENDINGS_ERROR,
    payload: error
  }
};