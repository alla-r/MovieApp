import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { getBarColor } from '../../global/helpers';
import theme from '../../theme';
import './CircleProgressBar.scss';

const CircleProgressBar = ({ voteAvg, percentage }) => (
  <CircularProgressbar
    value={percentage}
    text={Number.isInteger(voteAvg) ? `${voteAvg}.0` : voteAvg}
    strokeWidth={4}
    background
    backgroundPadding={4}
    styles={buildStyles({
      backgroundColor: `${theme.colors.dark}`,
      textColor: `${theme.colors.light}`,
      pathColor: `${getBarColor('path', percentage)}`,
      trailColor: `${getBarColor('trail', percentage)}`,
    })}
  />
);

CircleProgressBar.propTypes = {
  voteAvg: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default CircleProgressBar;
