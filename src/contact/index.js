import React from 'react'
import Form from './Form'
import {
  FaMap,
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa'

function Index() {
  return (
    <>
      <div className="slide-down"></div>
      <div className="load-anim">
        <div className="title-cont">
          <span className="bg-text upercase">Contact</span>
          <h1 className="title upercase">
            get in <span className="orange"> touch</span>
          </h1>
        </div>
        <div className="contact-cont">
          <div className="contact-detail-cont">
            <h2 className="subtitle upercase" style={{ fontWeight: '700' }}>
              Say Hi!
            </h2>
            <p
              style={{
                fontFamily: 'Open Sans',
                fontSize: '15px',
                lineHeight: '24px',
              }}
            >
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <h3 className="contact-details">
              <span className="contact-icon">
                <FaMap />
              </span>
              <p className="contact-label upercase">Address Point</p>
              <p className="contact-desc">Tbilisi Georgia</p>
            </h3>
            <h3 className="contact-details">
              <span className="contact-icon">
                <FaEnvelopeOpen />
              </span>
              <p className="contact-label upercase">mail me</p>
              <p className="contact-desc">
                <a href="mailto:iliakharekheli6@gmail.com">
                  iliakharekheli6@gmail.com
                </a>
              </p>
            </h3>
            <h3 className="contact-details">
              <span className="contact-icon">
                <FaPhoneSquareAlt />
              </span>
              <p className="contact-label upercase">call me</p>
              <p className="contact-desc">
                <a href="tel:+995598658881">+995 598 65 88 81</a>
              </p>
            </h3>
            <div className="cont-icon-cont">
              <a href="https://github.com/kharkheli" target="_blank">
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/ilia-kharkheli/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </>
  )
}

export default Index
