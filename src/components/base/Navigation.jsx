import React, { useState, useEffect } from "react";

import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import Data from "../../data";
import Lifters from "../../images/Lifterv4.png";

const Navigation = () => {

    const [location, setLocation] = useState();

    useEffect(() => {
        const loc = (window.location.href).split(Data.baseUrl);

        if(loc[1] === "/contact") {
            setLocation("contact");
        } else if(loc[1] === "/courses") {
            setLocation("courses");
        } else if(loc[1] === "/about") {
            setLocation("about");
        } else if(loc[1] === "/") {
            setLocation("home");
        } else {
            setLocation("")
        }

    }, []);
    
    return (
        <nav>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <img className="logo" src={Lifters} alt="Lifters" />
                            </Col>
                            <Col>
                                <h5 className="tittle">Lifter</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                    
                    <Col><NavLink to="/" className={ location === "home" ? "navlinkActive" : "navlink" } >Home</NavLink></Col>
                    <Col><NavLink to="/courses"  className={ location === "courses" ? "navlinkActive" : "navlink" } >Courses</NavLink></Col>
                    <Col><NavLink to="/about"  className={ location === "about" ? "navlinkActive" : "navlink" }>About</NavLink></Col>
                    <Col><NavLink to="/contact"  className={ location === "contact" ? "navlinkActive" : "navlink" }>Contact</NavLink></Col>
                    <Col></Col>
                    <Col>
                        <Row>                    
                            <b>sbaaala@gmail.com</b>
                        </Row>
                        <Row>                    
                            <b>+91 90952 05004</b>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </nav>

        // <nav>
        //     <Navbar bg="dark" variant="dark">
        //         <Container>
        //             <img className="logo" src={Lifters} alt="Lifters" />
        //             <Navbar.Brand href="/" className="title">Lifters</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link href="/">Home</Nav.Link>
        //                 <Nav.Link href="/courses">Courses</Nav.Link>
        //                 <Nav.Link href="/about">About</Nav.Link>
        //                 <Nav.Link href="/contact">Contact</Nav.Link>
        //             </Nav>
        //         </Container>
        //     </Navbar>
        // </nav>
    )
    }

export default Navigation;
