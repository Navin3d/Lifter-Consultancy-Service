import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/base/Navigation";
import Footer from "../components/base/Footer";
import Featured from "../components/course/Featured";

import img1 from "../images/HomePage.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import img3 from "../images/img3.jpg";
import { Container, Row, Col } from "react-bootstrap";

import Data from "../data";
import { getTrendingCourses } from "../data/selectors";



const INITIAL_STATE = [
  {
    id: "",
    tittle: "",
    imageLocation: "",
    shortDesc: [
      "",
      ""
    ]
  }
]


const HomePage = () => {
  const navigate = useNavigate();

  const [featuredCourses, setFeaturedCoarses] = useState(INITIAL_STATE);

  useEffect(() => {
    setFeaturedCoarses(getTrendingCourses());
  }, [])

  return (
    <div>
      <Navbar />

      <div className="section">
        <Row>

        <Col sm={6}>
          <div className="Homepage_illus">
            <img src={img1} alt="img1"></img>
          </div>
        </Col>

        <Col sm={4}>
          <div className="Homepage1_content">
            <p>Upgrade your skills to require industry standards</p>
            <div className="getstarted_btn">
              <button
                className="btn"
                onClick={() => {
                  navigate("/courses");
                }}
              >
                Get Started <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </Col>

        </Row>
      </div>

      <div className="section">
        <Row>
          <h3 className="sub-tittle">Intoduction</h3>
          <Col sm={6}>

            <div className="intro-content">
              <p>
                <BsFillPatchCheckFill color="#4E97D1" size={30} />&nbsp;
                Lifter Consultancy Service aims to train the fresh graduates to{" "}
                become skilled developers to work in real time projects.
              </p>
              <p>
                <BsFillPatchCheckFill color="#4E97D1" size={30} />&nbsp;
                  Graduates are not trained by trainers, trained by experienced
                  developers.
              </p>
              <p>
                <BsFillPatchCheckFill color="#4E97D1" size={30} />&nbsp;
                We understand the value of the graduate’s money, put our full
                effort to place the graduate in a job.
              </p>
              <p>
                <BsFillPatchCheckFill color="#4E97D1" size={30} />&nbsp;
                We offer both online as well as offline trainings
              </p>
            </div>
            
          </Col>

          <Col sm={6}>
            <div className="intro_image">
              <img src={img3} alt="img3"></img>
            </div>
          </Col>
        </Row>

      </div>

      <div className="section">
        <Row>
          <h3 className="sub-tittle" hidden={ featuredCourses.length === 0 } >Top-Featured-Courses</h3>
              {
                featuredCourses.map(course => (
                  <Featured key={course.id} id={course.id} tittle={course.tittle} imageLocation={course.imageLocation} shortDescription={course.shortDesc} />
                ))
              }
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
