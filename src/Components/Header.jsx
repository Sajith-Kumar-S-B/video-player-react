import React from 'react'
import {Navbar,Container} from "react-bootstrap"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand >
      <Link to={'/'} className='fs-4' style={{textDecoration:'none', color:'white'}}>
      <i class="fa-solid fa-play fa-flip"></i>{' '}
            Media Player
      </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header