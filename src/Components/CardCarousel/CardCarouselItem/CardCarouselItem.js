import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import "./CardCarouselItem.css";

class CardCarouselItem extends Component {
    render() {
        return (
            <div className="card bg-dark text-white">
                <Card.Img src="https://picsum.photos/350/600" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </div>
        );
    }
}

export default CardCarouselItem;