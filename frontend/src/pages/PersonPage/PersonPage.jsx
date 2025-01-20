import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectors, actions } from './slice';
import Loader from '../../components/Loader';
import LeftSide from './components/LeftSide';
import KnownForSection from './components/KnownForSection';
import PersonCreditsSection from './components/PersonCreditsSection';
import withLayout from '../../utils/hoc/Layout';
import { Container, Name } from './styles';
import './PersonPage.scss';

function PersonPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { i18n } = useTranslation();

  const detailsLoading = useSelector(selectors.detailsLoading);
  const detailsData = useSelector(selectors.detailsData);
  const detailsError = useSelector(selectors.detailsError);

  useEffect(() => {
    dispatch(actions.getPersonDetails(params.id));

    return () => dispatch(actions.personDetailsClearData());
  }, [params, i18n.language]);

  const getKnownForItems = (allMedia = []) => {
    const popular = allMedia.slice().sort((a, b) => b.voteCount - a.voteCount);

    return popular.slice(0, 10);
  };

  const navigateToDetails = (type, id) => navigate(`/${type}/${id}`);

  return (
    <div className="person-page container">
      {detailsLoading && <Loader />}
      {detailsError && <div>Couldn&apos;t fetch person&apos;s details</div>}
      {detailsData && (
        <Container>
          <LeftSide data={detailsData} />
          <div className="right-side">
            <Name>{detailsData.name}</Name>
            {detailsData.biography && (
              <div>
                <div className="person-page--title">Biography</div>
                <div className="biography">{detailsData.biography}</div>
              </div>
            )}
            <KnownForSection
              data={
                detailsData.knownFor === 'Acting'
                  ? getKnownForItems(detailsData.credits.cast)
                  : getKnownForItems(detailsData.credits.crew)
              }
              onItemClick={navigateToDetails}
            />
            <PersonCreditsSection data={detailsData.credits} onItemClick={navigateToDetails} />
          </div>
        </Container>
      )}
    </div>
  );
}

export default withLayout(PersonPage);
