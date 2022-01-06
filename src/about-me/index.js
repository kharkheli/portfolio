import React from 'react'
import data from './data'
import { FaDownload } from 'react-icons/fa'
import MySkills from './MySkills'
import Education from './Education'

function Index() {
  return (
    <>
      <div className="slide-down"></div>
      <section className="about-me load-anim">
        <div className="title-cont">
          <span className="bg-text upercase">resume</span>
          <h1 className="title upercase">
            about <span className="orange"> me</span>
          </h1>
        </div>
        <div className="row-1">
          <div className="personal">
            <h3 className="subtitle upercase">personal infos</h3>
            {data.info.map((info, index) => {
              return (
                <p className="personal-info" key={index}>
                  <span className="info-name">{info.name}</span>:
                  <span className="info-desc"> {info.description}</span>
                </p>
              )
            })}
            <a href="../Ilia's-Resume.pdf" download>
              <div className="btn-cont">
                <div className="cool-btn">
                  <span className="btn-text">download cv</span>
                  <span className="btn-icon">
                    <FaDownload />
                  </span>
                </div>
              </div>
            </a>
          </div>

          <div className="experience">
            {data.experience.map((xp, index) => {
              return (
                <div className="xp" key={index}>
                  <h3 className="xp-value">{xp.value}</h3>
                  <p className="xp-text">{xp.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <hr className="separator" />
        <MySkills />
        <hr className="separator" />
        <Education />
      </section>
    </>
  )
}

export default Index
