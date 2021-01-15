import React, {Component} from 'react';
import {Carousel} from "react-bootstrap";
import image from "./../../Images/eiffel.jpg";

class Carousels extends Component {
    render() {
        return (
            <Carousel style={{top: "30px"}}>
                <Carousel.Item style={{height: "500px"}}>
                    <img className="d-block w-100" src={image} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: "500px"}}>
                    <img className="d-block w-100" src={image} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{height: "500px"}}>
                    <img className="d-block w-100" src={image} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Carousels;