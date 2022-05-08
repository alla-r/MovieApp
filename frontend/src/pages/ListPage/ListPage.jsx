import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import * as constants from './constants';
import * as actions from './actions';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import Heading from '../../components/Heading';
import { Container, ListItem } from './styles';
import { getFormattedDate } from '../../global/helpers';
import CloseIcon from '../../global/images/close-icon.svg';

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useParams();

  const listLoading = useSelector(selectors.listLoading);
  const listData = useSelector(selectors.listData);
  const listError = useSelector(selectors.listError);

  console.log(listLoading, listData, listError);

  useEffect(() => {
    dispatch(actions.getListData(list));

    // return () => dispatch(actions.clearFilteredMedia());
  }, [list]);

  const items = listData?.map(({ type, id, details }) => {
    const navigateToDetails = () => navigate(`/${type}/${id}`);

    return (
      <ListItem key={id} onClick={navigateToDetails}>
        <div onClick={navigateToDetails}>
          <img src={details.poster} alt="poster" className="poster" />
        </div>

        <div className="content-container">
          <div className="content">
            <h6 className="title">{details.title}</h6>
            <p className="date">{getFormattedDate(details.date || details.firstAirDate)}</p>
            <p className="description">{details.overview}</p>
          </div>
          <img
            src={CloseIcon}
            alt="close-icon"
            className="close-icon"
            onClick={() => {
              console.log('close');
            }}
          />
        </div>
      </ListItem>
    );
  });

  return (
    <Container className="listpage container">
      <Heading content={constants.HEADINGS[list]} />
      {items}
    </Container>
  );
};

export default withLayout(ListPage);
