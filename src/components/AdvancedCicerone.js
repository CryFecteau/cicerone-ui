import React from 'react';
import taps from '../assets/images/taps.jpg';
import { Card, Button, CardImg, CardHeader, CardText, CardGroup, CardSubtitle, CardBody, Row, Col } from 'reactstrap';
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
            <div className='container mt-5 mb-5'>
                <div className='media'>
                    <div className='media-body'>
                        <p className='text-center'>Those who achieve this certification possess expert knowledge of beer and excellent tasting ability. Such knowledge generally results from several years of additional study and tasting after achieving Certified Cicerone®. Well-prepared candidates will have excellent and extensive style knowledge, hands-on experience managing beer service, direct familiarity with brewing process and ingredients, and frequent and repeated experience in beer and food pairing.</p>
                    </div>
                    <img className='d-none d-md-block ml-3 home-img' src={taps} alt='beer taps' />
                </div>
            </div>
            <div className='container mt-4 mb-4'>
                <h5>Study Materials</h5>
                <p>Start your jounery by perparing for the Advanced Cicerone Exam</p>
                <Row className='mt-4 text-center' xs='4'>
                    <Col><Link to='/content'><Button outline color='success'><i className='fa fa-check-square fa-lg mr-3'></i>Quiz</Button></Link></Col>
                    <Col><Link to='/content'><Button outline color='success'><i className='fa fa-address-card fa-lg mr-3'></i>Flashcards</Button></Link></Col>
                    <Col><Link to='/content'><Button outline color='success'><i className='fa fa-list fa-lg mr-3' />Manual</Button></Link></Col>
                </Row>
            </div>
            <div className='container mt-5'>
                <h5 className='header-line'>Other Levels</h5>
                <CardGroup className='container mb-5 mt-4'>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center bg-info'>
                            <h5>Certified Beer Server</h5>
                        </CardHeader>
                        <CardImg top width='100%' src={bottle} alt='beer bottles' />
                        <CardBody className='d-flex flex-column'>
                            <CardSubtitle>Level 1</CardSubtitle>
                            <CardText>First-level certification for those who work with beer.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='beer-server'>Learn More</Link>
                        </CardBody>
                    </Card>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center bg-info'>
                            <h5>Certified Cicerone</h5>
                        </CardHeader>
                        <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                        <CardBody className='d-flex flex-column'>
                            <CardSubtitle>Level 2</CardSubtitle>
                            <CardText>Certification for professionals dedicated to beer.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='cicerone'>Learn More</Link>
                        </CardBody>
                    </Card>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center bg-info'>
                            <h5>Master Cicerone</h5>
                        </CardHeader>
                        <CardImg top width='100%' src={pairing} alt='pairing beer' />
                        <CardBody className='d-flex flex-column'>
                            <CardSubtitle>Level 4</CardSubtitle>
                            <CardText>The ultimate test of beer expertise.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='master-cicerone'>Learn More</Link>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>




    )
}