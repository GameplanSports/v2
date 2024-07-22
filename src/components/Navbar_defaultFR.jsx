import Container from 'react-bootstrap/Container';
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
                    <a href='#/' className='linkStyle'>English</a>
                    <Button className='btn btn-secondary m-3' href='#/signin'>Se connecter</Button>
                    <Button className='btn btn-primary m-3' href='#/signin'>Créer un compte</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}