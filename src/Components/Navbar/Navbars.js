import React, {Fragment, useEffect, useState} from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import "./Navbars.css";
import {NavLink} from "react-router-dom";

const Navbars = (props) => {
    const [top, setTop] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    const onScroll = (e) => {
        let scrollTop = e.currentTarget.pageYOffset;
        setTop(scrollTop)
    }
        return (
            <Fragment>
                <div className={top > 10? "aboutus none" : "aboutus"}>
                    <p className="col-md-4">Phone Number</p>
                    <p className="col-md-4">E-Mail</p>
                    <p className="col-md-4">Address</p>
                </div>
            <Navbar className={top >10? "width navbar bg-light sticky-top":"top bg-light navbar"}>
                <Navbar.Brand href="#home">Kyrgyz-Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" exact to="/">Главная</NavLink>
                        <NavLink className="nav-link" exact to="/link">Туры</NavLink>
                        <NavLink className="nav-link" exact to="/blog">Blog</NavLink>
                        <NavLink className="nav-link" exact to="/map">Map</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </Fragment>
        );
    }

export default Navbars;