import React from 'react'

import PropTypes from 'prop-types'

const Modal = (props) => {
  return (
    <>
      <div className="modal-container">
        <div className="modal-container1">
          <div className="modal-container2">
            <div className="modal-container3">
              <span className="modal-text">{props.text}</span>
              <img
                alt={props.pastedImage_alt1}
                src={props.pastedImage_src1}
                className="modal-pasted-image"
              />
            </div>
            <div className="modal-container4">
              <span className="modal-text1">{props.text1}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .modal-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .modal-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            opacity: 0.2;
            align-self: center;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.2);
          }
          .modal-container2 {
            flex: 0 0 auto;
            width: 396px;
            height: 725px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .modal-container3 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #f4f4f4;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .modal-text {
            flex: 1;
            font-size: 24px;
          }
          .modal-pasted-image {
            width: 32px;
            height: 32px;
          }
          .modal-container4 {
            flex: 1;
            width: 100%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            justify-content: flex-start;
          }
          .modal-text1 {
            width: 100%;
            height: 100%;
            align-self: flex-start;
          }
        `}
      </style>
    </>
  )
}

Modal.defaultProps = {
  text1: 'Text',
  pastedImage_alt1: 'pastedImage',
  text: 'Text',
  pastedImage_src1: '/playground_assets/pastedimage-8uuu.svg',
}

Modal.propTypes = {
  text1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  text: PropTypes.string,
  pastedImage_src1: PropTypes.string,
}

export default Modal
