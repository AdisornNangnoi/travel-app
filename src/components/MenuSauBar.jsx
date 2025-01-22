import React from 'react'
import { Link } from 'react-router-dom'

function MenuSauBar() {
  return (
    <>
     <Link to="/">HOME</Link>
    |
     <Link to="/about">ABOUT</Link>
    |
     <Link to="/contact">CONTACT</Link>
    |
     <Link to="/sau/dti">REGISTER</Link>
    </>
  )
}

export default MenuSauBar