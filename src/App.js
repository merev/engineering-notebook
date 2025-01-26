import 'bootstrap/dist/css/bootstrap.min.css';
import 'katex/dist/katex.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { Header, Footer, Sidebar } from './components';
import { HomePage, DocsIntroPage, SearchPage, DocsSectionPage, DocsTopicPage, DocsArticlePage } from './pages';
import './App.css';

function Layout() {
    const location = useLocation();

    // Check if the current path starts with "/docs"
    const showSidebar = location.pathname.startsWith('/docs');

    return (
        <div>
            <Header />
            <Container fluid className='docs-page'>
                <Row>
                    {showSidebar && (
                        <Col md={3} className='sidebar p-1'> {/* Adjusted column width */}
                            <Sidebar />
                        </Col>
                    )}
                    <Col md={showSidebar ? 7 : 12} className="content"> {/* Adjusted column width */}
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/docs/intro" element={<DocsIntroPage />} />
                            <Route path="/docs/:word" element={<DocsSectionPage />} />
                            <Route path="/docs/:word1/:word2" element={<DocsTopicPage />} />
                            <Route path="/docs/:word1/:word2/:word3" element={<DocsArticlePage />} />
                            <Route path="/search" element={<SearchPage />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
