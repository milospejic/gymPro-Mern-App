import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function AboutUsScreen() {
  return (
    <div>
      <Row className="rowA">
        <h1>Who are we?</h1>
      </Row>
      <Row className="rowB">
        gymPro is a new gym in Novi Sad, Serbia. It was founded in 2022 by a
        group of young and ambitious people with the goal of becoming the best
        fitness studio in the city. gymPro currently has one location in Novi
        Sad. Our fitness studio contains a modern gym which is loaded with gym
        equimpment and modern exercising machines. Besides that we have a new
        spa which is for relaxation of our members.
      </Row>
      <Row className="rowImg">
        <img className="img-thumbnail" src="images/p1.jpg" alt="Gym" />
      </Row>
      <Row className="rowA">
        <h1>What do we plan</h1>
      </Row>
      <Row className="rowB">
        We plan to open a 2-3 new locations in Novi Sad in the next 3 years.
        With assistance of our members we will try to make new membership deals
        with focus on groups like students and the elderly. We want to improve
        the experince of our members day in and day out.
      </Row>
    </div>
  );
}
