import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../components/base/Navigation";
import Footer from "../components/base/Footer";


const ContactUs = () => (
    <div>
        <Navbar />
        <div className="contact">
            <Container>
                <Row>
                    <Col>
                        <img className="map-logo" src="./images/MapView.png" alt="map-view" />
                    </Col>
                    <Col sm>
                        <div className="address-box">
                            <h5>Head Office:</h5>
                                <p>
                                Door no.10/43, <br />
                                Mariyamman Kovil Street <br />
                                Mathur Roundana, GBC <br />
                                Tiruchirappalli, Tamil Nadu – 620007 <br />
                                Contact No: +91 934 570 23 85
                            </p>
                        </div>
                        <div className="address-box">
                            <h5>Branch Office:</h5>
                            <p>
                                Arputham complex <br />
                                Main road ,Ganesh nagar <br />
                                GBC <br />
                                Tiruchirappalli, Tamil Nadu – 620007 <br />
                                Contact No: +91 934 570 23 85
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer />
    </div>
);

export default ContactUs;
