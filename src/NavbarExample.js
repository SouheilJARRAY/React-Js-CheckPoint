import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ReactJS CheckPoint</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/SignIn">sign-in</Nav.Link>
            <Nav.Link href="/LogIn" to="/LogIn">log-in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}

export default NavbarExample;
