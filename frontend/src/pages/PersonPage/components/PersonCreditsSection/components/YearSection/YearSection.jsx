import PropTypes from 'prop-types';
import { Container, Row, Year, Circle, Title } from './styles';

const YearSection = ({ year, yearSectionData, onItemClick }) => {
  const rows = yearSectionData.map((item) => {
    const role = item.isCast ? item.role && `as ${item.role}` : item.role && `... ${item.role}`;

    return (
      <Row key={item.id}>
        <Year className="row-item">{year || '-'}</Year>
        <Circle className="row-item" />
        <Title className="row-item" onClick={() => onItemClick(item.type, item.id)}>
          {item.title}
        </Title>
        <div>{role}</div>
      </Row>
    );
  });

  return (
    rows.length > 0 && (
      <Container className="section-year" key={year}>
        {rows}
      </Container>
    )
  );
};

YearSection.defaultProps = {
  onItemClick: () => {},
  year: '-',
};

YearSection.propTypes = {
  year: PropTypes.number,
  yearSectionData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      isCast: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      role: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onItemClick: PropTypes.func,
};

export default YearSection;
