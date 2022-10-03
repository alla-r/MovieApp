import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tooltip, tooltipClasses, Zoom } from '@mui/material';
import { Image } from './styles';

const SocialMediaButton = ({ onClickHandler, tooltipMessage, iconSrc }) => {
  const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip 
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props} 
      arrow 
      classes={{ popper: className }}
      TransitionComponent={Zoom} 
    />
  ))({
    [`& .${tooltipClasses.arrow}`]: {
      color: '#313131',
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#313131',
      padding: 7,
    },
  });

  return (
    <StyledTooltip title={tooltipMessage} onClick={onClickHandler}>
        <Image src={iconSrc} />
    </StyledTooltip>
  );
};

SocialMediaButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  tooltipMessage: PropTypes.string.isRequired,
};

export default SocialMediaButton;
