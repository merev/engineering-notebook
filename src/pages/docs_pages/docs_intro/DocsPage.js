import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleCard from '../../../components/cards/article_card/ArticleCard';
import './DocsPage.css';

const DocsPage = () => {
    const docs = [
        {
            title: 'Getting Started with Electronics',
            description: 'An introductory guide to getting started with electronics.',
            link: '/docs/getting-started'
        },
        {
            title: 'Advanced Circuit Design',
            description: 'A guide to advanced circuit design techniques.',
            link: '/docs/advanced-circuit-design'
        },
        {
            title: 'Microcontroller Programming',
            description: 'Learn how to program microcontrollers for various applications.',
            link: '/docs/microcontroller-programming'
        },
        {
            title: 'PCB Design',
            description: 'A comprehensive guide to designing printed circuit boards (PCBs).',
            link: '/docs/pcb-design'
        }
    ];

    return (
        <Container fluid className='docs-page'>
            <Row>
                <Col md={9} className="main-section p-3">
                    <h1>Introduction</h1>
                    <Row>
                        {docs.map((doc, index) => (
                            <Col md={4} key={index} className="mb-3">
                                <ArticleCard 
                                    title={doc.title}
                                    description={doc.description}
                                    link={doc.link}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default DocsPage;