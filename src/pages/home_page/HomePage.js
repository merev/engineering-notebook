import React from 'react';
import { Container, Nav, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
import HomeSectionCard from '../../components/cards/sections_card/HomeSectionCard.js';

const HomePage = () => {

    return (
        <main>
            <Container fluid className="header-section">
                <h1 className="display-3 header-title">Kristian Merev</h1>
                <h4 className="header-subtitle">Engineering Notebook</h4>
                <div className="my-4">
                    <Nav.Link as={Link} to="/search">
                        <Button 
                            variant="light" 
                            size="lg" 
                            className="search-button"
                        >
                        Search
                        </Button>
                    </Nav.Link>
                </div>
            </Container>
            <Container fluid className="sections-container">
                <Row>
                    <HomeSectionCard/>
                </Row>
            </Container>
        </main>
    );
};

export default HomePage;