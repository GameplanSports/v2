import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarDefaultFR from '../components/Navbar_defaultFR';
import FooterFR from '../components/GameplanFooterFR';
import hockeyPhoto from '../assets/hockey-team.jpg';
import '../Global.css';

export default function HomeFR() {
    
    return (
        <div style={{ minHeight: "100vh" }}>
            <NavbarDefaultFR />
            
            <div className="container">
                {/*This segment contains the image with the text over it on the homepage*/}
                <div style={{ position: 'relative' }}>
                    <img src={hockeyPhoto} alt="Image décorative de joueurs de hockey" className='p-5' style={{ width: '100%', height: '600px', objectFit: 'cover' }}/>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', fontSize: '24px', background: 'rgba(15, 62, 103, 1)', padding: '40px' }}>
                        <h1 style={{ marginBottom: '0', fontSize: '2.5em'}}>Bienvenue à Gameplan!</h1>
                    </div>
                </div>
                
                {/* This segment contains the cards on the homepage */}
                <h2>Options</h2>
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body className='cardStyle'>
                            <Card.Title>Équipes</Card.Title>
                            <Card.Text id='teamsExplanation'>
                                Vous pouvez rejoindre, créer et gérer des équipes facilement avec notre nouveau gestionnaire d'équipes.
                            </Card.Text>
                            <Button className="btn btn-secondary" href='#/signin' role="button" aria-describedby="teamsExplanation">Explorer</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body className='cardStyle'>
                            <Card.Title>Évenements</Card.Title>
                            <Card.Text id='dashboardExplanation'>
                                Visualisez facilement les événements de votre calendrier d'équipe sur le tableau de bord.
                            </Card.Text>
                            <Button className="btn btn-secondary" href='#/signin' role="button" aria-describedby="dashboardExplanation">Explorer</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                        <Card.Body className='cardStyle'>
                            <Card.Title>Chat</Card.Title>
                            <Card.Text id='chatExplanation'>
                                Communiquez avec vos coéquipiers pour vous préparer pour le jeu en utilisant notre nouveau chat.
                            </Card.Text>
                            <Button className="btn btn-secondary" href='#/signin' role="button" aria-describedby="chatExplanation">Explorer</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <FooterFR />
        </div>
    )
}