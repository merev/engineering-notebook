import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionContent from '../../../components/content/SectionContent';

const ElectronicsSectionPage = () => {
    return (
        <Container fluid className='main-section'>
            <SectionContent />
        </Container>
    );
};

export default ElectronicsSectionPage;