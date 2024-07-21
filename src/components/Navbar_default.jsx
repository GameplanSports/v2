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
                    <Button className='btn btn-secondary m-3' href='#/signin'>Sign in</Button>
                    <Button className='btn btn-primary m-3' href='#/signin'>Sign up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}