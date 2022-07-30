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

      <Row>
        <Col sm={6}>
          <div className="Homepage_illus">
            <img src={img1} alt="img1"></img>
          </div>
        </Col>
        <Col sm={6}>
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

      <Row>
        <Col sm={6}>
          <div className="Intro_content">
            <div className="Intro_point">
              <div className="icon_point">
                <BsFillPatchCheckFill color="#4E97D1" />
              </div>

              <p>
                Lifter Consultancy Service aims to train the fresh graduates to{" "}
                become skilled developers to work in real time projects.
              </p>
            </div>
            <div className="Intro_point">
              <div className="icon_point">
                <BsFillPatchCheckFill color="#4E97D1" />
              </div>
              <p>
                Graduates are not trained by trainers, trained by experienced
                developers.
              </p>
            </div>
            <div className="Intro_point">
              <div className="icon_point">
                <BsFillPatchCheckFill color="#4E97D1" />
              </div>
              <p>
                We understand the value of the graduate’s money, put our full
                effort to place the graduate in a job.
              </p>
            </div>
            <div className="Intro_point">
              <div className="icon_point">
                <BsFillPatchCheckFill color="#4E97D1" />
              </div>
              <p>We offer both online as well as offline trainings</p>
            </div>
          </div>
        </Col>

        <Col sm={6}>
          <div className="intro_image">
            <img src={img3} alt="img3"></img>
          </div>
        </Col>
      </Row>

      <Row>
        <h3 className="sub-tittle" hidden={ featuredCourses.length === 0 } >Top-Featured-Courses</h3>
          <div className="Course_card">
            {
              featuredCourses.map(course => (
                <Featured key={course.id} id={course.id} tittle={course.tittle} imageLocation={course.imageLocation} shortDescription={course.shortDesc} />
              ))
            }
          </div>
      </Row>

      <Footer />
    </div>
  );
};

export default HomePage;
