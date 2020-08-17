import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

export default function About() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Velit dignissim sodales ut eu. Laoreet non curabitur gravida arcu ac tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-info text-white"><h3>Our Jounery</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">April 15, 2012</dd>
                                <dt className="col-6">No. of Certified Cicerones</dt>
                                <dd className="col-6">5693</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Avrage Rating</dt>
                                <dd className="col-6">4.75/5</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3 mb-4">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">Beer, if drunk in moderation, softens the temper, cheers the spirit and promotes health</p>
                                <footer className="blockquote-footer">Thomas Jefferson,{' '}
                                    <cite href='https://firstwefeast.com/drink/beer-quotes-from-famous-drinkers/' title="Source Title">firstwefeast.com/drink/beer-quotes-from-famous-drinkers</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}