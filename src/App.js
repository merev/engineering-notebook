import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/home_page/HomePage';
import DocsPage from './pages/docs_pages/docs_intro/DocsPage';
import SearchPage from './pages/SearchPage';
import ElectronicsSectionPage from './pages/docs_pages/electronics_section/ElectronicsSectionPage';
import KubernetesSectionPage from './pages/docs_pages/kubernetes_section/KubernetesSectionPage';
import ElectronicsTheoryPage from './pages/docs_pages/electronics_section/electronics_theory/ElectronicsTheoryPage';
import CurrentPage from './pages/docs_pages/electronics_section/electronics_theory/CurrentPage';
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
                        <Col md={4} className='sidebar p-1'> {/* Adjusted column width */}
                            <Sidebar />
                        </Col>
                    )}
                    <Col md={showSidebar ? 8 : 12} className="content"> {/* Adjusted column width */}
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route path="/docs/intro" element={<DocsPage />} />
                            <Route path="/docs/electronics" element={<ElectronicsSectionPage />} />
                            <Route path="/docs/electronics/theory" element={<ElectronicsTheoryPage />} />
                            <Route path="/docs/electronics/theory/current" element={<CurrentPage />} />
                            <Route path="/docs/kubernetes" element={<KubernetesSectionPage />} />
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
