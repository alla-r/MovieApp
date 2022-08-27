import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as constants from './constants';
import * as actions from './actions';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import Heading from '../../components/Heading';
import { Container } from './styles';

const SearchPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  const searchLoading = useSelector(selectors.searchLoading);
  const searchData = useSelector(selectors.searchData);
  const searchError = useSelector(selectors.searchError);

  console.log(searchLoading, searchData, searchError);

  useEffect(() => {
    // dispatch(actions.getSearchData(query));
    console.log(query);

    // return () => dispatch(actions.clearFilteredMedia());
  }, [query]);

  
  return (
    <Container className="searchPage container">
      <Heading content="search" />
    </Container>
  );
};

export default withLayout(SearchPage);
