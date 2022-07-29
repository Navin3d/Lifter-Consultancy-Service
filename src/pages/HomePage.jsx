import { useNavigate } from "react-router-dom";

import Navbar from "../components/base/Navigation";
import img1 from "../images/HomePage.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillPatchCheckFill } from "react-icons/bs";
import img3 from "../images/img3.jpg";
import java from "../images/Java.png";
const HomePage = () => (
  <div>
    <Navbar />
    <div className="Home_page1">
      <div className="Homepage_illus">
        <img src={img1} alt="img1"></img>
      </div>
      <div className="Homepage1_content">
        <p>Upgrade your skills to require industry standards</p>
        <div className="getstarted_btn">
          <button className="btn">
            Get Started <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
    <div className="HomePage2">
      <div className="intro_content">
        <div className="Intro_title">
          <h1>Introduction</h1>
        </div>
        <div className="Intro_point">
          <div className="icon_point">
            <BsFillPatchCheckFill />
          </div>

          <p>
            Lifter Consultancy Service aims to train the fresh graduates to{" "}
            become skilled developers to work in real time projects.
          </p>
        </div>
        <div className="Intro_point">
          <div className="icon_point">
            <BsFillPatchCheckFill />
          </div>
          <p>
            Graduates are not trained by trainers, trained by experienced
            developers.
          </p>
        </div>
        <div className="Intro_point">
          <div className="icon_point">
            <BsFillPatchCheckFill />
          </div>
          <p>
            We understand the value of the graduate’s money, put our full effort
            to place the graduate in a job.
          </p>
        </div>
        <div className="Intro_point">
          <div className="icon_point">
            <BsFillPatchCheckFill />
          </div>
          <p>We offer both online as well as offline trainings</p>
        </div>
      </div>
      <div className="intro_image">
        <img src={img3} alt="img3"></img>
      </div>
    </div>
    <div className="Hompage_3">
      {/* <div className="most_rated"> */}
      <div className="top_rated_courses">
        <h1>Top-Trending-Courses</h1>
      </div>
      <div className="Course_card">
        <div className="most_rated_1">
          <h3>Java Fullstack Developer</h3>
          <img src={java} alt="java"></img>

          <ul>
            <li>Starts from ....</li>
            <li>Basics to Advanced</li>
            <li>Get hands-on training with industry projects</li>
          </ul>
          <button className="join_btn">Join Now</button>
        </div>
        <div className="most_rated_1">
          <h3>Java Fullstack Developer</h3>
          <img src={java} alt="java"></img>

          <ul>
            <li>Starts from ....</li>
            <li>Basics to Advanced</li>
            <li>Get hands-on training with industry projects</li>
          </ul>
          <button className="join_btn">Join Now</button>
        </div>
        <div className="most_rated_1">
          <h3>Java Fullstack Developer</h3>
          <img src={java} alt="java"></img>

          <ul>
            <li>Starts from ....</li>
            <li>Basics to Advanced</li>
            <li>Get hands-on training with industry projects</li>
          </ul>
          <button className="join_btn">Join Now</button>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
