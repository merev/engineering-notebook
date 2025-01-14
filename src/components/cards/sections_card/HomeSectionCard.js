import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './HomeSectionCard.css';
import { sections } from './HomeSectionsContent.js';

const HomeSectionCard = () => {

    return (
        sections.map((section, index) => (
            <div key={index} className="col-6 d-flex justify-content-center p-0">
                <NavLink to={section.link} className='section-card-link flex-fill'>
                    <Card className='section-card'>
                        <Card.Img variant="top" src={section.image} className='section-card-image'/>
                            <Card.Body>
                                <Card.Title className='section-title'>{section.title}</Card.Title>
                                <Card.Text>{section.description}</Card.Text>
                            </Card.Body>
                    
                    </Card>
                    </NavLink>
            </div>
        ))
    );
};

export default HomeSectionCard;