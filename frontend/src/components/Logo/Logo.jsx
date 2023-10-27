import PropTypes from 'prop-types';
import { LogoContainer, LogoFirstPart, LogoColor } from './styles';

const Logo = ({ size, onClickHandler }) => (
  <LogoContainer onClick={onClickHandler}>
    <LogoFirstPart size={size}>
      Movie<LogoColor>APP</LogoColor>
    </LogoFirstPart>
  </LogoContainer>
);

Logo.defaultProps = {
  size: 24,
};

Logo.propTypes = {
  size: PropTypes.number,
  onClickHandler: PropTypes.func.isRequired,
};

export default Logo;
