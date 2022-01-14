import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import { ProfileWrapper } from './styles';
import './ProfileDropdown.scss';

const ProfileDropdown = ({ avatarContent, data }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const onClickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = data.map(({ content, clickHandler }) => (
    <MenuItem key={content} onClick={clickHandler}>
      {content}
    </MenuItem>
  ));

  return (
    <ProfileWrapper>
      <IconButton
        onClick={onClickHandler}
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
        {menuItems}
      </Menu>
    </ProfileWrapper>
  );
};

ProfileDropdown.propTypes = {
  avatarContent: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      clickHandler: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default ProfileDropdown;
