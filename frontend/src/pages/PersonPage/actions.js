import * as constants from './constants';
import { getFormattedPersonDetails, getFormattedSocialMedia } from '../../global/helpers';
import TMDBservice from '../../TMDBservice';

export const getPersonDetailsSuccess = (data) => ({
  type: constants.GET_PERSON_DETAILS_SUCCESS,
  payload: data,
});

export const getPersonDetailsError = (error) => ({
  type: constants.GET_PERSON_DETAILS_ERROR,
  payload: error,
});

export const getPersonDetailsRequest = () => ({
  type: constants.GET_PERSON_DETAILS_REQUEST,
});

export const getPersonDetails = (id) => async (dispatch) => {
  dispatch(getPersonDetailsRequest());
  try {
    const response = await TMDBservice.getPersonDetails(id);
    const formattedData = getFormattedPersonDetails(response.data);
    const socialMediaResponse = await TMDBservice.getPersonExternalIds(id);
    formattedData.socialMedia = getFormattedSocialMedia(socialMediaResponse.data);

    dispatch(getPersonDetailsSuccess(formattedData));
  } catch (error) {
    dispatch(getPersonDetailsError(error));
  }
};
