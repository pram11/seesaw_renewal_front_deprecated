import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container1">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="footer-pasted-image"
          />
          <img
            alt={props.pastedImage_alt1}
            src={props.pastedImage_src1}
            className="footer-pasted-image1"
          />
          <img
            alt={props.pastedImage_alt2}
            src={props.pastedImage_src2}
            className="footer-pasted-image2"
          />
        </div>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #4082ed;
          }
          .footer-pasted-image {
            width: 39px;
            height: 38px;
          }
          .footer-pasted-image1 {
            width: 35px;
            height: 30px;
          }
          .footer-pasted-image2 {
            width: 48px;
            height: 38px;
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  pastedImage_src1: '/playground_assets/pastedimage-zs6b.svg',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src: '/playground_assets/pastedimage-715u.svg',
  pastedImage_src2: '/playground_assets/pastedimage-vsvr.svg',
  pastedImage_alt2: 'pastedImage',
  pastedImage_alt: 'pastedImage',
}

Footer.propTypes = {
  pastedImage_src1: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default Footer
