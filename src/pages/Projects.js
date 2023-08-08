import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Projects.css'


export default function Projects() {
  return (
    <div className='d-flex'>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="/images/pos.jpg" className='image' />
        <Card.Body>
          <Card.Title> <h6> POS v1.0.0: Point-of-Sale System </h6></Card.Title>
          <Card.Text className='content'>
              <hr/>
              A web application designed for retail shops to efficiently manage orders and daily
              selling activities using Java, Spring Boot, and React, it offers streamlined order
              processing, inventory control, and detailed sales reporting. The user-friendly
              interface ensures easy navigation, while the tech stack ensures scalability and
              optimal performance. This project showcases my expertise in developing feature-
              rich web applications for enhanced retail operations. <br/> <hr/>
              <b><i>[Java | MySQL | Maven | Spring boot | JUnit | Lombok | Hibernate | ECMA Script |
              H2 | React | Nodejs]</i></b>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/pos.jpg"  />
            <Card.Body>
                <Card.Title>POS v1.0.0: Point-of-Sale System</Card.Title>
                <Card.Text className='content'>
                    A web application designed for retail shops to efficiently manage orders and daily
                    selling activities using Java, Spring Boot, and React, it offers streamlined order
                    processing, inventory control, and detailed sales reporting. The user-friendly
                    interface ensures easy navigation, while the tech stack ensures scalability and
                    optimal performance. This project showcases my expertise in developing feature-
                    rich web applications for enhanced retail operations. <br/>
                    [Java | MySQL | Maven | Spring boot | JUnit | Lombok | Hibernate | ECMA Script |
                    H2 | React | Nodejs]
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
