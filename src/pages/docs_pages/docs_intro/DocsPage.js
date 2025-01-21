import React from 'react';
import { Container, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DocsPage.css';
import { NavLink } from 'react-router-dom';

const DocsPage = () => {

    return (
        <Container fluid className='main-section'>
            <Card className='article-card'>
                <Card.Body>
                <div className="breadcrumbs">
                    <Nav.Link as={Link} to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome} />
                    </Nav.Link>
                    <span className='arrows'> › </span>
                    <span className='current-page'>Introduction</span>
                </div>

                    <div>
                    <Card.Title className='article-title'>Introduction</Card.Title>
                    <Card.Text className='article-intro'>This blog is a comprehensive resource for IT professionals, enthusiasts, and learners seeking to deepen their technical expertise. Focused on education and practical knowledge, it provides well-structured articles, tutorials, and documentation on key areas of IT engineering. The goal is to simplify complex topics, share valuable insights, and offer actionable resources that empower readers to excel in fields like Electronics, Kubernetes, Linux, and DevOps.</Card.Text>
                    </div>

                    <div className='article-section'>
                    <Card.Title className='article-heading'>Electronics</Card.Title>
                    <Card.Text className='article-paragraph' as={Link} to='/docs/electronics'>
                        Electronics forms the bedrock of modern technology, shaping everything from household devices to advanced computing systems. In this section, you’ll find articles covering the fundamentals of circuits, components like resistors and microcontrollers, and hands-on tutorials for building your own projects. Whether you’re exploring the basics of voltage and current or delving into cutting-edge IoT devices, this section has something for every level of expertise.
                    </Card.Text>
                    </div>

                    <div className='article-section'>
                    <Card.Title className='article-heading'>Kubernetes</Card.Title>
                    <Card.Text className='article-paragraph' as={Link} to='/docs/kubernetes'>
                        Kubernetes has revolutionized the way applications are deployed and managed, becoming an essential tool for modern software architecture. Our Kubernetes section is your guide to mastering container orchestration, with topics ranging from setting up clusters and managing workloads to understanding advanced concepts like service mesh and Helm charts. Whether you're a developer or a system administrator, these articles will help you unlock the full potential of Kubernetes in cloud-native environments.
                    </Card.Text>
                    </div>

                    <div className='article-section'>
                    <Card.Title className='article-heading'>Linux</Card.Title>
                    <Card.Text className='article-paragraph' as={Link} to='/docs/linux'>
                        Linux is more than just an operating system—it’s a philosophy and a toolset that powers the majority of the internet, servers, and development environments. This section dives into Linux’s versatility, with content on shell scripting, system performance tuning, package management, and security practices. Whether you're exploring Linux for the first time or optimizing a production environment, you’ll find practical insights to enhance your skills.
                    </Card.Text>
                    </div>

                    <div className='article-section'>
                    <Card.Title className='article-heading'>DevOps</Card.Title>
                    <Card.Text className='article-paragraph' as={Link} to='/docs/devops'>
                        DevOps is at the heart of modern software delivery, emphasizing collaboration, automation, and continuous improvement. Our DevOps section explores key practices such as continuous integration and delivery (CI/CD), infrastructure as code (IaC), and monitoring strategies. Learn how to streamline workflows, improve system reliability, and adopt tools like Docker, Ansible, and Jenkins to transform your development process.
                    </Card.Text>
                    </div>

                    <div className="navigation-buttons">
                    <NavLink as={Link} to="/docs/electronics" className='navlink m-auto'>
                        <Card className="next-button">
                        <Card.Text className='button-name'>Next</Card.Text>
                        <Card.Text className='button-direction'>Electronics »</Card.Text>
                        </Card>
                    </NavLink>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DocsPage;