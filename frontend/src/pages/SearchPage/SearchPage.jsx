import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as constants from './constants';
import * as actions from './actions';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import NavigationPanel from './components/NavigationPanel';
import ListItem from '../ListPage/components/ListItem';
import PersonItem from '../../components/PersonItem';
import { Container } from './styles';

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentMediaType, setCurrentMediaType] = useState('movie');
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const searchLoading = useSelector(selectors.searchLoading);
  const searchData = useSelector(selectors.searchData);
  const searchError = useSelector(selectors.searchError);

  console.log(searchLoading, searchData, searchError);

  const navClickHandler = (mediaType) => {
    console.log(mediaType, pageNumber);
    setCurrentMediaType(mediaType);
    setPageNumber(1);
  };

  const navConfig = [
    {
      id: 'movie',
      text: 'Movies',
      amount: searchData?.movie?.totalResults || 0,
      onClickHandler: () => navClickHandler('movie'),
    },
    {
      id: 'tv',
      text: 'TV Shows',
      amount: searchData?.tv?.totalResults || 0,
      onClickHandler: () => navClickHandler('tv'),
    },
    {
      id: 'person',
      text: 'People',
      amount: searchData?.person?.totalResults || 0,
      onClickHandler: () => navClickHandler('person'),
    },
  ];

  useEffect(() => {
    dispatch(actions.getSearchData(query, currentMediaType, pageNumber));
    console.log(query);

    // return () => dispatch(actions.clearFilteredMedia());
  }, [query]);

  const createMediaList = (data) =>
    data.map((details) => {
      const navigateToDetailsCB = () => navigate(`/${details.type}/${details.id}`);

      return (
        <ListItem
          key={details.id}
          details={details}
          listName="search"
          navigateToDetailsCB={navigateToDetailsCB}
        />
      );
    });

  const createPersonList = (data) =>
    data.map((item) => {
      const onPersonClickHandler = () => console.log(`${item.id}`);

      return (
        <PersonItem
          size="small"
          key={item.id}
          data={item}
          onClickHandler={() => onPersonClickHandler(item.id)}
        />
      );
    });

  return (
    <Container className="searchPage container">
      <NavigationPanel navConfig={navConfig} />
      {searchData?.person?.result && currentMediaType === 'person' && (
        <div className="search-items--container">
          {createPersonList(searchData?.person?.result)}
        </div>
      )}
      {searchData?.movie?.result && currentMediaType === 'movie' && (
        <div className="search-items--container">{createMediaList(searchData?.movie?.result)}</div>
      )}
      {searchData?.tv?.result && currentMediaType === 'tv' && (
        <div className="search-items--container">{createMediaList(searchData?.tv?.result)}</div>
      )}
    </Container>
  );
};

export default withLayout(SearchPage);
