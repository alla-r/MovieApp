import React from 'react';
import PropTypes from 'prop-types';
import { Item, Line } from './styles';

const HeaderItem = ({ content, onClickHandler, isActive }) => (
  <Item onClick={onClickHandler}>
    {content}
    {isActive && <Line />}
  </Item>
);

HeaderItem.defaultProps = {
  onClickHandler: () => {},
  isActive: false,
};

HeaderItem.propTypes = {
  content: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  isActive: PropTypes.bool,
};

export default HeaderItem;
