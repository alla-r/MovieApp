import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Tooltip, tooltipClasses, Zoom } from '@mui/material';
import { Image, Link } from './styles';

const SocialMediaButton = ({ url, tooltipMessage, iconSrc }) => {
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
    url && (
      <StyledTooltip title={tooltipMessage}>
        <Link href={url} target="_blank" rel="noreferrer">
          <Image src={iconSrc} />
        </Link>
      </StyledTooltip>
    )
  );
};

SocialMediaButton.defaultProps = {
  url: null,
};

SocialMediaButton.propTypes = {
  url: PropTypes.string,
  iconSrc: PropTypes.string.isRequired,
  tooltipMessage: PropTypes.string.isRequired,
};

export default SocialMediaButton;
