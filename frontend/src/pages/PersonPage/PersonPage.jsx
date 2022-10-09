import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { selectors } from './reducer';
import Loader from '../../components/Loader';
import LeftSide from './components/LeftSide';
import withLayout from '../../global/hoc/Layout';
import './PersonPage.scss';

const PersonPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const detailsLoading = useSelector(selectors.detailsLoading);
  const detailsData = useSelector(selectors.detailsData);
  const detailsError = useSelector(selectors.detailsError);

  console.log(detailsLoading, detailsData, detailsError);

  useEffect(() => {
    dispatch(actions.getPersonDetails(params.id));

    // TODO: clear data on unmount
  }, [params]);

  return (
    <div className="person--page container">
      {detailsLoading && <Loader />}
      {detailsData && (
        <div>
          <LeftSide data={detailsData} />
        </div>
      )}
    </div>
  );
};

export default withLayout(PersonPage);
