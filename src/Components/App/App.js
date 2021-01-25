import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbars from "../Navbar/Navbars";
import Carousels from "../Carousel/Carousel";
import "./../CardCarousel/CardCarousel.css";
import CardCarousel from "../CardCarousel/CardCarousel";
import AboutUs from "../AboutUs/AboutUs";
import Ratings from "../Ratings/Ratings";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import Map from "../Map/Map";

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Navbars/>
                    <Switch>
                        <Route exact path="/">
                            <div style={{marginLeft: "5%",marginRight: "5%"}}>
                            <Carousels/>
                            <CardCarousel/>
                            <AboutUs/>
                            <Ratings/>
                            </div>
                        </Route>
                        <Route exact path="/blog">
                            <Blog/>
                            <Footer/>
                        </Route>
                        <Route exact path="/map">
                            <Map/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            );
    }
}

export default App;