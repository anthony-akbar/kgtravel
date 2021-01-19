import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbars from "../Navbar/Navbars";
import Carousels from "../Carousel/Carousel";
import "./../CardCarousel/CardCarousel.css";
import CardCarousel from "../CardCarousel/CardCarousel";
import AboutUs from "../AboutUs/AboutUs";

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Navbars/>
                    <Switch>
                        <Route path="/">
                            <Carousels/>
                            <CardCarousel/>
                            <AboutUs/>
                        </Route>

                    </Switch>
                </BrowserRouter>
            );
    }
}

export default App;