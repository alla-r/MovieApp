import InstaIcon from '../../global/images/instagram-icon.svg';
import FacebookIcon from '../../global/images/facebook-icon.svg';
import TwitterIcon from '../../global/images/twitter-icon.svg';

export const GET_PERSON_DETAILS_REQUEST = 'GET_PERSON_DETAILS_REQUEST';
export const GET_PERSON_DETAILS_SUCCESS = 'GET_PERSON_DETAILS_SUCCESS';
export const GET_PERSON_DETAILS_ERROR = 'GET_PERSON_DETAILS_ERROR';
export const GET_PERSON_DETAILS = 'GET_PERSON_DETAILS';

export const SOCIAL_MEDIA_BUTTONS_CONFIG = [
  {
    iconSrc: InstaIcon,
    id: 'instagram',
    tooltipMessage: 'Visit Instagram',
    url: 'https://instagram.com/',
  },
  {
    iconSrc: FacebookIcon,
    id: 'facebook',
    tooltipMessage: 'Visit Facebook',
    url: 'https://www.facebook.com/',
  },
  {
    iconSrc: TwitterIcon,
    id: 'twitter',
    tooltipMessage: 'Visit Twitter',
    url: 'https://twitter.com/',
  },
];

export const PERSONAL_DETAILS_MAPPING = [
  {
    title: 'Known For',
    id: 'knownFor',
  },
  {
    title: 'Birthday',
    id: 'birthday',
  },
  {
    title: 'Place of Birth',
    id: 'placeOfBirth',
  },
];
