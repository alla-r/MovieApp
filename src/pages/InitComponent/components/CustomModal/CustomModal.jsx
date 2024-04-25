import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Rating } from '@mui/material';
import { selectors } from '../../reducer';
import { ModalWrapper } from './styles';

function CustomModal() {
  const { type, data } = useSelector(selectors.modalConfig) || {};
  const { currentValue, handleCloseCallBack, setRateCallback } = data || {};
  const isOpen = useSelector(selectors.isModalOpen);

  const [hover, setHover] = useState(-1);

  const closeCallBack = () => {
    setHover(-1);

    if (handleCloseCallBack) {
      handleCloseCallBack();
    }
  };

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
        <Modal open={isOpen} onClose={closeCallBack}>
          <ModalWrapper>
            <div className="title-row">
              <p>Rate the movie</p>
              <button
                className="close-btn"
                type="button"
                onClick={closeCallBack}
                aria-label="close"
              />
            </div>
            <div className="rating-row">
              <Rating
                name="rate"
                value={currentValue}
                size="large"
                max={10}
                onChange={(event, newValue) => {
                  closeCallBack();
                  setRateCallback(newValue || currentValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {hover !== -1 && <div className="rating-label">{labels[hover]}</div>}
              {currentValue && hover === -1 && (
                <div className="rating-label">{labels[currentValue]}</div>
              )}
            </div>
          </ModalWrapper>
        </Modal>
      )}
      {type === 'default' && <ModalWrapper />}
    </>
  );
}

export default CustomModal;
