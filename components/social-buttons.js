import React from 'react'

import PropTypes from 'prop-types'

const SocialButtons = (props) => {
  return (
    <>
      <div className="social-buttons-container">
        <div className="social-buttons-container1">
          <img
            alt={props.GoogleLogo_alt}
            src={props.GoogleLogo_src}
            className="social-buttons-google-logo"
          />
          <img
            alt={props.AppleLogo_alt}
            src={props.AppleLogo_src}
            className="social-buttons-apple-logo"
          />
          <img
            alt={props.FacebookLogo_alt}
            src={props.FacebookLogo_src}
            className="social-buttons-facebook-logo"
          />
        </div>
      </div>
      <style jsx>
        {`
          .social-buttons-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            justify-self: center;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .social-buttons-container1 {
            width: 479px;
            height: 32px;
            display: flex;
            margin-top: Unit;
            align-items: center;
            margin-bottom: Unit;
            justify-content: space-around;
          }
          .social-buttons-google-logo {
            width: 31px;
            height: 32px;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 0;
          }
          .social-buttons-apple-logo {
            width: 27px;
            height: 32px;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 0;
          }
          .social-buttons-facebook-logo {
            width: 17px;
            height: 32px;
            box-sizing: border-box;
            margin-right: 0;
            margin-bottom: 0;
          }
          @media (max-width: 479px) {
            .social-buttons-container {
              width: 100%;
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .social-buttons-container1 {
              width: 100%;
              position: static;
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .social-buttons-google-logo {
              top: 0px;
              left: 0px;
            }
            .social-buttons-apple-logo {
              top: 0px;
              left: 141px;
            }
            .social-buttons-facebook-logo {
              top: 0px;
              right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

SocialButtons.defaultProps = {
  GoogleLogo_alt: 'Vector2257',
  FacebookLogo_alt: 'Vector2257',
  AppleLogo_alt: 'Vector2257',
  AppleLogo_src: '/playground_assets/vector2257-c14.svg',
  GoogleLogo_src: '/playground_assets/vector2257-j53.svg',
  FacebookLogo_src: '/playground_assets/vector2257-wnfh.svg',
}

SocialButtons.propTypes = {
  GoogleLogo_alt: PropTypes.string,
  FacebookLogo_alt: PropTypes.string,
  AppleLogo_alt: PropTypes.string,
  AppleLogo_src: PropTypes.string,
  GoogleLogo_src: PropTypes.string,
  FacebookLogo_src: PropTypes.string,
}

export default SocialButtons
