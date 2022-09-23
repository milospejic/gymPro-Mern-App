import React from "react";
import { Helmet } from "react-helmet-async";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function HomeScreen() {
  return (
    <div>
      <Helmet>
        <title>gymPro</title>
      </Helmet>{" "}
      <Carousel>
        <Carousel.Item>
          <Link to="/aboutus">
            <img
              className="d-block w-100"
              src="images/p1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>About us</h3>
              <p>
                Let us tell you the story of our beggining and our plans for the
                future
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/membershipdeals">
            <img
              className="d-block w-100"
              src="images/p2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>What do we offer?</h3>
              <p>Explore our special membership plans</p>
            </Carousel.Caption>{" "}
          </Link>
        </Carousel.Item>

        <Carousel.Item>
          {" "}
          <Link to="/contactus">
            <img
              className="d-block w-100"
              src="images/p3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Want to know more?</h3>
              <p>If you want to know more we are at your service</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
