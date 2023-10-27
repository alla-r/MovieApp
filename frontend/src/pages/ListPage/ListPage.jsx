import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import * as constants from './constants';
import * as actions from './actions';
import { selectors } from './reducer';
import * as initActions from '../InitComponent/actions';
import withLayout from '../../global/hoc/Layout';
import Heading from '../../components/Heading';
import ListItem from './components/ListItem';
import Loader from '../../components/Loader';
import { Container, Info } from './styles';

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useParams();

  const listLoading = useSelector(selectors.listLoading);
  const listData = useSelector(selectors.listData);
  const listError = useSelector(selectors.listError);

  useEffect(() => {
    dispatch(actions.getListData(list));

    // return () => dispatch(actions.clearFilteredMedia());
  }, [list]);

  const items = listData
    ?.sort((el1, el2) => el2.timestamp - el1.timestamp)
    .map((details) => {
      const { id, type } = details;

      const navigateToDetailsCB = () => navigate(`/${details.type}/${details.id}`);

      const removeFromListCB = () => {
        dispatch(
          actions.removeItemFromList({
            listName: list,
            details: details,
            action: 'remove',
          }),
        );
      };

      const changeRateCB = (newRate) => {
        const mediaInfo = {
          listName: list,
          mediaInfo: {
            ...details,
            rate: newRate,
          },
          action: 'update',
        };

        dispatch(actions.changeRate(mediaInfo));
      };

      const showModal = (e) => {
        e.stopPropagation();
        dispatch(
          initActions.showModal({
            type: 'rate',
            data: {
              handleCloseCallBack: () => dispatch(initActions.hideModal()),
              setRateCallback: changeRateCB,
              currentValue: details.rate,
            },
          }),
        );
      };

      return (
        <ListItem
          key={details.itemId}
          details={details}
          listName={list}
          changeRateCB={showModal}
          removeFromListCB={removeFromListCB}
          navigateToDetailsCB={navigateToDetailsCB}
        />
      );
    });

  return (
    <Container className="listpage container">
      <Heading content={constants.HEADINGS[list]} />
      {listLoading && <Loader />}
      {!listLoading && listData.length > 0 && <div>{items}</div>}
      {!listLoading && listData.length === 0 && !listError && (
        <Info>{constants.HEADINGS[list]} list is empty</Info>
      )}
      {!listLoading && listError && <Info>Couldn't fetch {constants.HEADINGS[list]} list</Info>}
    </Container>
  );
};

export default withLayout(ListPage);
