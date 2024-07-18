import NavbarLoggedIn from '../components/Navbar_logged_in';
import Footer from '../components/GameplanFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Global.css';

export default function Teams() {
    return (
        <div className='container' style={{ minHeight: "100vh" }}>
            <NavbarLoggedIn />
            <h1 className='sectionTitle'>My teams</h1>
            <Container>
                <Row className='mb-3'>
                    <Col className='col-4'>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                            <span class="input-group-text searchBarButton btn btn-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#faf9f9" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                                </svg>
                            </span>
                        </div>
                    </Col>
                    <Col className='col-1' style={{ textAlign: 'left' }}>
                        <button type="button" class="btn btn-secondary searchBarButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"></path>
                            </svg>
                        </button>
                    </Col>
                    <Col className='col-3'>
                    </Col>
                    <Col className='col-4' style={{textAlign:'right'}}>
                        <a href='#/createteam'>
                            <Button className="btn btn-primary">Create a team</Button>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-1'>League</Col>
                    <Col className='col-7'>Team</Col>
                    <Col className='col-1'>Level</Col>
                    <Col className='col-1'>Sport</Col>
                    <Col className='col-1'>Players</Col>
                    <Col className='col-1'></Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>NHL</Col>
                    <Col className='teamsTextEntries col-7'>Ottawa Senators</Col>
                    <Col className='teamsTextEntries col-1'>AAA</Col>
                    <Col className='teamsTextEntries col-1'>Hockey</Col>
                    <Col className='teamsTextEntries col-1'>21/22</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}><Button variant='danger' style={{width:'100%'}}>Leave</Button></Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>OTA</Col>
                    <Col className='teamsTextEntries col-7'>Super Cool Duo</Col>
                    <Col className='teamsTextEntries col-1'>B</Col>
                    <Col className='teamsTextEntries col-1'>Tennis</Col>
                    <Col className='teamsTextEntries col-1'>2/2</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}><Button variant='danger' style={{width:'100%'}}>Leave</Button></Col>
                </Row>
            </Container>

            <h1 className='sectionTitle'>Find a team</h1>
            <Container>
                <Row className='mb-3'>
                    <Col className='col-4'>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
                            <span class="input-group-text searchBarButton btn btn-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#faf9f9" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                                </svg>
                            </span>
                        </div>
                    </Col>
                    <Col className='col-1' style={{ textAlign: 'left' }}>
                        <button type="button" class="btn btn-secondary searchBarButton">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"></path>
                            </svg>
                        </button>
                    </Col>
                    <Col className='col-3' style={{textAlign:'left'}}>
                        <Button className="filterBody">Hockey
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" fill="currentColor" class="bi bi-x-lg filterXIcon" viewBox="0 2 16 18">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        </Button>
                    </Col>
                    <Col className='col-4'></Col>
                </Row>
                <Row>
                    <Col className='col-1'>League</Col>
                    <Col className='col-7'>Team</Col>
                    <Col className='col-1'>Level</Col>
                    <Col className='col-1'>Sport</Col>
                    <Col className='col-1'>Players</Col>
                    <Col className='col-1'></Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>NHL</Col>
                    <Col className='teamsTextEntries col-7'>Florida Panthers</Col>
                    <Col className='teamsTextEntries col-1'>A</Col>
                    <Col className='teamsTextEntries col-1'>Hockey</Col>
                    <Col className='teamsTextEntries col-1'>16/22</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}>
                        <Button variant='primary' className="btn btn-primary" style={{width:'100%'}}>Join</Button>
                    </Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>NHL</Col>
                    <Col className='teamsTextEntries col-7'>Edmonton Oilers</Col>
                    <Col className='teamsTextEntries col-1'>AA</Col>
                    <Col className='teamsTextEntries col-1'>Hockey</Col>
                    <Col className='teamsTextEntries col-1'>17/22</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}>
                        <Button variant='primary' className="btn btn-primary" style={{width:'100%'}}>Join</Button>
                    </Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>NHL</Col>
                    <Col className='teamsTextEntries col-7'>Florida Panthers</Col>
                    <Col className='teamsTextEntries col-1'>A</Col>
                    <Col className='teamsTextEntries col-1'>Hockey</Col>
                    <Col className='teamsTextEntries col-1'>16/22</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}>
                        <Button variant='primary' className="btn btn-primary" style={{width:'100%'}}>Join</Button>
                    </Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>NHL</Col>
                    <Col className='teamsTextEntries col-7'>Florida Panthers</Col>
                    <Col className='teamsTextEntries col-1'>A</Col>            
                    <Col className='teamsTextEntries col-1'>Hockey</Col>
                    <Col className='teamsTextEntries col-1'>16/22</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}>
                        <Button variant='primary' className="btn btn-primary" style={{width:'100%'}}>Join</Button>
                    </Col>
                </Row>
                <hr className='teamsLineBreak' />
                <Row>
                    <Col className='teamsTextEntries col-1'>NHL</Col>
                    <Col className='teamsTextEntries col-7'>Edmonton Oilers</Col>
                    <Col className='teamsTextEntries col-1'>AA</Col>
                    <Col className='teamsTextEntries col-1'>Hockey</Col>
                    <Col className='teamsTextEntries col-1'>17/22</Col>
                    <Col className='teamsTextEntries col-1' style={{ textAlign: 'right' }}>
                        <Button variant='primary' className="btn btn-primary" style={{width:'100%'}}>Join</Button>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}