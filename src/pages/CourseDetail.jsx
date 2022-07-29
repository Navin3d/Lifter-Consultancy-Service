import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import Navbar from "../components/base/Navigation";
import CourseHeader from "../components/course/CourseHeader";
import CourseContents from "../components/course/CourseContents";
import CourseFeatures from "../components/course/CourseFeatures";
import Footer from "../components/base/Footer";

import Data from "../data";


const INITIALSTATE = {
    "id": 1,
    "tittle": "Will Be added Soon",
    "subTittle": "Comming soon",
    "description": "Will Be added Soon",
    "shortDesc": [
        "",
        "",
        "",
    ],
    "imageLocation": "",
    "courseContents": [
        {
            "id": "a",
            "tittle": "Will Be added Soon",
            "subTittles": [
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon"
            ]
        },
        {
            "id": "b",
            "tittle": "Will Be added Soon",
            "subTittles": [
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon"
            ]
        },
        {
            "id": "c",
            "tittle": "Will Be added Soon",
            "subTittles": [
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon",
                "Will Be added Soon"
            ]
        }
    ]
};

const CourseDetail = () => {

    const { cid } = useParams();
    const [course, setCourse] = useState(INITIALSTATE);

    useEffect(() => {
        const fetchedCourse = Data.allCourses.filter(course => (course.id == cid))[0];
        
        const toSet = (fetchedCourse.length === 0) ? INITIALSTATE : fetchedCourse;
        setCourse(toSet);
        console.log("++++++++++++++>", course)
    }, []);

    return(
        <div>
            <Navbar />
            <div className="course-header">
                        <CourseHeader tittle={course.tittle} subTittle={course.subTittle} status={course.status} price={course.price} instructor={course.instructor} effectiveCourseHours={course.effectiveCourseHours} instructionMode={course.instructionMode} noOfSessions={course.noOfSessions} />
            </div>
            <Container>
                <Row>
                    <h4>Course Contents</h4>
                    <div className="course-contents">
                        <CourseContents courseContents={course.courseContents} />
                    </div>
                </Row>
                <h4>Features</h4>
                <CourseFeatures />
            </Container>
            <Footer />
        </div>
    );
};

export default CourseDetail;
