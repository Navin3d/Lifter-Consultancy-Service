import Navbar from "../components/base/Navigation";
import img1 from "../images/HomePage.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePage = () => (
  <div>
    <Navbar />
    <div className="Home_page1">
      <div className="Homepage_illus">
        <img src={img1} alt="img1"></img>
      </div>
      <div className="Homepage1_content">
        <p>
          Upgrade your skills
          <br /> to require industry <br />
          standards
        </p>
        <div className="getstarted_btn">
          <button className="btn">
            <a className="link" href="/courses">Get Started <AiOutlineArrowRight /></a>
          </button>
        </div>
      </div>
      {/* <div className="getstarted_btn">
        <button className="btn">
          Get Started <AiOutlineArrowRight />
        </button>
      </div> */}
    </div>
  </div>
);

export default HomePage;
