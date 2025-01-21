import { React } from 'react';
import { Card } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { sections } from '../sidebar/SidebarContent';
import { findPreviousAndNext } from '../sidebar/operations/DeterminePrevAndNextElements';
import './PrevAndNextButtons.css';


export const PrevAndNextNavButtons = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Use the function to get the previous and next sections
    const { previous, next } = findPreviousAndNext(currentPath);

    // Find the current section based on the path
    const currentSection = sections.find(section => {
        const sectionPath = `/docs/${section.title.toLowerCase().replace(/[' ']/g, '-')}`;
        return currentPath.startsWith(sectionPath);
    });

    if (!currentSection) {
        return <p>Section not found</p>;
    }

    return (
        <div className="navigation-buttons">
            {previous && (
                <NavLink as={Link} to={previous.link} className='navlink'>
                    <Card className="prev-button">
                    <Card.Text className='button-name'>Previous</Card.Text>
                    <Card.Text className='button-direction'>« {previous.title}</Card.Text>
                    </Card>
                </NavLink>
            )}
            {next && (
                <NavLink as={Link} to={next.link} className='navlink'>
                    <Card className="next-button">
                    <Card.Text className='button-name'>Next</Card.Text>
                    <Card.Text className='button-direction'>{next.title} »</Card.Text>
                    </Card>
                </NavLink>
            )}
        </div>
    );
};
