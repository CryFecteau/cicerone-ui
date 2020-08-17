import React from 'react';
import taps from '../assets/images/taps.jpg';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
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
            <div className='container'>

                <Card className='mt-4'>
                    <CardImg className='img' src={taps} alt='beer hops' />
                    <CardBody>
                        <CardText>The Master Cicerone exam challenges individuals to master every technical and aesthetic aspect of beer. Candidates must converse with professional brewers and chefs as a peer, demonstrate the tasting ability of a seasoned quality control panel member and yet also speak with consumers using easy-to-understand but vividly descriptive language. Those who possess these skills serve the industry as consultants, educators, and knowledge leaders in various organizations.</CardText>
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
                <CardGroup className='container mb-5'>
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
                        <CardImg top width='100%' src={tasting} alt='beer tasting' />
                        <CardBody>
                            <CardTitle className='text-center'>Advanced Cicerone</CardTitle>
                            <CardSubtitle>Level 3</CardSubtitle>
                            <CardText>A designation of distinctive expertise and tasting skill.</CardText>
                            <Button outline color='warning'><Link to='advanced-cicerone'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>
    )
}