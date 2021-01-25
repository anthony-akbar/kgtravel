import React, {Component} from 'react';
import {Card} from "react-bootstrap";
import "./Items.css";
import Rate from "./Rate/Rate";

class Items extends Component {
    render() {
        return (
            <div className="card comment">
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.{' '}
                        </p>
                        <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                    <Rate/>
                </Card.Body>
            </div>
        );
    }
}

export default Items;