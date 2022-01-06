import React, { useState, useEffect, useRef } from 'react'

function Navbar({ icon, name, active }) {
  const [hover, setHover] = useState(false)
  const contRef = useRef(null)
  const navRef = useRef(null)
  // useEffect(() => {
  //   navRef.current.addEventListener('mouseenter', () => setHover(true))
  // }, [])
  return (
    <div className="nav-link" onMouseLeave={() => setHover(false)}>
      <i
        className="nav-icon"
        onMouseMove={() => setHover(true)}
        style={{ backgroundColor: hover || active ? '#ffb400' : null }}
      >
        {icon}
      </i>
      <h2
        className={`nav-name`}
        style={{
          opacity: hover ? '1' : '0',
          padding: hover ? '0px 30px 0px 20px' : '0px 0px 0px 20px',
        }}
      >
        {name}
      </h2>
    </div>
  )
}

export default Navbar
