import NavbarLoggedIn from '../components/Navbar_logged_in';
import Footer from '../components/GameplanFooter';
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Chat() {
    return (
        <div className="container" style={{ minHeight: "100vh" }}>
            <NavbarLoggedIn />
            
            
            <MDBContainer fluid className="py-5">
            <h1 className='sectionTitle' style={{paddingTop:'0px'}}>Your chats</h1>
                <MDBRow>
                    <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">

                    <MDBCard>
                        <MDBCardBody className='correctBackgroundColor'>
                        <MDBTypography listUnStyled className="mb-0" >
                            <li
                            className="p-2 border-bottom"
                            style={{ backgroundColor: "#eee" }}
                            >
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">John Doe</p>
                                    <p className="small chatText">
                                    Hey, how are you?
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge float-end" style={{backgroundColor:'#941C2F'}}>1</span>
                                </div>
                            </a>
                            </li>
                            <li className="p-2 border-bottom">
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">Danny Smith</p>
                                    <p className="small chatText">
                                    Yep. I can't wait.
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                </div>
                            </a>
                            </li>
                            <li className="p-2 border-bottom">
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">Alex Steward</p>
                                    <p className="small chatText">
                                    I'll be there in 20.
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                                </div>
                            </a>
                            </li>
                            <li className="p-2 border-bottom">
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">Ashley Olsen</p>
                                    <p className="small chatText">
                                    You still want those tickets?
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                                </div>
                            </a>
                            </li>
                            <li className="p-2 border-bottom">
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">Kate Moss</p>
                                    <p className="small chatText">
                                    Perfect, thank you!
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">2 days ago</p>
                                </div>
                            </a>
                            </li>
                            <li className="p-2 border-bottom">
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">Lara Croft</p>
                                    <p className="small chatText">
                                    Wow that's great!
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">4 days ago</p>
                                </div>
                            </a>
                            </li>
                            <li className="p-2">
                            <a href="#/chat" className="d-flex justify-content-between" style={{textDecoration:'none'}}>
                                <div className="d-flex flex-row">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                    alt="avatar"
                                    className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                                    width="60"
                                />
                                <div className="pt-1">
                                    <p className="fw-bold mb-0 chatPersonName">Brad Pitt</p>
                                    <p className="small chatText">
                                    I still can't blieve that happened.
                                    </p>
                                </div>
                                </div>
                                <div className="pt-1">
                                <p className="small text-muted mb-1">5 days ago</p>
                                <span className="text-muted float-end">
                                    <MDBIcon fas icon="check" />
                                </span>
                                </div>
                            </a>
                            </li>
                        </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="7" xl="8">
                    <MDBTypography listUnStyled>
                        <li className="d-flex justify-content-between mb-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                            width="60"
                        />
                        <MDBCard>
                            <MDBCardHeader className="d-flex justify-content-between p-3">
                            <p className="fw-bold mb-0 chatPersonName">Brad Pitt</p>
                            <p className="text-muted small mb-0">
                                <MDBIcon far icon="clock" /> 15 mins ago
                            </p>
                            </MDBCardHeader>
                            <MDBCardBody>
                            <p className="mb-0 chatText">
                                Hey, just checking in. Do you think you can make it to the
                                game on Friday? If not, it's totally fine. Just let me know
                                so I can find a replacement.
                            </p>
                            </MDBCardBody>
                        </MDBCard>
                        </li>
                        <li class="d-flex justify-content-between mb-4">
                        <MDBCard className="w-100">
                            <MDBCardHeader className="d-flex justify-content-between p-3">
                            <p class="fw-bold mb-0 chatPersonName">You</p>
                            <p class="text-muted small mb-0">
                                <MDBIcon far icon="clock" /> 13 mins ago
                            </p>
                            </MDBCardHeader>
                            <MDBCardBody>
                            <p className="mb-0 chatText">
                                Hey! I'm not sure if I can make it. I'll have to check when I get home. I'll let you 
                                know as soon as I can.
                            </p>
                            </MDBCardBody>
                        </MDBCard>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                            width="60"
                        />
                        </li>
                        <li className="d-flex justify-content-between mb-4">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            alt="avatar"
                            className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                            width="60"
                        />
                        <MDBCard>
                            <MDBCardHeader className="d-flex justify-content-between p-3">
                            <p className="fw-bold mb-0 chatPersonName">Brad Pitt</p>
                            <p className="text-muted small mb-0">
                                <MDBIcon far icon="clock" /> 10 mins ago
                            </p>
                            </MDBCardHeader>
                            <MDBCardBody>
                            <p className="mb-0 chatText">
                                Ok perfect thanks. Also, don't forget that this next Saturday we have the
                                tournament. Hopefully you can make it to that. We need our big goal scorer!
                            </p>
                            </MDBCardBody>
                        </MDBCard>
                        </li>
                        <li className='mb-3'>
                            <Container>
                                <Row>
                                    <Col className="col-10">
                                        <MDBTextArea id="textAreaExample" rows={1} />
                                    </Col>
                                    <Col className='col-2'>
                                        <Button color='primary' style={{width:'100%'}}> Send
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" fill="currentColor" class="bi bi-send" viewBox="0 2 16 14">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                            </svg>
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                    </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </div>
    )
}