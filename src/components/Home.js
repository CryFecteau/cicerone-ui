import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import servingBeer from '../assets/images/servingBeer.jpg';
import beerOpener from '../assets/images/beerOpener.jpg';
import pairing from '../assets/images/pairing.jpg';
import tasting from '../assets/images/tasting.jpg';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <React.Fragment>
            <div className='container mt-5 mb-5'>
                <h5 className='header-line'>Why Cicerone?</h5>
                <p className='text-center'>Becoming a Cicerone is more then just tasting beer and knowing what hop or malt was used. It is the ability to give the best quality beer and experince at every service occasion.</p>
            </div>
            <div className='container'>
                <h5 className='header-line'>Levels of Cicerone</h5>
                <CardGroup className='container'>
                    <Card>
                        <CardImg top width='100%' src={beerOpener} alt='opening beer' />
                        <CardBody>
                            <CardTitle className='text-center'>Certified Beer Server</CardTitle>
                            <CardSubtitle>Level 1</CardSubtitle>
                            <CardText >Great beer service begins with the fundamentals: beer clean glassware, a proper pour, and beer that hasn’t been ruined by improper handling.</CardText>
                            <Button outline color='warning'><Link to='beer-server'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                        <CardBody>
                            <CardTitle className='text-center'>Certified Cicerone</CardTitle>
                            <CardSubtitle>Level 2</CardSubtitle>
                            <CardText>Those who pursue a career in beer learn from many different sources and soon accumulate knowledge that sets them apart from those on the 'customer' side of the bar.</CardText>
                            <Button outline color='warning'><Link to='cicerone'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src={tasting} alt='beer tasting' />
                        <CardBody>
                            <CardTitle className='text-center'>Advanced Cicerone</CardTitle>
                            <CardSubtitle>Level 3</CardSubtitle>
                            <CardText>The 3rd-level rank of Advanced Cicerone was introduced in 2015 to distinguish those individuals who had advanced their knowledge to an expert level. </CardText>
                            <Button outline color='warning'><Link to='advanced-cicerone'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width='100%' src={pairing} alt='pairing beer' />
                        <CardBody>
                            <CardTitle className='text-center'>Master Cicerone</CardTitle>
                            <CardSubtitle>Level 4</CardSubtitle>
                            <CardText>The Master Cicerone exam challenges individuals to master every technical and aesthetic aspect of beer.</CardText>
                            <Button outline color='warning'><Link to='master-cicerone'>Learn More</Link></Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </div>
        </React.Fragment>
    );
}

export default Home;   