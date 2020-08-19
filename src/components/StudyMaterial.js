import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
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
            <div className='text-center mt-4'>
                <h3 className='header-line mt-4'>
                    Study Material
            </h3>
            </div>
            <Tabs className='mt-4' defaultIndex={0}>
                <TabList>
                    <Tab>Beer Server</Tab>
                    <Tab>Cicerone</Tab>
                    <Tab>Advanced Cicerone</Tab>
                    <Tab>Master Cicerone</Tab>
                </TabList>
                <TabPanel>
                    <div className='text-center mt-4'>
                        <h3>Beer Server</h3>
                        <p>Level 1</p>
                    </div>
                    <div>
                        <h5>Overview:</h5>
                        <ul>
                            <li>Become conversant in the language of beer, including key flavor words and core beer styles</li>
                            <li>Master the details of beer service, including glass preparation and proper pouring of both draft and bottled beers</li>
                            <li>Learn the three most common ways the flavor of beer can be ruined after it leaves the brewery and what must be done to prevent this from happening</li>
                        </ul>
                        <h5>Prerequisites</h5>
                        <ul>
                            <li>Passion for beer</li>
                            <li>Legal drinking age</li>
                        </ul>
                    </div>
                    <div className='text-center'>10% Completed</div>
                    <Progress animated striped color='info' value={10} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={femaleServer} alt='female beer server' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Beer Server Manual</CardTitle>
                                <CardSubtitle>Level 1</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Beer Server Exam</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={servingBeer} alt='serving beer' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Beer Server Flashcards</CardTitle>
                                <CardSubtitle>Level 1</CardSubtitle>
                                <CardText>Prep and Review with Beer Server Flashcards</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={bottle} alt='beer bottles' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Beer Server Quiz</CardTitle>
                                <CardSubtitle>Level 1</CardSubtitle>
                                <CardText>Test your knowledge and take the Beer Server Quiz</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <div className='text-center mt-4'>
                        <h3>Cicerone</h3>
                        <p>Level 2</p>
                    </div>
                    <div>
                        <h5>Overview:</h5>
                        <ul>
                            <li>Those who achieve this certification have a solid and well-rounded knowledge of beer and beer service as well as basic competence in assessing beer quality and identity by taste.</li>
                        </ul>
                        <h5>Prerequisites</h5>
                        <ul>
                            <li>Passed the Certified Beer Server Exam</li>
                            <li>Legal drinking age</li>
                        </ul>
                    </div>
                    <div className='text-center'>5% Completed</div>
                    <Progress animated striped color='info' value={5} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={pouring} alt='pouring pairing' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Cicerone Manual</CardTitle>
                                <CardSubtitle>Level 2</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Certified Cicerone Exam</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={tasting} alt='tasting beer' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Cicerone Flashcards</CardTitle>
                                <CardSubtitle>Level 2</CardSubtitle>
                                <CardText>Prep and Review with Cicerone Flashcards</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={taps} alt='beer taps' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Cicerone Quiz</CardTitle>
                                <CardSubtitle>Level 2</CardSubtitle>
                                <CardText>Test your knowledge and take the Cicerone Quiz</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <div className='text-center mt-4'>
                        <h3>Advanced Cicerone</h3>
                        <p>Level 3</p>
                    </div>
                    <div>
                        <h5>Overview:</h5>
                        <ul>
                            <li>Those who achieve this certification possess expert knowledge of beer and excellent tasting ability.</li>
                            <li>Well-prepared candidates will have excellent and extensive style knowledge, hands-on experience managing beer service, direct familiarity with brewing process and ingredients, and frequent and repeated experience in beer and food pairing.</li>
                        </ul>
                        <h5>Prerequisites</h5>
                        <ul>
                            <li>Passed the Certified Beer Server and Cicerone Exam</li>
                            <li>Legal drinking age</li>
                        </ul>
                    </div>
                    <div className='text-center'>0% Completed</div>
                    <Progress animated striped color='info' value={0} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={tastingTable} alt='beer tasting' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Advanced Cicerone Manual</CardTitle>
                                <CardSubtitle>Level 3</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Advanced Cicerone Exam</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={beer} alt='glases of beer' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Advanced Cicerone Flashcards</CardTitle>
                                <CardSubtitle>Level 3</CardSubtitle>
                                <CardText>Prep and Review with Advanced Cicerone Flashcards</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={pairing} alt='pairing beer' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Advanced Cicerone Quiz</CardTitle>
                                <CardSubtitle>Level 3</CardSubtitle>
                                <CardText>Test your knowledge and take the Advanced Cicerone Quiz</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
                <TabPanel>
                    <div className='text-center mt-4'>
                        <h3>Master Cicerone</h3>
                        <p>Level 4</p>
                    </div>
                    <div>
                        <h5>Overview:</h5>
                        <ul>
                            <li>In-depth theoretical and hands-on knowledge of draft systems is required, with a special emphasis on troubleshooting and draft system design</li>
                            <li>Mastery of beer styles is expected with detailed knowledge of the current BJCP guidelines and familiarity with other style systems as well</li>
                            <li>Tasting experience with a wide range of beers and styles is a must. Candidates should be familiar with a catalog of commercial examples for each style and have the ability to describe their flavors</li>
                        </ul>
                        <h5>Prerequisites</h5>
                        <ul>
                            <li>Passed the Certified Beer Server, Cicerone, and Advanced Cicerone Exam</li>
                            <li>Legal drinking age</li>
                        </ul>
                    </div>
                    <div className='text-center'>0% Completed</div>
                    <Progress animated striped color='info' value={0} />
                    <CardGroup className='container  mb-5'>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={barley} alt='beer tasting' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Master Cicerone Manual</CardTitle>
                                <CardSubtitle>Level 4</CardSubtitle>
                                <CardText>Gain the knowledge to pass the Master Cicerone Exam</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Study</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={hops} alt='serving beer' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Master Cicerone Flashcards</CardTitle>
                                <CardSubtitle>Level 4</CardSubtitle>
                                <CardText>Prep and Review with Master Cicerone Flashcards</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Review</Link></Button>
                            </CardBody>
                        </Card>
                        <Card className='m-2'>
                            <CardImg top width='100%' src={pairing} alt='pairing beer' />
                            <CardBody className='d-flex flex-column'>
                                <CardTitle className='text-center'>Master Cicerone Quiz</CardTitle>
                                <CardSubtitle>Level 4</CardSubtitle>
                                <CardText>Test your knowledge and take the Master Cicerone Quiz</CardText>
                                <Button className='mt-auto' outline color='info'><Link to='content'>Start</Link></Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </TabPanel>
            </Tabs>
        </div>
    )
}