import React from 'react';
import taps from '../assets/images/taps.jpg';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import servingBeer from '../assets/images/servingBeer.jpg';
import pairing from '../assets/images/pairing.jpg';
import bottle from '../assets/images/beerOpener.jpg';
import { Link } from 'react-router-dom';

export default function AdvancedCicerone() {
    return (
        <React.Fragment>
            <div className='container mt-4'>
                <h3 className='header-line'>
                    Advanced Cicerone
                </h3>
                <p className='text-center'>Level 3</p>
            </div>
            <div className='container'>

                <Card className='mt-4'>
                    <CardImg className='img' src={taps} alt='beer hops' />
                    <CardBody>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Velit dignissim sodales ut eu. Laoreet non curabitur gravida arcu ac tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</CardText>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Velit dignissim sodales ut eu. Laoreet non curabitur gravida arcu ac tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className='container mt-4 mb-4'>
                <h5>Study Materials</h5>
                <p>Start your jounery by perparing for the Advanced Cicerone Exam.</p>
                <Row className='mt-2 text-center' xs='4'>
                    <Col><Link to='/content'><Button outline color='success'><i class='fa fa-check-square fa-lg'></i>Quiz</Button></Link></Col>
                    <Col><Link to='/content'><Button outline color='success'><i class='fa fa-address-card fa-lg'></i>Flashcards</Button></Link></Col>
                    <Col><Link to='/content'><Button outline color='success'><i className='fa fa-list fa-lg' />Manual</Button></Link></Col>
                </Row>
            </div>
            <div className='container'>
                <h5 className='header-line'>Other Levels</h5>
                <CardGroup className='container'>
                    <Card>
                        <CardImg top width='100%' src={bottle} alt='serving beer' />
                        <CardBody>
                            <CardTitle className='text-center'>Certified Beer Server</CardTitle>
                            <CardSubtitle>Level 1</CardSubtitle>
                            <CardText>First-level certification for those who work with beer.</CardText>
                            <Button outline color='warning'><Link to='beer-server'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                        <CardBody>
                            <CardTitle className='text-center'>Certified Cicerone</CardTitle>
                            <CardSubtitle>Level 2</CardSubtitle>
                            <CardText>Certification for professionals dedicated to beer.</CardText>
                            <Button outline color='warning'><Link to='cicerone'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src={pairing} alt='pairing beer' />
                        <CardBody>
                            <CardTitle className='text-center'>Master Cicerone</CardTitle>
                            <CardSubtitle>Level 4</CardSubtitle>
                            <CardText>The ultimate test of beer expertise.</CardText>
                            <Button outline color='warning'><Link to='master-cicerone'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>




    )
}