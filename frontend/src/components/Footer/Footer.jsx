import TMDbIcon from '../../global/images/Footer/tmdb_logo.svg';
import { Background, Container, Logo, Content } from './styles';

const Footer = () => (
  <Background>
    <Container>
      <Logo src={TMDbIcon} />
      <Content>This product uses the TMDB API but is not endorsed or certified by TMDB.</Content>
    </Container>
  </Background>
);

export default Footer;
