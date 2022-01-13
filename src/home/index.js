import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import AboutMe from '../about-me'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import profile from '../photo/profile.jpg'

function Index() {
  const [moreAbout, setMoreAbout] = useState(false)
  return (
    <>
      <div className="slide-down"></div>
      <div style={{ position: 'fixed', width: '100%', height: '100vh' }}>
        <div className="yellow-left"></div>
      </div>
      <div className="home load-anim">
        {moreAbout ? (
          <div
            className="more-about-cont"
            onClick={(e) => {
              if (e.target.className === 'more-about-cont') {
                setMoreAbout(false)
              }
            }}
          >
            <div className="more-about">
              <i className="close-about">
                <IoMdCloseCircleOutline onClick={() => setMoreAbout(false)} />
              </i>
              <AboutMe />
            </div>
          </div>
        ) : null}

        <div className="home-img">
          <img
            src="https://tunis.ibthemespro.com/img/hero/light.jpg"
            src={profile}
            alt="something"
          />
        </div>
        <div className="home-info">
          <h1 className="upercase orange name">I'm ilia kharkheli</h1>
          <h1 className="upercase">mern developer</h1>
          <p className="description">
            Self-motivated Kinesthetic learner. I am undergoing further
            training, though I have the knowledge and abilities to turn theory
            into practice successfully. I am very grateful for the opportunity I
            was given to devote myself to some interesting international and
            national projects. I am driven by curiosity, love of my work and
            want to leave my mark. What inspired me most is meditation, reading
            books on meditation, hiking and bus drive. In my free time, you can
            challenge me also in playing bowling, solving Rubik's cube, cocking
            the most delicious mushrooms, etc.
          </p>
          <div className="btn-cont">
            <div className="cool-btn" onClick={() => setMoreAbout(true)}>
              <span className="btn-text">more About me </span>
              <span className="btn-icon">
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="btn-icon"></div>
      </div>
    </>
  )
}

export default Index
