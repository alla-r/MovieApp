import React from 'react';
import PropTypes from 'prop-types';
import { Container, HeadingContent, Line } from './styles';

const Heading = ({ content }) => (
  <Container>
    <Line />
    <HeadingContent>{content}</HeadingContent>
  </Container>
);

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Heading;
