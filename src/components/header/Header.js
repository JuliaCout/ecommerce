import { Fragment } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom'
import { loginWithGoogle, auth } from '../../firebase';

const Header = ({user}) => {
  const history = useHistory()
    return (
        <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container className="">
            <Navbar.Brand as={Link} to="/">E-Context</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {user && user.admin && (
                      <Nav.Link as={Link} to="/admin"><i className='fas fa-user'></i> Page d'Admin</Nav.Link>
                )}
                {
                  !user ? (
                    <Nav.Link as={Link} to="/login">Se Connecter</Nav.Link>
                  ) : (
                    <Fragment>

                      <Nav.Link>Bonjour {user.firstname}</Nav.Link>
                      <Nav.Link as={Link} to="/basket">Mon Panier<Badge>0</Badge> </Nav.Link>

                      <Nav.Link onClick={() => {
                        auth.signOut()
                        history.push('/')
                      }}>Se Déconnecter</Nav.Link>
                    </Fragment>
                  )
                }
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header