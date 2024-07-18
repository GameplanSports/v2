import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
    
    return (
        <div className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{width: '50%'}}>
                <h1 className='py-3'>Create an account</h1>
                <h5>Enter your email to sign up for this app</h5>
                <Form>
                    <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>
                </Form>
                <a href="#/dashboard"><Button variant="primary" className='mb-3'>Sign up</Button></a>
                <p className='mb-3'>Already have an account? <a href="#/signin">Sign in</a></p>
            </div>
        </div>
    )
}