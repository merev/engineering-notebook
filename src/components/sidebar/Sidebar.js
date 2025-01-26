
import React, { useState, useEffect } from 'react';
import { Button, Card, Collapse, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { sections } from './SidebarContent';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({});
    const [openTopics, setOpenTopics] = useState({});
    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        // Scroll to top when the path changes
        window.scrollTo(0, 0);
        
        // Function to expand sections and topics based on the currentPath
        const initializeOpenStates = () => {
            const newOpenSections = {};
            const newOpenTopics = {};

            sections.forEach((section, sectionIndex) => {
                const sectionPath = `/docs/${section.title.toLowerCase().replace(/[' ']/g, '-').replace(/[,']/g, '')}`;
                const isSectionActive = section.topics.some((topic) => {
                    const topicPath = `${sectionPath}/${topic.title
                        .toLowerCase()
                        .replace(/[' ']/g, '-')
                        .replace(/[,']/g, '')}`;

                    const isTopicActive = currentPath.startsWith(topicPath);
                    const isArticleActive = topic.articles.some((article) =>
                        currentPath.startsWith(
                            `${topicPath}/${article.title
                                .toLowerCase()
                                .replace(/[' ']/g, '-')
                                .replace(/[,']/g, '')}`
                        )
                    );

                    // Expand the topic if active
                    if (isTopicActive || isArticleActive) {
                        newOpenTopics[`${sectionIndex}-${section.topics.indexOf(topic)}`] = true;
                    }

                    return isTopicActive || isArticleActive;
                });

                // Expand the section if any topic or article within it is active
                if (isSectionActive) {
                    newOpenSections[sectionIndex] = true;
                }
            });

            setOpenSections(newOpenSections);
            setOpenTopics(newOpenTopics);
        };

        initializeOpenStates();
    }, [currentPath]);

    const toggleSection = (sectionIndex) => {
        setOpenSections((prev) => ({
            ...prev,
            [sectionIndex]: !prev[sectionIndex],
        }));
    };

    const toggleTopic = (topicIndex) => {
        setOpenTopics((prev) => ({
            ...prev,
            [topicIndex]: !prev[topicIndex],
        }));
    };

    const isArticleActive = (articlePath) => currentPath === articlePath;

    return (
        <div className="sidebar-container">
            {/* Introduction */}
            <Nav.Link as={Link} to="/docs/intro">
                <Card
                    className={`${
                        currentPath === '/docs/intro' ? 'sidebar-selected' : ''
                    } sidebar-introduction`}
                >
                    <Card.Body className="card-body">
                        <p className="m-0">Introduction</p>
                    </Card.Body>
                </Card>
            </Nav.Link>

            {/* Sections */}
            {sections.map((section, sectionIndex) => {
                const sectionPath = `/docs/${section.title.toLowerCase().replace(/[' ']/g, '-').replace(/[,']/g, '')}`;
                const isSectionActive = openSections[sectionIndex];

                return (
                    <div key={sectionIndex}>
                        <Card
                            className={`${
                                isSectionActive && currentPath !== sectionPath
                                    ? 'sidebar-parent'
                                    : ''
                            } ${
                                currentPath === sectionPath ? 'sidebar-selected' : ''
                            } sidebar-element`}
                        >
                            <Card.Body className="d-flex card-body align-items-center">
                                <Nav.Link
                                    as={Link}
                                    to={sectionPath}
                                    className="flex-grow-1 text-decoration-none"
                                >
                                    <p className="m-0">{section.title}</p>
                                </Nav.Link>
                                <Button
                                    variant="none"
                                    onClick={() => toggleSection(sectionIndex)}
                                    aria-expanded={openSections[sectionIndex]}
                                    className="sidebar-button"
                                >
                                    {openSections[sectionIndex] ? '▲' : '▼'}
                                </Button>
                            </Card.Body>
                        </Card>

                        <Collapse in={openSections[sectionIndex]}>
                            <div>
                                {section.topics.map((topic, topicIndex) => {
                                    const topicPath = `${sectionPath}/${topic.title
                                        .toLowerCase()
                                        .replace(/[' ']/g, '-')
                                        .replace(/[,']/g, '')}`;
                                    const isTopicActiveState = openTopics[`${sectionIndex}-${topicIndex}`];

                                    return (
                                        <div key={topicIndex}>
                                            <Card
                                                className={`${
                                                    isTopicActiveState
                                                        ? 'sidebar-selected'
                                                        : ''
                                                } sidebar-element topic`}
                                            >
                                                <Card.Body className="d-flex align-items-center card-body">
                                                    <Nav.Link
                                                        as={Link}
                                                        to={topicPath}
                                                        className="flex-grow-1 text-decoration-none"
                                                    >
                                                        <p className="m-0">{topic.title}</p>
                                                    </Nav.Link>
                                                    <Button
                                                        variant="none"
                                                        onClick={() =>
                                                            toggleTopic(`${sectionIndex}-${topicIndex}`)
                                                        }
                                                        aria-expanded={
                                                            openTopics[`${sectionIndex}-${topicIndex}`]
                                                        }
                                                        className="sidebar-button"
                                                    >
                                                        {openTopics[`${sectionIndex}-${topicIndex}`]
                                                            ? '▲'
                                                            : '▼'}
                                                    </Button>
                                                </Card.Body>
                                            </Card>

                                            <Collapse in={openTopics[`${sectionIndex}-${topicIndex}`]}>
                                                <div>
                                                    {topic.articles.map((article, articleIndex) => {
                                                        const articlePath = `${topicPath}/${article.title
                                                            .toLowerCase()
                                                            .replace(/[' ']/g, '-')
                                                            .replace(/[',']/g, '')}`;
                                                        const isArticleActiveState = isArticleActive(
                                                            articlePath
                                                        );

                                                        return (
                                                            <div key={articleIndex}>
                                                                <Nav.Link as={Link} to={article.link}>
                                                                    <Card
                                                                        className={`${
                                                                            isArticleActiveState
                                                                                ? 'sidebar-selected'
                                                                                : ''
                                                                        } ${
                                                                            isArticleActiveState &&
                                                                            currentPath !== articlePath
                                                                                ? 'sidebar-parent'
                                                                                : ''
                                                                        } sidebar-element article`}
                                                                    >
                                                                        <Card.Body>
                                                                            <h7>{article.title}</h7>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Nav.Link>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </Collapse>
                                        </div>
                                    );
                                })}
                            </div>
                        </Collapse>
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
