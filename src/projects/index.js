import React from 'react'
import data from './data'
import SingleProject from './SingleProject'

function Index() {
  return (
    <>
      <div className="slide-down"></div>
      <div className="load-anim">
        <div className="title-cont">
          <span className="bg-text upercase">work</span>
          <h1 className="title upercase">
            my <span className="orange"> Projects</span>
          </h1>
        </div>
        <div className="projects-cont">
          {data.map((project, index) => {
            return <SingleProject key={index} {...project} />
          })}
        </div>
      </div>
    </>
  )
}

export default Index
