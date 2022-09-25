import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import HomeScreen from "../src/screens/HomeScreen";
import MembershipDealsScreen from "../src/screens/MembershipDealsScreen";
import AboutUsScreen from "../src/screens/AboutUsScreen";
import ContactUsScreen from "../src/screens/ContactUsScreen";
import SignInScreen from "../src/screens/SignInScreen";
import SignUpScreen from "../src/screens/SignUpScreen";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>gymPro</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/membershipdeals" className="nav-link">
                  Membership deals
                </Link>

                <Link to="aboutus" className="nav-link">
                  About Us
                </Link>

                <Link to="contactus" className="nav-link">
                  Contact us
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="membershipdeals"
                element={<MembershipDealsScreen />}
              />
              <Route path="aboutus" element={<AboutUsScreen />} />
              <Route path="contactus" element={<ContactUsScreen />} />
              <Route path="signin" element={<SignInScreen />} />
              <Route path="signup" element={<SignUpScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
