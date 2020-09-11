import React from 'react';
import taps from '../assets/images/taps.jpg';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardHeader,
    CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import servingBeer from '../assets/images/servingBeer.jpg';
import tasting from '../assets/images/tasting.jpg';
import bottle from '../assets/images/beerOpener.jpg';
import { Link } from 'react-router-dom';

export default function MasterCicerone() {
    return (
        <React.Fragment>
            <div className='container'>
                <h3 className='header-line mt-4'>
                    Master Cicerone
                </h3>
                <p className='text-center'>Level 4</p>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='media'>
                    <div className='media-body'>
                        <p className='text-center'>The Master Cicerone exam challenges individuals to master every technical and aesthetic aspect of beer. Candidates must converse with professional brewers and chefs as a peer, demonstrate the tasting ability of a seasoned quality control panel member and yet also speak with consumers using easy-to-understand but vividly descriptive language. Those who possess these skills serve the industry as consultants, educators, and knowledge leaders in various organizations.</p>
                    </div>
                    <img className='d-none d-md-block ml-3 home-img' src={taps} alt='beer hops' />
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
                            <h5>Advanced Cicerone</h5>
                        </CardHeader>
                        <CardImg top width='100%' src={tasting} alt='beer tasting' />
                        <CardBody className='d-flex flex-column'>
                            <CardSubtitle>Level 3</CardSubtitle>
                            <CardText>A designation of distinctive expertise and tasting skill.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='advanced-cicerone'>Learn More</Link>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>
    )
}