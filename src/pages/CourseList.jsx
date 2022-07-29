import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../components/base/Navigation";
import CourseCard from "../components/CourseCard";
import Footer from "../components/base/Footer";

import Data from "../data";


const CourseList = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(Data.allCourses);
    }, []);

    return (
        <div>
            <Navbar />
            <Container>
                <Row>
                    {
                        courses.map(course => (
                            <Row>
                                <Col></Col>
                                <Col sm={10}>
                                    <CourseCard key={course.id} id={course.id} tittle={course.tittle} shortDesc={course.shortDesc} imageLocation={course.imageLocation} />
                                </Col>
                                <Col></Col>
                            </Row>
                        ))
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default CourseList;
