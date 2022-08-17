import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { ModalWrapper } from './styles';

const RateModal = ({ handleClose, isOpen, currentValue = null, setRateCallback }) => {
  const [rateValue, setRateValue] = useState(currentValue);
  const [hover, setHover] = useState(-1);

  const labels = {
    1: '1/10',
    2: '2/10',
    3: '3/10',
    4: '4/10',
    5: '5/10',
    6: '6/10',
    7: '7/10',
    8: '8/10',
    9: '9/10',
    10: '10/10',
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ModalWrapper>
        <div className="title-row">
          <p>Rate the movie</p>
          <button className="close-btn" type="button" onClick={handleClose} aria-label="close" />
        </div>
        <div className="rating-row">
          <Rating
            name="rate"
            value={rateValue}
            size="large"
            max={10}
            onChange={(event, newValue) => {
              setRateValue(newValue);
              handleClose();
              setRateCallback(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
          />
          {hover !== -1 && <div className="rating-label">{labels[hover]}</div>}
          {rateValue && hover === -1 && <div className="rating-label">{labels[rateValue]}</div>}
          {/* add clear btn for rating */}
        </div>
      </ModalWrapper>
    </Modal>
  );
};

RateModal.defaultProps = {
  // className: '',
  // isBtnDisabled: false,
  // btnStyles: {
  //   isFilled: false,
  //   color: 'primary',
  // },
};

RateModal.propTypes = {
  // className: PropTypes.string,
  // onClickHandler: PropTypes.func.isRequired,
  // isBtnDisabled: PropTypes.bool,
  // btnStyles: PropTypes.shape({
  //   isFilled: PropTypes.bool,
  //   color: PropTypes.string,
  // }),
  // btnText: PropTypes.string.isRequired,
};

export default RateModal;
