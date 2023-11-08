import React from 'react';
import PropTypes from 'prop-types';
import { useMatch } from 'react-router-dom';
import { Item, Line } from './styles';

function HeaderItem({ content, onClickHandler, path }) {
  const match = useMatch(path);

  return (
    <Item onClick={onClickHandler} to={path}>
      {content}
      {match && <Line className="line" />}
    </Item>
  );
}

HeaderItem.defaultProps = {
  onClickHandler: () => {},
  path: '',
};

HeaderItem.propTypes = {
  content: PropTypes.string.isRequired,
  path: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default HeaderItem;
