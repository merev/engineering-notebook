import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicContent from '../../components/content/TopicContent';

const DocsTopicPage = () => {
    return (
        <Container fluid className='main-section'>
            <TopicContent />
        </Container>
    );
};

export default DocsTopicPage;