import React from 'react';
import { useTranslation } from 'react-i18next';
import TMDbIcon from '../../global/images/Footer/tmdb_logo.svg';
import { Background, Container, Logo, Content } from './styles';

function Footer() {
  const { t } = useTranslation();

  return (
    <Background>
      <Container>
        <Logo src={TMDbIcon} />
        <Content>{t('footer')}</Content>
      </Container>
    </Background>
  );
}

export default Footer;
