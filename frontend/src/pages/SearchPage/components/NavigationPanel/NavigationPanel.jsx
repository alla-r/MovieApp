import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { PanelWrapper, ListItemWrapper, NumberLabel } from './styles';

const NavigationPanel = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const data = [
    {
      text: 'Movies',
      amount: 200,
    },
    {
      text: 'TV Shows',
      amount: 2200,
    },
    {
      text: 'People',
      amount: 0,
    },
  ];

  const items = data.map((item, index) => (
    <ListItem
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...item}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      index={index}
      onClickHandler={handleListItemClick}
      isSelected={selectedIndex === index}
    />
  ));

  return (
    <PanelWrapper>
      <h3 className="panel--header">Search Results</h3>
      <div className="panel--list">
        <List component="nav" aria-label="secondary mailbox folder">
          {items}
        </List>
      </div>
    </PanelWrapper>
  );
};

export default NavigationPanel;

const ListItem = ({ index, text, amount, isSelected, onClickHandler }) => (
  <ListItemWrapper selected={isSelected} onClick={(e) => onClickHandler(e, index)}>
    <p>{text}</p>
    <NumberLabel>{amount}</NumberLabel>
  </ListItemWrapper>
);

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
