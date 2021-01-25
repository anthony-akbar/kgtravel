import React, {Component} from 'react';
import Items from "./Items/Items";
import "./Ratings.css"

class Ratings extends Component {
    render() {
        return (
            <div className="ratings">
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
                <Items/>
            </div>
        );
    }
}

export default Ratings;