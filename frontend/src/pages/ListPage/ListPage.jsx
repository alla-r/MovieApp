import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as constants from './constants';
import * as actions from './actions';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import Heading from '../../components/Heading';
import ListItem from './ListItem';
import { Container, Info } from './styles';

const ListPage = () => {
  const dispatch = useDispatch();
  const { list } = useParams();

  const listLoading = useSelector(selectors.listLoading);
  const listData = useSelector(selectors.listData);
  const listError = useSelector(selectors.listError);

  console.log(listLoading, listData, listError);

  useEffect(() => {
    dispatch(actions.getListData(list));

    // return () => dispatch(actions.clearFilteredMedia());
  }, [list]);

  const items = listData?.map(({ id, details }) => (
    <ListItem key={id} details={details} listName={list} />
  ));

  return (
    <Container className="listpage container">
      <Heading content={constants.HEADINGS[list]} />
      {listData.length > 0 && <div>{items}</div>}
      {listData.length === 0 && <Info>{constants.HEADINGS[list]} list is empty</Info>}
    </Container>
  );
};

export default withLayout(ListPage);
