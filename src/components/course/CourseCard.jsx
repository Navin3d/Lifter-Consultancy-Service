import { Container, Row, Col, Button } from "react-bootstrap";
import { StarFill } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";


const CourseCard = ({ id, tittle, shortDesc, imageLocation }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/course/${id}`);
    }

    return(
        <div className="course-card" onClick={handleClick}>
            <Container>
                <Row>
                    <h5 className="course-tittle">{ tittle }</h5>
                    <Col sm={4}>
                        <img className="course-pic" src={imageLocation} alt="course pic" />
                    </Col>
                    <Col sm={6}>
                        <div className="course-short-desc">
                            <Col>
                                {
                                    shortDesc.map(desc => (
                                        <Row>
                                            <p><StarFill className="pt-icon"/> { desc }</p>
                                        </Row>
                                    ))
                                }
                            </Col>
                        </div>
                    </Col> 
                    <Col sm={2}>
                        <Button variant="outline-success" onClick={handleClick}>More info...</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseCard;
