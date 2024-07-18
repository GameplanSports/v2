import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signin() {
    
    return (
        <div className="container" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="signInBackground">
                <h1 className='py-3'>Sign in to your account</h1>
                <h5>Sign in to access your dashboard and your teams</h5>
                <Form>
                    <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <a href="#/dashboard"><Button variant="primary" className='mb-3'>Sign in</Button></a>
                <p className='mb-3'>Don't have an account? <a href="#/signup">Sign up</a></p>
            </div>
        </div>
    )
}