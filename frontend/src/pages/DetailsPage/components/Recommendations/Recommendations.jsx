import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Heading from '../../../../components/Heading';
import { Container, CardItem, ImageWrapper, Title } from './styles';

const Recommendations = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  const type = "tv";

  return (
    <Container className='container'>
      <Heading content="More like this" />
      <CardItem onClick={() => console.log(`${data[0].type}/${data[0].id}`)}>
        <ImageWrapper ImageSrc={data[0].backdrop} />
        <Title>{data[0].title}</Title>
      </CardItem>
    </Container>
  );
};

// navigate(`${type}/${id}`);

Recommendations.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // data: PropTypes.object.isRequired,
  // mappingConfig: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string,
  //     value: PropTypes.string,
  //     type: PropTypes.string,
  //   }),
  // ).isRequired,
};

export default Recommendations;
