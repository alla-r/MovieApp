import InstaIcon from '../../global/images/instagram-icon.svg';
import FacebookIcon from '../../global/images/facebook-icon.svg';
import TwitterIcon from '../../global/images/twitter-icon.svg';
import i18next from '../../utils/i18n';

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
    title: i18next.t('knownFor'),
    id: 'knownFor',
  },
  {
    title: i18next.t('birthday'),
    id: 'birthday',
  },
  {
    title: i18next.t('placeOfBirth'),
    id: 'placeOfBirth',
  },
];

export const JOBS_CONFIG = [
  {
    id: 'directing',
    title: i18next.t('directing'),
    jobNames: ['Director'],
  },
  {
    id: 'production',
    title: i18next.t('production'),
    jobNames: ['Executive Producer', 'Producer', 'Production Manager'],
  },
  {
    id: 'writing',
    title: i18next.t('writing'),
    jobNames: ['Writer'],
  },
  {
    id: 'creator',
    title: i18next.t('creator'),
    jobNames: ['Creator'],
  },
];
