import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ItemContainer, CloseButton } from './styles';
import { getFormattedDate } from '../../../global/helpers';
import * as actions from '../actions';

const ListItem = ({ details, listName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateToDetails = () => navigate(`/${details.type}/${details.id}`);
  const removeFromList = () =>
    dispatch(
      actions.removeItemFromList({
        listName,
        mediaInfo: {
          id: details.id,
          type: details.type,
          details,
        },
        action: 'remove',
      }),
    );

  return (
    <ItemContainer onClick={navigateToDetails}>
      <img src={details.poster} alt="poster" className="poster" />

      <div className="content-container">
        <div className="content">
          <h6 className="title">{details.title}</h6>
          <p className="date">{getFormattedDate(details.date || details.firstAirDate)}</p>
          <p className="description">{details.overview}</p>
        </div>
        <div>
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              removeFromList();
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
  }).isRequired,
  listName: PropTypes.string.isRequired,
};

export default ListItem;
