import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import bottle from '../assets/images/beerOpener.jpg';
import taps from '../assets/images/taps.jpg';
import pairing from '../assets/images/pairing.jpg';
import pouring from '../assets/images/pouring.jpg';
import tastingTable from '../assets/images/tastingTable.jpg';
import beer from '../assets/images/beer.jpg';
import hops from '../assets/images/hops.jpg';
import tasting from '../assets/images/tasting.jpg';
import servingBeer from '../assets/images/servingBeer.jpg';
import femaleServer from '../assets/images/femaleServer.jpg';
import barley from '../assets/images/barley.jpg';

export default function StudyMaterial() {
    return (
        <div className='container'>
            <h3 className='header-line mt-4'>
                Study Material
            </h3>
            <h6>Select Level:</h6>
            <Tabs>
                <TabList id='tabs'>
                    <Tab>Beer Server</Tab>
                    <Tab>Cicerone</Tab>
                    <Tab>Advanced Cicerone</Tab>
                    <Tab>Master Cicerone</Tab>
                </TabList>

                <TabPanel>
                    <h3>Beer Server</h3>
                    <p>Level 1</p>
                    <div className='text-center'>10% Completed</div>
                    <Progress animated striped color='info' value={10} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={bottle} alt='serving beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Beer Server Quiz</CardTitle>
                                <CardSubtitle>Level 1</CardSubtitle>
                                <CardText>Test your knowledge and take the Beer Server Quiz</CardText>
                                <Button outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Beer Server Flashcards</CardTitle>
                                <CardSubtitle>Level 1</CardSubtitle>
                                <CardText>Prep and Review with Beer Server Flashcards</CardText>
                                <Button outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={femaleServer} alt='beer tasting' />
                            <CardBody>
                                <CardTitle className='text-center'>Beer Server Manual</CardTitle>
                                <CardSubtitle>Level 1</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Beer Server Exam</CardText>
                                <Button outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <h3>Cicerone</h3>
                    <p>Level 2</p>
                    <div className='text-center'>5% Completed</div>
                    <Progress animated striped color='info' value={5} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={taps} alt='beer taps' />
                            <CardBody>
                                <CardTitle className='text-center'>Cicerone Quiz</CardTitle>
                                <CardSubtitle>Level 2</CardSubtitle>
                                <CardText>Test your knowledge and take the Cicerone Quiz</CardText>
                                <Button outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={tasting} alt='pouring beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Cicerone Flashcards</CardTitle>
                                <CardSubtitle>Level 2</CardSubtitle>
                                <CardText>Prep and Review with Cicerone Flashcards</CardText>
                                <Button outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={pouring} alt='beer pairing' />
                            <CardBody>
                                <CardTitle className='text-center'>Cicerone Manual</CardTitle>
                                <CardSubtitle>Level 2</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Certified Cicerone Exam</CardText>
                                <Button outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <h3>Advanced Cicerone</h3>
                    <p>Level 3</p>
                    <div className='text-center'>0% Completed</div>
                    <Progress animated striped color='info' value={0} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={pairing} alt='pouring beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Advanced Cicerone Quiz</CardTitle>
                                <CardSubtitle>Level 3</CardSubtitle>
                                <CardText>Test your knowledge and take the Advanced Cicerone Quiz</CardText>
                                <Button outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={beer} alt='serving beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Advanced Cicerone Flashcards</CardTitle>
                                <CardSubtitle>Level 3</CardSubtitle>
                                <CardText>Prep and Review with Advanced Cicerone Flashcards</CardText>
                                <Button outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={tastingTable} alt='beer tasting' />
                            <CardBody>
                                <CardTitle className='text-center'>Advanced Cicerone Manual</CardTitle>
                                <CardSubtitle>Level 3</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Advanced Cicerone Exam</CardText>
                                <Button outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <h3>Master Cicerone</h3>
                    <p>Level 4</p>
                    <div className='text-center'>0% Completed</div>
                    <Progress animated striped color='info' value={0} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={pairing} alt='pairing beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Master Cicerone Quiz</CardTitle>
                                <CardSubtitle>Level 4</CardSubtitle>
                                <CardText>Test your knowledge and take the Master Cicerone Quiz</CardText>
                                <Button outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={hops} alt='serving beer' />
                            <CardBody>
                                <CardTitle className='text-center'>Master Cicerone Flashcards</CardTitle>
                                <CardSubtitle>Level 4</CardSubtitle>
                                <CardText>Prep and Review with Master Cicerone Flashcards</CardText>
                                <Button outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={barley} alt='beer tasting' />
                            <CardBody>
                                <CardTitle className='text-center'>Master Cicerone Manual</CardTitle>
                                <CardSubtitle>Level 4</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Master Cicerone Exam</CardText>
                                <Button outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
            </Tabs>
        </div>
    )
}