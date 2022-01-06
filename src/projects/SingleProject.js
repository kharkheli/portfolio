import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { FiFileText, FiExternalLink, FiGithub } from 'react-icons/fi'
import { HiOutlineCode } from 'react-icons/hi'
import { FaRegUser } from 'react-icons/fa'

function SingleProject(project) {
  const [prev, setPrev] = useState(false)
  return (
    <>
      {prev ? (
        <div
          className="proj-prev-cont"
          onClick={(e) => {
            if (e.target.className === 'proj-prev-cont') {
              setPrev(false)
            }
          }}
        >
          <div className="proj-prev">
            <i className="close-project">
              <IoMdCloseCircleOutline onClick={() => setPrev(false)} />
            </i>
            <h2 className="orange upercase">{project.name}</h2>
            <div className="project-info">
              <p>
                <span className="proj-name">
                  <i>
                    <FiFileText />
                  </i>{' '}
                  Project:{' '}
                </span>
                <span className="proj-desc">{project.name}</span>
              </p>
              <p>
                <span className="proj-name">
                  <i>
                    <FaRegUser />
                  </i>{' '}
                  Client:{' '}
                </span>
                <span className="proj-desc">{project.client}</span>
              </p>
              <p>
                <span className="proj-name">
                  <i>
                    <HiOutlineCode />
                  </i>{' '}
                  Languages:{' '}
                </span>
                <span className="proj-desc">{project.languages}</span>
              </p>
              <p>
                <span className="proj-name">
                  <i>
                    <FiExternalLink />
                  </i>{' '}
                  Preview:{' '}
                </span>
                <span className="proj-desc">
                  <a
                    href={project.link}
                    target="_blank"
                    style={{ color: '#ffb400', textDecoration: 'underline' }}
                  >
                    {project.preview}
                  </a>
                </span>
              </p>
              <p>
                <span className="proj-name">
                  <i>
                    <FiGithub />
                  </i>{' '}
                  Github:{' '}
                </span>
                <span className="proj-desc">
                  <a
                    href={project.github}
                    target="_blank"
                    style={{ color: '#ffb400', textDecoration: 'underline' }}
                  >
                    repository
                  </a>
                </span>
              </p>
            </div>
            <img src={project.img} alt={project.name} />
          </div>
        </div>
      ) : null}
      <div className="single-project" onClick={() => setPrev(true)}>
        <div className="overlay upercase">{project.name}</div>
        <img className="project-img" src={project.img} alt="" />
      </div>
    </>
  )
}

export default SingleProject
