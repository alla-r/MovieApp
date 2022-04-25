import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { ButtonWrapper, Image } from './styles';

const CircularButton = ({ onClickHandler, isActive, tooltipActive, tooltipInactive, iconSrc }) => {
  const classNames = isActive ? 'active' : '';

  const StyledTooltip = styled(({ className, ...props }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#313131",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#313131",
      padding: 10,
    },
  }));

  return (
    <StyledTooltip title={isActive ? tooltipActive : tooltipInactive}>
      <ButtonWrapper onClick={onClickHandler}>
        <Image className={classNames} src={iconSrc} />
      </ButtonWrapper>
    </StyledTooltip>
  );
};

CircularButton.defaultProps = {
  isActive: false,
};

CircularButton.propTypes = {
  isActive: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  tooltipActive: PropTypes.string.isRequired,
  tooltipInactive: PropTypes.string.isRequired,
};

export default CircularButton;
