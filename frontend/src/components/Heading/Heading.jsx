import React from 'react';
import PropTypes from 'prop-types';
import { Container, HeadingContent, Line } from './styles';

function Heading({ content }) {
  return (
    <Container>
      <Line />
      <HeadingContent>{content}</HeadingContent>
    </Container>
  );
}

Heading.propTypes = { content: PropTypes.string.isRequired };

export default Heading;
