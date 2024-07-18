import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Global.css"

export default function DefaultNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-primary">
            <Container>
                <Navbar.Brand href="#/" className='gameplanBrandName'>Gameplan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#/teams">Teams</Nav.Link>
                        <Nav.Link href="#/chat">Chat</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#/" style={{ textAlign: 'right' }}>Log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}