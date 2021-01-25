import React, {Component} from 'react';
import "./Rate.css";

class Rate extends Component {
    render() {
        return (
            <div className="rating-holder">
                <div className="c-rating c-rating--small" data-rating-value="2">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
            </div>
        );
    }
}

export default Rate;