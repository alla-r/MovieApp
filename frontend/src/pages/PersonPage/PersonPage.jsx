import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import { selectors } from './reducer';
import { SOCIAL_MEDIA_BUTTONS_CONFIG } from './constants';
import Loader from '../../components/Loader';
import SocialMediaButton from '../../components/SocialMediaButton';
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
  }, [params]);

  const buttons = SOCIAL_MEDIA_BUTTONS_CONFIG.map(
    // TODO: onClick
    ({ id, iconSrc, tooltipMessage, onClickHandler}) => (
      <SocialMediaButton
        key={id}
        iconSrc={iconSrc}
        onClickHandler={() => console.log('open link')}
        tooltipMessage={tooltipMessage}
      />
    ),
  );

  return (
    <div className="person--page container">
      {detailsLoading && <Loader />}
      {detailsData && (
        <div>
          <img src={detailsData.poster} alt="poster" className='poster' />
          <div>
            {buttons}
          </div>
        </div>
      )}
    </div>
  );
};

export default withLayout(PersonPage);
