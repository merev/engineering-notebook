import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { sections } from '../sidebar/SidebarContent';
import './SectionContent.css';

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

    // Find the next section based on the current section
    const currentIndex = sections.indexOf(currentSection);
    let nextSection = null;

    if (currentIndex !== -1) {
        if (currentSection.topics.length > 0) {
            nextSection = {
                title: currentSection.topics[0].title,
                path: `/docs/${currentSection.title.toLowerCase().replace(/[' ']/g, '-')}/${currentSection.topics[0].title.toLowerCase().replace(/[' ']/g, '-')}`
            };
        } else if (currentIndex < sections.length - 1) {
            nextSection = {
                title: sections[currentIndex + 1].title,
                path: `/docs/${sections[currentIndex + 1].title.toLowerCase().replace(/[' ']/g, '-')}`
            };
        }
    }

    return (
        <Card className="section-content-card">
            <Card.Body>
                <Card.Title className='section-title'>{currentSection.title}</Card.Title>
                <Card.Text>{currentSection.description}</Card.Text>
                <div className="topics-grid">
                    {currentSection.topics.map((topic, index) => (
                        <Nav.Link as={Link} to={`/docs/${currentSection.title.toLowerCase().replace(/[' ']/g, '-')}/${topic.title.toLowerCase().replace(/[' ']/g, '-')}`} key={index}>
                            <Card className="topic-card">
                                <Card.Body>
                                    <Card.Title className='topic-title'>
                                        <img src="/images/docs_pages/folder-icon.webp" alt="Folder Icon" className="folder-icon" />
                                        {topic.title}
                                    </Card.Title>
                                    <Card.Text>{topic.articles.length} articles</Card.Text>
                                </Card.Body>
                            </Card>
                        </Nav.Link>
                    ))}
                </div>
                {nextSection && (
                    <NavLink as={Link} to={nextSection.path} className='navlink'>
                        <Card className="next-button">
                            <Card.Text className='next-button-next'>Next</Card.Text>
                            <Card.Text className='next-button-text'>{nextSection.title} »</Card.Text>
                        </Card>
                    </NavLink>
                )}
            </Card.Body>
        </Card>
    );
};

export default SectionContent;
