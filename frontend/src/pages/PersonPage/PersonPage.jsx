import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { selectors } from './reducer';
import Loader from '../../components/Loader';
import withLayout from '../../global/hoc/Layout';

const PersonPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const detailsLoading = useSelector(selectors.detailsLoading);
  const detailsData = useSelector(selectors.detailsData);
  const detailsError = useSelector(selectors.detailsError);

  console.log(detailsLoading, detailsData, detailsError);

  useEffect(() => {
    dispatch(actions.getPersonDetails(params.id));
  }, [params]);

  return (
    <div className="personPage">
      {detailsLoading && <Loader />}
      Person page
    </div>
  );
};

export default withLayout(PersonPage);
