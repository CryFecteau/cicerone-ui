import React from 'react';
import beer from '../assets/images/beer.jpg';
import {
    Card, Button, CardImg, CardHeader, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col
} from 'reactstrap'; import servingBeer from '../assets/images/servingBeer.jpg';
import pairing from '../assets/images/pairing.jpg';
import tasting from '../assets/images/tasting.jpg';
import { Link } from 'react-router-dom';

export default function BeerServer() {
    return (
        <React.Fragment>
            <div className='container mt-4'>
                <h3 className='header-line'>
                    Beer Server
                </h3>
                <p className='text-center'>Level 1</p>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='media'>
                    <div className='media-body'>
                        <p className='text-center'>Certified Beer Servers become conversant in the language of beer, including key flavor words and core beer styles,  master the details of beer service, including glass preparation and proper pouring of both draft and bottled beers, and Learn the three most common ways the flavor of beer can be ruined after it leaves the brewery and what must be done to prevent this from happening.</p>
                    </div>
                    <img className='d-none d-md-block ml-3 home-img' src={beer} alt='logo' />
                </div>
            </div>
            <div className='container mt-4 mb-4'>
                <h5>Study Materials</h5>
                <p>Start your jounery by perparing for the Beer Server Exam</p>
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
                            <h5>Advanced Cicerone</h5>
                        </CardHeader>
                        <CardImg top width='100%' src={tasting} alt='beer tasting' />
                        <CardBody className='d-flex flex-column'>
                            <CardSubtitle>Level 3</CardSubtitle>
                            <CardText>A designation of distinctive expertise and tasting skill.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='advanced-cicerone'>Learn More</Link>
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