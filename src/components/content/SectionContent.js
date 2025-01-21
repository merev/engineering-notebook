import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { sections } from '../sidebar/SidebarContent';
import './Content.css';
import { PrevAndNextNavButtons } from '../nav_buttons/PrevAndNextButtons';

const SectionContent = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Find the current section based on the path
    const currentSection = sections.find(section => {
        const sectionPath = `/docs/${section.title.toLowerCase().replace(/[' ']/g, '-')}`;
        return currentPath.startsWith(sectionPath);
    });

    if (!currentSection) {
        return <p>Section not found</p>;
    }

    return (
        <Card className="content-card">
            <Card.Body>
                <div className="breadcrumbs">
                    <Nav.Link as={Link} to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome} />
                    </Nav.Link>
                    <span className='arrows'> › </span>
                    <span className='current-page'>{currentSection.title}</span>
                </div>
                <Card.Title className='page-title'>{currentSection.title}</Card.Title>
                <Card.Text>{currentSection.description}</Card.Text>
                <div className="children-grid">
                    {currentSection.topics.map((topic, index) => (
                        <Nav.Link as={Link} to={`/docs/${currentSection.title.toLowerCase().replace(/[' ']/g, '-')}/${topic.title.toLowerCase().replace(/[' ']/g, '-')}`} key={index}>
                            <Card className="child-card">
                                <Card.Body>
                                    <Card.Title className='child-title'>
                                        <img src="/images/docs_pages/folder-icon.webp" alt="Folder Icon" className="child-icon" />
                                        {topic.title}
                                    </Card.Title>
                                    <Card.Text>{topic.articles.length} articles</Card.Text>
                                </Card.Body>
                            </Card>
                        </Nav.Link>
                    ))}
                </div>
                <PrevAndNextNavButtons />
            </Card.Body>
        </Card>
    );
};

export default SectionContent;
