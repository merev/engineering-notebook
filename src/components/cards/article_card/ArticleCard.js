import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './ArticleCard.css';

const ArticleCard = ({ title, description, link }) => {

    return (
            <Card 
                className="article-card flex-fill"
            >
                <NavLink to={link} style={{ textDecoration: 'none', color:"inherit"}}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                </NavLink>
            </Card>
    );
};

export default ArticleCard;