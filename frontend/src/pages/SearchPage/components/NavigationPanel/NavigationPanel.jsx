import React, { useState } from 'react';
import { List, ListItemButton } from '@mui/material';
import { PanelWrapper, ListItem, NumberLabel } from './styles';

const NavigationPanel = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <PanelWrapper>
      <h3 className="panel--header">Search Results</h3>
      <div className="panel--list">
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItem
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <p>Movies</p>
            <NumberLabel>200</NumberLabel>
          </ListItem>
          <ListItem
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <p>TV Shows</p>
            <NumberLabel>1200</NumberLabel>
          </ListItem>
          <ListItem
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <p>People</p>
            <NumberLabel>0</NumberLabel>
          </ListItem>
        </List>
      </div>
    </PanelWrapper>
  );
};

export default NavigationPanel;
