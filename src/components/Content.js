import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Content() {
    return (
        <div className='container mt-5 mb-5'>
            <Card>
                <CardBody>
                    <CardTitle className='text-center'>COMING SOON!</CardTitle>
                    <CardText className='text-center'>Thank you for your interest in our study materials, we are currently working hard to give you the best experince.</CardText>
                    <Button className='m-2' outline color='info'><Link to='/'>Home</Link></Button>
                    <Button className='m-2' outline color='info'><Link to='/study-material'>Study Material</Link></Button>
                </CardBody>
            </Card>
        </div>
    )
}