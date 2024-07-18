import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../Global.css"

export default function DefaultNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-primary">
            <Container>
                <Navbar.Brand href="#/" className='gameplanBrandName'>Gameplan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href='#/signin' className='m-3'>
                        <Button className='btn btn-secondary'>Sign in</Button>
                    </Nav.Link>
                    <Nav.Link href='#/signup' className='m-3'>
                        <Button className='btn btn-primary'>Sign up</Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}