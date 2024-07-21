import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarDefault from '../components/Navbar_default';
import Footer from '../components/GameplanFooter';
import hockeyPhoto from '../assets/hockey-team.jpg';
import '../Global.css';

export default function Home() {
    
    return (
        <div style={{ minHeight: "100vh" }}>
            <NavbarDefault />
            
            <div className="container">
                {/*This segment contains the image with the text over it on the homepage*/}
                <div style={{ position: 'relative' }}>
                    <img src={hockeyPhoto} alt="Decorative image of professional hockey players" className='p-5' style={{ width: '100%', height: '600px', objectFit: 'cover' }}/>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '24px', background: 'rgba(15, 62, 103, 1)', padding: '40px' }}>
                        <h1 style={{ marginBottom: '0', fontSize: '2.5em'}}>Welcome to Gameplan!</h1>
                    </div>
                </div>
                
                {/* This segment contains the cards on the homepage */}
                <h2>Features</h2>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body className='cardStyle'>
                            <Card.Title>Teams</Card.Title>
                            <Card.Text>
                                Join, create and manage teams with ease with out new team manager.
                            </Card.Text>
                            <a href='#/signin'><Button className="btn btn-secondary">Explore</Button></a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body className='cardStyle'>
                            <Card.Title>Events</Card.Title>
                            <Card.Text>
                                View your team calendar events easily on your dashboard.
                            </Card.Text>
                            <a href='#/signin'><Button className="btn btn-secondary">Explore</Button></a>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body className='cardStyle'>
                            <Card.Title>Chat</Card.Title>
                            <Card.Text>
                                Chat with your coworkers to prepare for game time using our new chat.
                            </Card.Text>
                            <a href='#/signin'><Button className="btn btn-secondary">Explore</Button></a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}