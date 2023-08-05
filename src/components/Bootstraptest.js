import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './bootstraptest.css'

export default function Bootstraptest() {
    return (<div><h1>Bootstrap</h1>
            <div className="accordion">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tech Stack</Accordion.Header>
                        <Accordion.Body>
                            Java SE
                            Jakarta EE
                            JavaFX
                            Spring
                            Spring Boot
                            Angular
                            React
                            React Native
                            Spring Data JPA
                            Spring Web
                            JPA (Java Persistence API)
                            Spring Security
                            Gson / Jackson
                            Multer
                            Swagger UI
                            SLF4J / Logback
                            H2
                            HyperSQL
                            Mockito
                            JUnit
                            Promise-mysql
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>

        </div>

    )
}
