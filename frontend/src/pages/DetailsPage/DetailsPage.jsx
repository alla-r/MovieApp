import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const mediaDetailsLoading = useSelector(selectors.mediaDetailsLoading);
  const mediaDetailsData = useSelector(selectors.mediaDetailsData);

  console.log(mediaDetailsData);

  useEffect(() => {
    dispatch(actions.getMediaDetails(params.type, params.id));
  }, []);

  return (
    <div className="detailsPage">
      <Header
        headerItems={constants.HEADER_ITEMS}
        profileDropdownData={constants.PROFILE_DROPDOWN_DATA}
      />
      {mediaDetailsLoading && <Loader />}
      {mediaDetailsData && <div>Details</div>}

      <Footer />
    </div>
  );
};

export default DetailsPage;
