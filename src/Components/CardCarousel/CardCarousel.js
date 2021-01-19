import React, {Component} from 'react';
import "./CardCarousel.css";
import CardCarouselItem from "./CardCarouselItem/CardCarouselItem";

class CardCarousel extends Component {
    render() {
        return (
           <div className="box">
               <CardCarouselItem/>
               <CardCarouselItem/>
               <CardCarouselItem/>
               <CardCarouselItem/>
           </div>
        );
    }
}

export default CardCarousel;