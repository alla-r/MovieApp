import React from 'react';
import PropTypes from 'prop-types';
import { LogoContainer, LogoFirstPart, LogoColor } from './styles';

function Logo({ size = 24, onClickHandler }) {
  return (
    <LogoContainer onClick={onClickHandler}>
      <LogoFirstPart size={size}>
        Movie
        <LogoColor>APP</LogoColor>
      </LogoFirstPart>
    </LogoContainer>
  );
}

Logo.propTypes = {
  size: PropTypes.number,
  onClickHandler: PropTypes.func.isRequired,
};

export default Logo;
