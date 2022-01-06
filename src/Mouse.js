import React, { useEffect, useState } from 'react'

function Mouse() {
  const [outCords, setOutCords] = useState({ x: 0, y: 0 })
  const [cords, setCords] = useState({ x: 0, y: 0 })
  const [click, setClick] = useState(false)
  useEffect(() => {
    document.addEventListener('mousedown', () => setClick(true))
    document.addEventListener('mouseup', () => setClick(false))
    document.addEventListener('mousemove', (e) => {
      setOutCords({ x: e.clientX, y: e.clientY })
      setCords({ x: e.clientX, y: e.clientY })
    })
  }, [])
  return (
    <div>
      <div
        className="mouse"
        style={{
          position: 'fixed',
          top: !click ? cords.y - 4 : cords.y - 3,
          left: !click ? cords.x - 4 : cords.x - 3,
          zIndex: '100',
          width: click ? '6px' : '8px',
          height: click ? '6px' : '8px',
        }}
      ></div>
      <div
        className="outer"
        style={{
          position: 'fixed',
          top: !click ? outCords.y - 20 : outCords.y - 25,
          left: !click ? outCords.x - 20 : outCords.x - 25,
          zIndex: '100',
          width: click ? '50px' : '40px',
          height: click ? '50px' : '40px',
        }}
      ></div>
    </div>
  )
}

export default Mouse
