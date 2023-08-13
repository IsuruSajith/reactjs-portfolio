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
                return (<div className='w-75 text-red-700 p-3'>
                    Java | ECMAScript(JS) | TypeScript | SQL

                </div>);
            case 'frameworks-and-libraries':
                return (<div className='w-75 text-red-700 p-3 leading-loose'>

                        Java SE | Jakarta EE | JavaFX | Spring | Spring Boot | Angular | React | React Native | Spring
                        Data JPA | Spring Web | JPA (Java Persistence API) | Spring Security |

                        Gson / Jackson | Multer | Swagger UI | SLF4J / Logback | H2 |
                        HyperSQL | Mockito | JUnit | Promise-mysql | Express | JSON | Java Bean Validation |
                        Lombok | Animate.css | CSS3 | HTML5 | Tailwind CSS | Angular Material | Bootstrap | Material-UI
                        | SAAS | NPM | Hibernate | JQuery | NodeJS | Parcel JS | Webpack | Gradle | Maven
                    </div>
                );
            case 'dbms':
                return (<div className='w-75 text-red-700 p-3'>
                    MySQL | MongoDB
                </div>);

            case 'vcs':
                return (<div className='w-75 text-red-700 p-3'>
                    Git | Git Hub | Git Lab | Bitbucket
                </div>);

            case 'ide':
                return (<div className='w-75 text-red-700 p-3'>
                    IntelliJ idea | VSCode | DataGrip | Jasper | Packet-Tracer
                </div>);
            case 'cloud-services':
                return (<div className='w-75 text-red-700 p-3'>
                    Postman | GCP | Apache | Tomcat | GlassFish | Jetty | Docker | Kubernetes
                </div>);
            case 'os':
                return (<div className='w-75 text-red-700 p-3'>
                    Ubuntu | Windows
                </div>);

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
                    <Nav.Link
                        onClick={() => handleSectionChange('dbms')}
                        eventKey="dbms"
                    >
                        DBMS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => handleSectionChange('vcs')}
                        eventKey="vcs"
                    >
                        VCS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => handleSectionChange('ide')}
                        eventKey="ide"
                    >
                        IDE
                    </Nav.Link>

                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => handleSectionChange('cloud-services')}
                        eventKey="cloud-services"
                    >
                        API Platforms, Servers, Cloud Computing
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => handleSectionChange('os')}
                        eventKey="os"
                    >
                        Operating Systems
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {renderSectionContent()}
        </div>)
}
