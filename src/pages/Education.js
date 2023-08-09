import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "../components/ExampleCarouselImage";


export default function Education() {

    return (<div>
        <Carousel>
            <Carousel.Item interval={1000}>
                <ExampleCarouselImage text="Full Stack Developer"/>
                <Carousel.Caption>
                    <h3>Certificate in Full Stack Web Development
                        and Information Technology</h3>
                    <p>IJSE, Institute of Software Engineering, Panadura</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <ExampleCarouselImage text="Master Java Development"/>
                <Carousel.Caption>
                    <h3>Certificate in Master Java Development</h3>
                    <p>IJSE - Institute of Software Engineering, Panadura.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="BSc Engineering (Hon's)"/>
                <Carousel.Caption>
                    <h3>Second Class Honours degree in Chemical and Process Engineering</h3>

                    <p>
                        Faculty of Engineering, University of Moratuwa.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>)
}
