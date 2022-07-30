import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";


const Featured = ({ id, tittle, imageLocation, shortDescription }) => {

    const navigate = useNavigate();

    return(
        <Col sm={4} style={{ paddingBottom: "3%" }}>
            <div className="most_rated_1" onClick={() => { navigate(`/course/${id}`) }}>
                <h3>{ tittle }</h3>
                <img src={imageLocation} alt="java"></img>

                <ul>
                    {
                        shortDescription.map(description => (
                            <li>{ description }</li>
                        ))
                    }
                </ul>
                <button className="join_btn">Join Now</button>
            </div>
        </Col>
    );
};

export default Featured;
