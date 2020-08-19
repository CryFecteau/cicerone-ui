import React from 'react';
import beer from '../assets/images/beer.jpg';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
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
            <div className='container'>

                <Card className='mt-4'>
                    <CardImg className='img' src={beer} alt='logo' />
                    <CardBody>
                        <CardText>Certified Beer Servers become conversant in the language of beer, including key flavor words and core beer styles,  master the details of beer service, including glass preparation and proper pouring of both draft and bottled beers, and Learn the three most common ways the flavor of beer can be ruined after it leaves the brewery and what must be done to prevent this from happening </CardText>
                    </CardBody>
                </Card>
            </div>
            <div className='container mt-4 mb-4'>
                <h5>Study Materials</h5>
                <p>Start your jounery by perparing for the Beer Server Exam.</p>
                <Row className='mt-2 text-center' xs='4'>
                    <Col><Link to='/content'><Button outline color='success'><i class='fa fa-check-square fa-lg'></i>Quiz</Button></Link></Col>
                    <Col><Link to='/content'><Button outline color='success'><i class='fa fa-address-card fa-lg'></i>Flashcards</Button></Link></Col>
                    <Col><Link to='/content'><Button outline color='success'><i className='fa fa-list fa-lg' />Manual</Button></Link></Col>
                </Row>
            </div>
            <div className='container'>
                <h5 className='header-line'>Other Levels</h5>
                <CardGroup className='container md-5'>
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