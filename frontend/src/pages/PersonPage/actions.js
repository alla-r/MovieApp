import * as constants from './constants';
import {
  getFormattedPersonDetails,
  getFormattedSocialMedia,
  getFormattedRecommendationItem,
} from '../../global/helpers';
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

    const creditsResponse = await TMDBservice.getPersonCredits(id);

    const onlyUnique = (value, index, arr) =>
      arr.findIndex((item) => item.id === value.id && item.media_type === value.media_type) ===
      index;

    formattedData.credits = {
      cast: creditsResponse.data.cast
        .filter(onlyUnique)
        .map((item) => getFormattedRecommendationItem(item, true)),
      crew: creditsResponse.data.crew
        .filter(onlyUnique)
        .map((item) => getFormattedRecommendationItem(item, false)),
    };

    dispatch(getPersonDetailsSuccess(formattedData));
  } catch (error) {
    dispatch(getPersonDetailsError(error));
  }
};
