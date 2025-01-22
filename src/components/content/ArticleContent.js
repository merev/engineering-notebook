import React, { useEffect, useState } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import { sections } from '../sidebar/SidebarContent';
import './Content.css';
import { PrevAndNextNavButtons } from '../nav_buttons/PrevAndNextButtons';

const ArticleContent = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Find the current section, topic, and article based on the path
    let currentSection, currentTopic, currentArticle;

    for (const section of sections) {
        const sectionPath = `/docs/${section.title.toLowerCase().replace(/[' ']/g, '-')}`;
        if (currentPath.startsWith(sectionPath)) {
            currentSection = section;
            currentTopic = section.topics.find(topic => {
                const topicPath = `${sectionPath}/${topic.title.toLowerCase().replace(/[' ']/g, '-')}`;
                if (currentPath.startsWith(topicPath)) {
                    currentArticle = topic.articles.find(article => article.link === currentPath);
                    return true;
                }
                return false;
            });
            break;
        }
    }

    const [markdownContent, setMarkdownContent] = useState('');
    const [error, setError] = useState(null);

    // Fetch Markdown content from GitHub
    useEffect(() => {
        if (currentArticle) {
            const githubRawUrl = `https://raw.githubusercontent.com/merev/engineering-notebook/main/${currentArticle.title
                .toLowerCase()
                .replace(/ /g, '-')}.md`;

            fetch(githubRawUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch content: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(data => setMarkdownContent(data))
                .catch(err => setError(err.message));
        }
    }, [currentArticle]);

    if (!currentSection || !currentTopic || !currentArticle) {
        return <p>Article not found</p>;
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
                    <Nav.Link as={Link} to={`/docs/${currentSection.title.toLowerCase().replace(/[' ']/g, '-')}/${currentTopic.title.toLowerCase().replace(/[' ']/g, '-')}`} className="section-link">
                        {currentTopic.title}
                    </Nav.Link>
                    <span className="arrows"> › </span>
                    <span className="current-page">{currentArticle.title}</span>
                </div>
                <Card.Title className="page-title">{currentArticle.title}</Card.Title>
                <main className="article-content">
                    {error ? (
                        <p className="error-message">{error}</p>
                    ) : (
                        <ReactMarkdown>{markdownContent || 'Loading content...'}</ReactMarkdown>
                    )}
                </main>
                <PrevAndNextNavButtons />
            </Card.Body>
        </Card>
    );
};

export default ArticleContent;
