import React, {Component} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import Navbars from "../Navbar/Navbars";
import Carousels from "../Carousel/Carousel";
import CardCarousel from "../CardCarousel/CardCarousel";
import "./../CardCarousel/CardCarousel.css";

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Navbars/>
                    <Switch>
                        <Carousels/>
                        <CardCarousel/>
                    </Switch>
                </BrowserRouter>
            );
    }
}

export default App;