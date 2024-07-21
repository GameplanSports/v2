import NavbarLoggedIn from '../components/Navbar_logged_in';
import Footer from '../components/GameplanFooter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Global.css';

export default function CreateTeams() {
    return (
        <>
        <NavbarLoggedIn />

        <div className="container" style={{width:'60%'}}>
            {/* Back Button */}
            <div style={{ position: 'absolute', top: 0, left: 0, padding: '20px' }}>
                    <Button variant="secondary" href='#/'>Back</Button>
            </div>
            <h1 className='sectionTitle'>Create a team</h1>
            <Form>
                <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                    <p className='teamCreationInputDescriptors'>Hockey</p>
                    <Form.Control type="text" placeholder="Sport" />
                </Form.Group>
                <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                    <p className='teamCreationInputDescriptors'>Level</p>
                    <Form.Control type="text" placeholder="Level" />
                </Form.Group>
                <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                    <p className='teamCreationInputDescriptors'>Number of players</p>
                    <Form.Control type="number" placeholder="Number of players" />
                </Form.Group>
                <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                    <p className='teamCreationInputDescriptors'>Team name</p>
                    <Form.Control type="text" placeholder="Team Name" />
                </Form.Group>
                <Form.Group className="mb-3 py-3" controlId="exampleForm.ControlInput1">
                    <p className='teamCreationInputDescriptors'>Private Team</p>
                    <p className='teamCreationInputDescriptors' style={{opacity:'50%'}}>
                        If this box is checked, you will need to invite everyone to your team with a code that 
                        will be generated after you finish creating this team. 
                    </p>
                    <Form.Check type="switch" id="privateTeamSwitch" label="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <p className='teamCreationInputDescriptors'>Additional Details</p>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group>
                    <Button variant="primary" type="submit" style={{marginBottom:'3em'}} href='#/teams'> Create Team </Button>
                </Form.Group>
            </Form>
        </div>

        <Footer />
        </>
    )
}