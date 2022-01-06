import React, { useEffect, useState } from 'react'
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelopeOpen,
  FaComments,
} from 'react-icons/fa'

import { Link } from 'react-router-dom'
import NavLink from './NavLink'

function Index() {
  const [active, setActive] = useState('')
  useEffect(() => {
    setActive(window.location.href.split('/')[3])
  }, [])
  return (
    <div className="navbar">
      <Link to="/" onClick={() => setActive('')}>
        <NavLink icon={<FaHome />} name="home" active={active === ''} />
      </Link>

      <Link to="/about-me" onClick={() => setActive('about-me')}>
        <NavLink
          icon={<FaUser />}
          name="about"
          active={active === 'about-me'}
        />
      </Link>
      <Link to="/projects" onClick={() => setActive('projects')}>
        <NavLink
          icon={<FaBriefcase />}
          name="projects"
          active={active === 'projects'}
        />
      </Link>
      <Link to="/contact" onClick={() => setActive('contact')}>
        <NavLink
          icon={<FaEnvelopeOpen />}
          name="contact"
          active={active === 'contact'}
        />
      </Link>
      {/* <Link to="/">
        <NavLink icon={<FaComments />} name="blog" />
      </Link> */}
    </div>
  )
}

export default Index
