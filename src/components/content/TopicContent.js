import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { sections } from '../sidebar/SidebarContent';
import './Content.css';
import { PrevAndNextNavButtons } from '../nav_buttons/PrevAndNextButtons';

const TopicContent = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Find the current section and topic based on the path
    let currentSection, currentTopic;

    for (const section of sections) {
        const sectionPath = `/docs/${section.title.toLowerCase().replace(/[' ']/g, '-')}`;
        if (currentPath.startsWith(sectionPath)) {
            currentSection = section;
            currentTopic = section.topics.find(topic => {
                const topicPath = `${sectionPath}/${topic.title.toLowerCase().replace(/[' ']/g, '-')}`;
                return currentPath.startsWith(topicPath);
            });
            break;
        }
    }

    if (!currentSection || !currentTopic) {
        return <p>Topic not found</p>;
    }

    return (
        <Card className="content-card">
            <Card.Body>
                <div className="breadcrumbs">
                    <Nav.Link as={Link} to="/" className="home-link">
                        <FontAwesomeIcon icon={faHome} />
                    </Nav.Link>
                    <span className="arrows"> › </span>
                    <Nav.Link as={Link} to={`/docs/${currentSection.title.toLowerCase().replace(/[' ']/g, '-')}`} className="section-link">
                        {currentSection.title}
                    </Nav.Link>
                    <span className="arrows"> › </span>
                    <span className="current-page">{currentTopic.title}</span>
                </div>
                <Card.Title className="page-title">{currentTopic.title}</Card.Title>
                <Card.Text>{currentTopic.description}</Card.Text>
                <div className="children-grid">
                    {currentTopic.articles.map((article, index) => (
                        <Nav.Link as={Link} to={article.link} key={index}>
                            <Card className="child-card">
                                <Card.Body>
                                    <Card.Title className="child-title">
                                        <img src="/images/docs_pages/article-icon.webp" alt="File Icon" className="child-icon" />
                                        {article.title}
                                    </Card.Title>
                                    <Card.Text>Read more</Card.Text>
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

export default TopicContent;
