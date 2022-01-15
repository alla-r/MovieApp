import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentContainer from '../../components/ContentContainer';
import Heading from '../../components/Heading';
import * as actions from './actions';
import * as constants from './constants';
import { selectors } from './reducer';

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const dispatch = useDispatch();
  const trendingsLoading = useSelector(selectors.trendingsLoading);
  const trendingsData = useSelector(selectors.trendingsData);
  const trendingsError = useSelector(selectors.trendingsError);
  const isNextPageAvailable = useSelector(selectors.trendingsIsNextPageAvailable);

  useEffect(() => {
    dispatch(actions.getTrendingsMedia(pageNumber));
  }, []);

  return (
    <div className="homepage">
      <Header
        headerItems={constants.HEADER_ITEMS}
        profileDropdownData={constants.PROFILE_DROPDOWN_DATA}
      />
      <Heading content={constants.trendingsHeading} />
      <ContentContainer
        data={trendingsData}
        loading={trendingsLoading}
        error={{
          status: !!trendingsError,
          message: constants.errorMessage,
        }}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
