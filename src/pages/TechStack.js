import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';


export default function TechStack() {

    const [selectedSection, setSelectedSection] = useState('programming-languages');
    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };
    const renderSectionContent = () => {
        switch (selectedSection) {
            case 'programming-languages':
                return (<ul className='list-disc pl-5'>
                        <li>Java</li>
                        <li>ECMAScript(JS)</li>
                        <li>TypeScript</li>
                        <li>SQL</li>

                    </ul>);
            case 'frameworks-and-libraries':
                return (<ul className='list-disc pl-5'>
                        <li>Java SE</li>
                        <li>Jakarta EE</li>
                        <li>JavaFX</li>
                        <li>Spring</li>
                        <li>Spring Boot</li>
                        <li>Angular</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Spring Data JPA</li>
                        <li>Spring Web</li>
                        <li>JPA (Java Persistence API)</li>
                        <li>Spring Security</li>
                        <li>Gson / Jackson</li>
                        <li>Multer</li>
                        <li>Swagger UI</li>
                        <li>SLF4J / Logback</li>
                        <li>H2</li>
                        <li>HyperSQL</li>
                        <li>Mockito</li>
                        <li>JUnit</li>
                        <li>Promise-mysql</li>
                        <li>Express</li>
                        <li>JSON</li>
                        <li>Java Bean Validation</li>
                        <li>Lombok</li>
                        <li>Animate.css</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                        <li>Tailwind CSS</li>
                        <li>Angular Material</li>
                        <li>Bootstrap</li>
                        <li>Material-UI</li>
                        <li>SAAS</li>
                        <li>NPM</li>
                        <li>Hibernate</li>
                        <li>JQuery</li>
                        <li>NodeJS</li>
                        <li>Parcel JS</li>
                        <li>Webpack</li>
                        <li>Gradle</li>
                        <li>Maven</li>
                    </ul>);
            default:
                return null;
        }
    };


    return (

        <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='w-75 m-3 p-2'>
                <span>Welcome to the Tech Stack section of my portfolio. Here, I'll give you a glimpse of the technologies and tools I'm skilled in. Having a strong foundation in these technologies allows me to craft efficient and innovative solutions for various projects.</span>
            </div>
            <Nav variant="tabs" defaultActiveKey="/programming-languages">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => handleSectionChange('programming-languages')}
                        eventKey="programming-languages"
                    >
                        Programming Languages
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => handleSectionChange('frameworks-and-libraries')}
                        eventKey="frameworks-and-libraries"
                    >
                        Frameworks and Libraries
                    </Nav.Link>
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
            {renderSectionContent()}
        </div>)
}
