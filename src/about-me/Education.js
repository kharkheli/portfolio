import React from 'react'
import data from './data'
import { FaBriefcase } from 'react-icons/fa'

function Education() {
  return (
    <div className="education">
      <h3
        className="subtitle upercase"
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        experience & education{' '}
      </h3>
      <div className="education-cont">
        <div className="experience-educ">
          {data.education.experience.map((experience, index) => {
            return (
              <div key={index} className="single-educ">
                <span className="educ-icon">
                  <FaBriefcase />
                </span>
                <p className="period">{experience.period}</p>
                <h3 className="educ-name" style={{ margin: '7px 0 10px' }}>
                  {experience.name}{' '}
                  <span className="educ-at">{experience.at}</span>
                </h3>
                <p className="educ-description">{experience.description}</p>
              </div>
            )
          })}
        </div>
        <div className="education-educ">
          {data.education.education.map((education, index) => {
            return (
              <div className="single-educ" key={index}>
                <span className="educ-icon">
                  <FaBriefcase />
                </span>
                <p className="period">{education.period}</p>
                <h3 className="educ-name" style={{ margin: '7px 0 10px' }}>
                  {education.name}{' '}
                  <span className="educ-at">{education.at}</span>
                </h3>
                <p className="educ-description">{education.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Education
