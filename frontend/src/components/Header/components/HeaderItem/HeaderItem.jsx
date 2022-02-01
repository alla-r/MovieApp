import React from 'react';
import PropTypes from 'prop-types';
import { Item, Line } from './styles';

const HeaderItem = ({ content, onClickHandler, path }) => (
  <Item 
    onClick={onClickHandler} 
    to={path} 
  >
    {content}
    <Line className="line" />
  </Item>
);

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
