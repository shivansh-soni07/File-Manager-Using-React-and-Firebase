import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => (
   <Navbar bg='dark' expand='*' className='px-5 fw-bold text-white'>
      <Navbar.Brand as={Link} to='/' className='px-5 fw-bold text-white'>
         React File Manager by Shivansh
      </Navbar.Brand>
      <Nav.Link as={Link} to='/user' className='border border-1 rounded p-1'>
        User
      </Nav.Link>
   </Navbar>
)

export default NavbarComponent
