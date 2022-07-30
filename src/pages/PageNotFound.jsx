import { Container, Row } from "react-bootstrap";

import Navbar from "../components/base/Navigation";
import Footer from "../components/base/Footer";


const PageNotFound = () => (
    <div>
        <Navbar />
        <Container>
            <Row>
                <div className="not-found">
                    <div className="section">
                        <img src="https://i.imgur.com/qIufhof.png" />
                        <div id="info">
                            <h3>This page could not be found</h3>
                        </div>
                    </div>
                </div>
            </Row>            
        </Container>
        <Footer />
    </div>
);

export default PageNotFound;
