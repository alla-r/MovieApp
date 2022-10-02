import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import * as actions from './actions';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import NavigationPanel from './components/NavigationPanel';
import ListItem from '../ListPage/components/ListItem';
import PersonItem from '../../components/PersonItem';
import Loader from '../../components/Loader';
import { Container } from './styles';

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const pageNumber = searchParams.get('page') || 1;
  const type = searchParams.get('type') || 'movie';

  const searchLoading = useSelector(selectors.searchLoading);
  const searchData = useSelector(selectors.searchData);
  const searchError = useSelector(selectors.searchError);

  console.log(searchLoading, searchData, searchError);

  const navClickHandler = (mediaType) => {
    setSearchParams({
      type: mediaType,
      page: 1,
      query,
    });
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
    dispatch(actions.getSearchData(query, type, pageNumber));
    console.log(query);

    // return () => dispatch(actions.clearFilteredMedia());
  }, [query, pageNumber]);

  const handleChange = (e, value) =>
    setSearchParams({
      type,
      page: value,
      query,
    });

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
      <div className="search-items--container">
        {searchLoading && <Loader />}
        {!searchLoading && searchData?.person && type === 'person' && (
          <div>{createPersonList(searchData?.person?.results)}</div>
        )}
        {!searchLoading && searchData?.movie && type === 'movie' && (
          <div>{createMediaList(searchData?.movie?.results)}</div>
        )}
        {!searchLoading && searchData?.tv && type === 'tv' && (
          <div>{createMediaList(searchData?.tv?.results)}</div>
        )}
        {!searchLoading && searchData?.[type] && (
          <div className="pagination--wrapper">
            <Pagination
              count={searchData[type].totalPages}
              size="small"
              page={Number(pageNumber)}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </Container>
  );
};

export default withLayout(SearchPage);
