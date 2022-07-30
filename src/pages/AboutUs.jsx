import Navbar from "../components/base/Navigation";
import Footer from "../components/base/Footer";
import { Container, Row, Col } from "react-bootstrap";
import about from "../images/about.jpg";

const AboutUs = () => (
  <div>
    <Navbar />
    <div className="about">
      <Container>
        <Row>
          <Col>
            <div className="img_wrapper">
              <img src={about} alt="about"></img>
            </div>
          </Col>

          <Col sm>
            <div className="about_content">
              <div className="heading">
                <h1>About Us</h1>
              </div>
              <div className="about_info">
                <p>
                  Lifter Consultancy Service is a software development and software
                  training company, to fulfil the client needs by providing quality
                  developers and to train the individuals to get exact skill to be
                  become a software developer to work in projects.
                </p>
              </div>

              <div className="about_info">
                <p>
                  We train the individuals by experienced developers who can share
                  their real time experience in Software development. y Lifter
                  Consultancy Service believes in every one win in their goal. We
                  are benefited as a company, individuals and graduates get
                  benefited as trained to get a job and client is benefitted to get
                  quality software developers.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
  </div>
);

export default AboutUs;
