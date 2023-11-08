import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { ProfileWrapper } from './styles';
import './ProfileDropdown.scss';

function ProfileDropdown({ avatarContent, data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const onIconClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownMenuItems = data.map(({ content, onClickHandler }) => (
    <MenuItem key={content} onClick={onClickHandler}>
      {content}
    </MenuItem>
  ));

  return (
    <ProfileWrapper>
      <IconButton
        onClick={onIconClickHandler}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Avatar>{avatarContent}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {dropdownMenuItems}
      </Menu>
    </ProfileWrapper>
  );
}

ProfileDropdown.propTypes = {
  avatarContent: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      onClickHandler: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default ProfileDropdown;
