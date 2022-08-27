import React from 'react';
import PropTypes from 'prop-types';
import { ItemContainer, MediaImage, Title, CloseButton, ChangeRateButton } from './styles';
import { getFormattedDate } from '../../../global/helpers';
import StarIcon from '../../../global/images/star-icon.svg';

const ListItem = ({ details, listName, changeRateCB, removeFromListCB, navigateToDetailsCB }) => {
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
                Change rate
              </ChangeRateButton>
            </div>
          )}
        </div>
        <div>
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              removeFromListCB();
            }}
          />
        </div>
      </div>
    </ItemContainer>
  );
};

ListItem.propTypes = {
  details: PropTypes.shape({
    type: PropTypes.string,
    poster: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    date: PropTypes.string,
    firstAirDate: PropTypes.string,
    id: PropTypes.number.isRequired,
    rate: PropTypes.number,
  }).isRequired,
  listName: PropTypes.string.isRequired,
  changeRateCB: PropTypes.func.isRequired,
  removeFromListCB: PropTypes.func.isRequired,
  navigateToDetailsCB: PropTypes.func.isRequired,
};

export default ListItem;
