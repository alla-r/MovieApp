import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ItemContainer, CloseButton } from './styles';
import { getFormattedDate } from '../../../global/helpers';


const ListItem = ({details}) => {
  const navigate = useNavigate();
  const navigateToDetails = () => navigate(`/${details.type}/${details.id}`);

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
            console.log('close');
            console.log(details.id);
            }} />
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
};

export default ListItem;
