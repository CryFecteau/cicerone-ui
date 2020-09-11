import React from 'react';
import hops from '../assets/images/hops.jpg';
import {
    Card, Button, CardImg, CardHeader, CardText, CardGroup,
    CardSubtitle, CardBody, Row, Col
} from 'reactstrap'; import servingBeer from '../assets/images/servingBeer.jpg';
import pairing from '../assets/images/pairing.jpg';
import tasting from '../assets/images/tasting.jpg';
import { Link } from 'react-router-dom';

export default function Cicerone() {
    return (
        <React.Fragment>
            <div className='container mt-4'>
                <h3 className='header-line'>
                    Cicerone
                </h3>
                <p className='text-center'>Level 2</p>
            </div>
            <div className='container mt-5 mb-5'>
                <div className='media'>
                    <div className='media-body'>
                        <p className='text-center'>Certified Cicerone is the second level of certification. Those who achieve this certification have a solid and well-rounded knowledge of beer and beer service as well as basic competence in assessing beer quality and identity by taste. The four-hour exam includes written, tasting, and demonstration portions. It is given more than 100 times each year at sites across the US and Canada and also at other international sites.</p>
                    </div>
                    <img className='d-none d-md-block ml-3 home-img' src={hops} alt='beer hops' />
                </div>
            </div>
            <div className='container mt-4 mb-4'>
                <h5>Study Materials</h5>
                <p>Start your jounery by perparing for the Cicerone Exam</p>
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
                        <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                        <CardBody className='d-flex flex-column'>
                            <CardSubtitle>Level 1</CardSubtitle>
                            <CardText>First-level certification for those who work with beer.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='beer-server'>Learn More</Link>
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