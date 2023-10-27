import PropTypes from 'prop-types';
import SocialMediaButton from '../../../../components/SocialMediaButton';
import { SOCIAL_MEDIA_BUTTONS_CONFIG, PERSONAL_DETAILS_MAPPING } from '../../constants';
import {
  Container,
  SocialMediaButtonsWrapper,
  InfoSection,
  ItemWrapper,
  ItemTitle,
  ItemValue,
} from './styles';

const LeftSide = ({ data }) => {
  const createSocialMediaButtons = (btnConfig, links) =>
    btnConfig.map(({ id, iconSrc, tooltipMessage }) => (
      <SocialMediaButton
        key={id}
        iconSrc={iconSrc}
        url={links[id]}
        tooltipMessage={tooltipMessage}
      />
    ));

  const items = PERSONAL_DETAILS_MAPPING.map(
    ({ title, id }) =>
      data[id] && (
        <ItemWrapper key={id}>
          <ItemTitle>{title}</ItemTitle>
          <ItemValue>{data[id]}</ItemValue>
        </ItemWrapper>
      ),
  );

  return (
    <Container>
      <img src={data.poster} alt="poster" className="poster" />
      <SocialMediaButtonsWrapper>
        {createSocialMediaButtons(SOCIAL_MEDIA_BUTTONS_CONFIG, data.socialMedia)}
      </SocialMediaButtonsWrapper>
      <InfoSection>
        <div className="info-section--title">Personal Info</div>
        {items}
      </InfoSection>
    </Container>
  );
};

LeftSide.propTypes = {
  data: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    socialMedia: PropTypes.shape({
      instagram: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default LeftSide;
