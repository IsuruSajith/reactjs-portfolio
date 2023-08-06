import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {toast} from "react-toastify";

export default function Header() {
    const handleDownloadResume = () => {
        const resumePath = 'path/to/your/resume.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.target = '_blank';
        link.download = 'Isuru_Sajith_Rathnayaka.pdf';
        link.click();

        toast.success('Resume downloaded successfully!', {
            position: 'bottom-right', autoClose: 3000
        });
    };

    const submitData = () => {
alert('working');
    }
    return (<div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/home">Isuru</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/experience">Experience</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/education">Education</Nav.Link>
                            <Nav.Link href="/techstack">Tech Stack</Nav.Link>
                            <Nav.Link href="/resume" onClick={handleDownloadResume}>Resume</Nav.Link>
                            <Nav.Link href="/resume">Contact</Nav.Link>
                            <NavDropdown title="Dev Toolbox" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Emoji Mood Selector</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Quote of the Day</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">BMI Calculator</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" onClick={submitData}>Submit your
                                    data</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">
                                    Theme Switcher
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>)
}
