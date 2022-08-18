import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Rating } from '@mui/material';
import { selectors } from '../../reducer';
import { ModalWrapper } from './styles';

const CustomModal = () => {
  const { type, data } = useSelector(selectors.modalConfig) || {};
  const { currentValue, handleCloseCallBack, setRateCallback } = data || {};
  const isOpen = useSelector(selectors.isModalOpen);

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
    <>
      {type === 'rate' && (
        <Modal open={isOpen} onClose={handleCloseCallBack}>
          <ModalWrapper>
            <div className="title-row">
              <p>Rate the movie</p>
              <button
                className="close-btn"
                type="button"
                onClick={handleCloseCallBack}
                aria-label="close"
              />
            </div>
            <div className="rating-row">
              <Rating
                name="rate"
                value={rateValue}
                size="large"
                max={10}
                onChange={(event, newValue) => {
                  setRateValue(newValue);
                  handleCloseCallBack();
                  setRateCallback(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {hover !== -1 && <div className="rating-label">{labels[hover]}</div>}
              {rateValue && hover === -1 && <div className="rating-label">{labels[rateValue]}</div>}
            </div>
          </ModalWrapper>
        </Modal>
      )}
      {type === 'default' && <ModalWrapper />}
    </>
  );
};

export default CustomModal;
