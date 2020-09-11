import React from 'react';
import {
    Card, CardImg, CardHeader, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import servingBeer from '../assets/images/servingBeer.jpg';
import beerOpener from '../assets/images/beerOpener.jpg';
import pairing from '../assets/images/pairing.jpg';
import tasting from '../assets/images/tasting.jpg';
import pouring from '../assets/images/pouring.jpg';
import femaleServer from '../assets/images/femaleServer.jpg'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <React.Fragment>
            <div className='container mt-5 mb-5'>
                <h4 className='header-line'>What is a Cicerone?</h4>
                <div className='media mt-5'>
                    <div className='media-body'>
                        <p className='text-center pt-md-5'>The word Cicerone (sis-uh-rohn) designates hospitality professionals with proven experience in selecting, acquiring and serving today's wide range of beers.</p>
                    </div>
                    <img className='d-none d-md-block ml-3 home-img' src={pouring} alt='beer tasting' />
                </div>
            </div>
            <div className='container mt-5 mb-5'>
                <h4 className='header-line'>Why Become a Cicerone?</h4>
                <div className='media mt-5'>
                    <img className='d-none d-md-block mr-3 home-img' src={femaleServer} alt='serving beer' />
                    <div className='media-body'>
                        <p className='text-center pt-md-5'>Becoming a Cicerone is more then just tasting beer and knowing what hop or malt was used. It is the ability to give the best quality beer and experince at every service occasion.</p>
                    </div>
                </div>
            </div>
            <div className='container mb-5 '>
                <h4 className='header-line mb-5'>Levels of Cicerone</h4>
                <CardGroup className='container mt-3'>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center'>
                            <h5>Certified Beer Server</h5>
                            <CardSubtitle className='text-center'>Level 1</CardSubtitle>
                        </CardHeader>
                        <CardImg top width='100%' src={beerOpener} alt='opening beer' />
                        <CardBody className='d-flex flex-column'>
                            <CardText >Great beer service begins with the fundamentals: beer clean glassware, a proper pour, and beer that hasn’t been ruined by improper handling.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='beer-server'>Learn More</Link>
                        </CardBody>
                    </Card>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center'>
                            <h5>Certified Cicerone</h5>
                            <CardSubtitle className='text-center'>Level 2</CardSubtitle>
                        </CardHeader>
                        <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                        <CardBody className='d-flex flex-column'>
                            <CardText>Those who pursue a career in beer learn from many different sources and soon accumulate knowledge that sets them apart from those on the 'customer' side of the bar.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='cicerone'>Learn More</Link>
                        </CardBody>
                    </Card>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center'>
                            <h5>Advanced Cicerone</h5>
                            <CardSubtitle className='text-center'>Level 3</CardSubtitle>
                        </CardHeader>
                        <CardImg top width='100%' src={tasting} alt='beer tasting' />
                        <CardBody className='d-flex flex-column'>
                            <CardText>The 3rd-level rank of Advanced Cicerone was introduced in 2015 to distinguish those individuals who had advanced their knowledge to an expert level. </CardText>
                            <Link className='btn btn-outline-info mt-auto' to='advanced-cicerone'>Learn More</Link>
                        </CardBody>
                    </Card>
                    <Card style={{ borderRadius: '10px' }} className='m-2 cards'>
                        <CardHeader style={{ borderRadius: '10px 10px 0 0' }} className='text-center'>
                            <h5>Master Cicerone</h5>
                            <CardSubtitle className='text-center'>Level 4</CardSubtitle>
                        </CardHeader>
                        <CardImg top width='100%' src={pairing} alt='pairing beer' />
                        <CardBody className='d-flex flex-column'>
                            <CardText>The Master Cicerone exam challenges individuals to master every technical and aesthetic aspect of beer.</CardText>
                            <Link className='btn btn-outline-info mt-auto' to='master-cicerone'>Learn More</Link>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>
    );
}

export default Home;   