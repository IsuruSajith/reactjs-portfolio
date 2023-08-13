import React from 'react'
import Nav from 'react-bootstrap/Nav';


export default function TechStack() {
    return (

        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='w-75 m-3 p-2'>
                <span>Welcome to the Tech Stack section of my portfolio. Here, I'll give you a glimpse of the technologies and tools I'm skilled in. Having a strong foundation in these technologies allows me to craft efficient and innovative solutions for various projects.</span>
            </div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="#" eventKey="link-0">Programming Languages</Nav.Link>
                        <ul className='list-disc pl-5'>
                            <li>Java</li>
                            <li>ECMAScript(JS)</li>
                            <li>TypeScript</li>
                            <li>SQL</li>
                        </ul>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Frameworks and Libraries</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">DBMS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">VCS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">IDE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5">API Platforms, Servers, Cloud
                        Computing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6">Operating Systems</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>)
}
