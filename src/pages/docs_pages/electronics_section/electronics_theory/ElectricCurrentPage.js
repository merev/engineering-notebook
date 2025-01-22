import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleContent from '../../../../components/content/ArticleContent';
import './ElectricCurrentPage.css';

const ElectricCurrentPage = () => {
    return (
        <Container fluid className='main-section'>
            <ArticleContent />
        </Container>
    );
};

export default ElectricCurrentPage;