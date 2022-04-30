import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import * as constants from './constants';
import * as actions from './actions';
import { selectors } from './reducer';
import withLayout from '../../global/hoc/Layout';
import Heading from '../../components/Heading';
import { Container, ListItem } from './styles';

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useParams();

  const listLoading = useSelector(selectors.listLoading);
  const listData = useSelector(selectors.listData);
  const listError = useSelector(selectors.listError);

  console.log(listLoading, listData, listError)
  
  console.log(list);

  useEffect(() => {
    dispatch(actions.getListData(list));

    // return () => dispatch(actions.clearFilteredMedia());
  }, [list]);

  const items = listData?.map(({ type, id }) => {
    const test = "a";
    return <ListItem 
    key={id} 
    onClick={() => navigate(`/${type}/${id}`)}>
      {type}
    </ListItem>
  })

  return (
    <Container className="listpage container">
      <Heading content={constants.HEADINGS[list]} />
      {items}
    </Container>
  );
};

export default withLayout(ListPage);
