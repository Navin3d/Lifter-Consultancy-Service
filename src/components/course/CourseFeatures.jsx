import { Container, Row, Col } from 'react-bootstrap';
import { CameraVideoFill, AlarmFill, BookFill, TrophyFill } from "react-bootstrap-icons";

const CourseFeatures = () => (
    <div className="course-features">
        <Row>
            <Col sm={6}>
                <div className="course-feature">
                    <div className='feature-icon'><CameraVideoFill size={50} /></div>
                    <h4>Recorded Sessions</h4>
                    <p>
                        We provide the video recordings of our classroom sessions and you can rewind and go back for your immediate and future references.
                    </p>
                </div>
            </Col>
            <Col sm={6}>
                <div className="course-feature">
                    <div className='feature-icon'><AlarmFill size={50} /></div>
                    <h4>Flexible Timings</h4>
                    <p>
                        The training sessions are customized to the preferences of the students and the session timing is designed to be flexible.
                    </p>
                </div>
            </Col>
            <Col sm={6}>
                <div className="course-feature">
                    <div className='feature-icon'><BookFill size={50} /></div>
                    <h4>Communical Forum</h4>
                    <p>
                        We have created a WhatsApp community forum, where you can converse and develop your skills.
                    </p>
                </div>
            </Col>
            <Col sm={6}>
                <div className="course-feature">
                    <div className='feature-icon'><TrophyFill size={50} /></div>
                    <h4>Placement Support</h4>
                    <p>
                        We offer you job placement guidance by providing rich interview questions materials and job recruitment
                    </p>
                </div>
            </Col>
        </Row>
    </div>
);

export default CourseFeatures;
