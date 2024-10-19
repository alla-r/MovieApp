import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PanelWrapper, ListItemWrapper, NumberLabel } from './styles';

function NavigationPanel({ navConfig }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (navConfig[index].onClickHandler) {
      navConfig[index].onClickHandler();
    }
  };

  const items = navConfig.map((item, index) => (
    <ListItem
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...item}
      key={item.id}
      index={index}
      onClickHandler={handleListItemClick}
      isSelected={selectedIndex === index}
    />
  ));

  return (
    <PanelWrapper>
      <h3 className="panel--header">{t('searchResult')}</h3>
      <div className="panel--list">
        <List component="nav" aria-label="secondary mailbox folder">
          {items}
        </List>
      </div>
    </PanelWrapper>
  );
}

NavigationPanel.propTypes = {
  navConfig: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      onClickHandler: PropTypes.func,
    }),
  ).isRequired,
};

export default NavigationPanel;

function ListItem({ index, text, amount, isSelected, onClickHandler }) {
  return (
    <ListItemWrapper selected={isSelected} onClick={(e) => onClickHandler(e, index)}>
      <p>{text}</p>
      <NumberLabel>{amount}</NumberLabel>
    </ListItemWrapper>
  );
}

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
