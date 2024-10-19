import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ItemContainer, MediaImage, Title, CloseButton, ChangeRateButton } from './styles';
import { getFormattedDate } from '../../../../utils/helpers';
import StarIcon from '../../../../global/images/star-icon.svg';

function ListItem({
  details,
  listName,
  changeRateCB = () => {},
  removeFromListCB = () => {},
  navigateToDetailsCB = () => {},
}) {
  const { t } = useTranslation();
  const maxOverviewCharacters = 240;
  const overview =
    details.overview.length > maxOverviewCharacters
      ? `${details.overview.slice(0, maxOverviewCharacters)}...`
      : details.overview;

  return (
    <ItemContainer>
      <MediaImage src={details.poster} alt="poster" onClick={navigateToDetailsCB} />

      <div className="content--container">
        <div className="content">
          <div>
            <Title onClick={navigateToDetailsCB}>{details.title}</Title>
            <p className="date">{getFormattedDate(details.date || details.firstAirDate)}</p>
            <p className="description">{overview}</p>
          </div>
          {listName === 'rate' && (
            <div className="rate--wrapper">
              <div>{details.rate}</div>
              <img src={StarIcon} className="star--icon" alt="star-icon" />
              <ChangeRateButton
                className="change-rate--btn"
                onClick={(e) => changeRateCB(e, details)}
              >
                {t('changeYourRating')}
              </ChangeRateButton>
            </div>
          )}
        </div>
        <div>
          {removeFromListCB && (
            <CloseButton
              onClick={(e) => {
                e.stopPropagation();
                removeFromListCB();
              }}
            />
          )}
        </div>
      </div>
    </ItemContainer>
  );
}

ListItem.propTypes = {
  details: PropTypes.shape({
    type: PropTypes.string,
    poster: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    date: PropTypes.string,
    firstAirDate: PropTypes.string,
    id: PropTypes.string.isRequired,
    rate: PropTypes.number,
  }).isRequired,
  listName: PropTypes.string.isRequired,
  changeRateCB: PropTypes.func,
  removeFromListCB: PropTypes.func,
  navigateToDetailsCB: PropTypes.func.isRequired,
};

export default ListItem;
