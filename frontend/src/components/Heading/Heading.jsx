import React from 'react';
import PropTypes from 'prop-types';
import { Container, HeadingContent } from './styles';

const Heading = ({ content }) => (
  <Container className="container">
    <HeadingContent>{content}</HeadingContent>
  </Container>
);

Heading.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Heading;
