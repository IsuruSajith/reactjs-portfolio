import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Projects.css'
import github from './images/github.png'


export default function Projects() {
    const handlePos = () => {
        window.open('https://github.com/IsuruSajith/pos-spring-boot')
    }
    const handlePicVibe = () => {
        window.open('https://github.com/IsuruSajith/pic-vibe')
    }


    return (<div className='d-flex w-100'>
        <div className=''>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="/images/pos.jpg" className='image'/>
                <Card.Body>
                    <Card.Title><h6 className='underline'> POS v1.0.0: Point-of-Sale System </h6></Card.Title>
                    <Card.Text className='content'>

                        A web application designed for retail shops to efficiently manage orders and daily
                        selling activities using Java, Spring Boot, and React, it offers streamlined order
                        processing, inventory control, and detailed sales reporting. The user-friendly
                        interface ensures easy navigation, while the tech stack ensures scalability and
                        optimal performance. This project showcases my expertise in developing feature-
                        rich web applications for enhanced retail operations. <br/>
                        <br/>
                        <b><i>[Java | MySQL | Maven | Spring boot | JUnit | Lombok | Hibernate | ECMA Script |
                            H2 | React | Nodejs]</i></b>
                    </Card.Text>
                    <Button variant="primary" onClick={handlePos} className='d-flex'>
                        <img src={github} alt="github icon" className='w-5 h-5'/>
                        <span className='ml-2'>Go to Git Repo</span>
                    </Button>

                </Card.Body>
            </Card>


        </div>
        <div>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="/images/gallery.jpg"/>
                <Card.Body>
                    <Card.Title><h6 className='underline'>PicVibe v1.0.0</h6></Card.Title>
                    <Card.Text className='content'>
                        Pic Vibe is an innovative online platform designed for seamless photo uploading
                        and downloading. As the creator and founder of Pic Vibe, I developed a user-
                        friendly website where users can easily share their photos with others and explore
                        a vast collection of captivating imagery.
                        <br/><br/>
                        <b><i>[Java | MySQL | Maven | Servlet | JUnit | Lombok | Hibernate | Angular | SCSS |
                        jQuery]</i></b>
                    </Card.Text>
                    <Button variant="primary" onClick={handlePicVibe} className='d-flex'>
                        <img src={github} alt="github icon" className='w-5 h-5'/>
                        <span className='ml-2'>Go to Git Repo</span>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    </div>)
}
