import React from 'react'
import data from './data'

function MySkills() {
  return (
    <div className="my-skills">
      <h3
        className="subtitle upercase"
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        my skills
      </h3>
      <div className="skills-cont">
        {data.skills.map((skill, index) => {
          return (
            <div className="skill-cont" key={index}>
              <div className="progress-bar">
                <div
                  style={{
                    width: 'fit-content',
                    transform: 'rotate(-90deg) translate(50%, -50%)',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="120px"
                    height="120px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#ffb400" />
                        <stop offset="100%" stopColor="#ffb400" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      strokeLinecap="linear"
                      style={{ strokeDashoffset: (100 - skill.value) * 3.14 }}
                    />
                  </svg>
                </div>
                <p className="skill-perc">{skill.value}%</p>
              </div>
              <p className="skill-name">{skill.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MySkills
