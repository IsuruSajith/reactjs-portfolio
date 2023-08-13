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
          <Nav.Link href="/home">Programming Languages</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Frameworks and Libraries</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" >DBMS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" >VCS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" >IDE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" >API Platforms, Servers, Cloud
            Computing</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#" >Operating Systems</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
