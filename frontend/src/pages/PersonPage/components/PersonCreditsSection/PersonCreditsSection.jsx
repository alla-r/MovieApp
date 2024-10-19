import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { JOBS_CONFIG } from '../../constants';
import { getUniqueValues } from '../../../../global/helpers';
import YearSection from './components/YearSection';
import { Section, HeaderSection } from './styles';

function PersonCreditsSection({ data, onItemClick }) {
  const { t } = useTranslation();
  const sortByYear = (a, b) => b - a;

  const getFilteredListForJob = (job, rowData) =>
    rowData.filter((item) => job.jobNames.indexOf(item.job));

  const getGroupedYearData = (rowData, years) => {
    const yearSections = { upcoming: [] };

    years.forEach((currYear) => {
      if (currYear) {
        yearSections[currYear.toString()] = [];
      }
    });

    rowData.forEach((item) => {
      if (item.date) {
        const year = new Date(item.date).getFullYear();
        yearSections[year.toString()].push(item);
      } else {
        yearSections.upcoming.push(item);
      }
    });

    return yearSections;
  };

  const createSection = ({ title, sectionData }) => {
    const years = getUniqueValues(sectionData.map(({ date }) => new Date(date).getFullYear()));

    const yearSections = getGroupedYearData(sectionData, years);

    const createYearSection = (year, yearSectionData) => (
      <YearSection
        key={`${title}-${year}`}
        year={year}
        yearSectionData={yearSectionData}
        onItemClick={onItemClick}
      />
    );

    const yearSectionsUI = [createYearSection(null, yearSections.upcoming)];

    years.sort(sortByYear).forEach((currYear) => {
      if (currYear) {
        yearSectionsUI.push(createYearSection(currYear, yearSections[currYear]));
      }
    });

    return (
      sectionData.length > 0 && (
        <div key={title}>
          <HeaderSection>{title}</HeaderSection>
          <Section>{yearSectionsUI}</Section>
        </div>
      )
    );
  };

  return (
    <>
      {createSection({ title: t('acting'), sectionData: data.cast })}
      {JOBS_CONFIG.map((job) =>
        createSection({
          title: job.title,
          sectionData: getFilteredListForJob(job, data.crew),
        }),
      )}
    </>
  );
}

PersonCreditsSection.defaultProps = { onItemClick: () => {} };

PersonCreditsSection.propTypes = {
  data: PropTypes.shape({
    cast: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        isCast: PropTypes.bool,
        role: PropTypes.string,
        date: PropTypes.string,
      }),
    ).isRequired,
    crew: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        type: PropTypes.string,
        title: PropTypes.string,
        isCast: PropTypes.bool,
        role: PropTypes.string,
        date: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  onItemClick: PropTypes.func,
};

export default PersonCreditsSection;
