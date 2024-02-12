import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Arya </span>
            from <span className="purple"> Patna, India.</span>
            <br />
            Third-year B.Tech CSE student at IES University, delving into computer science realms,
             mastering algorithms, programming languages, and tech advancements,
              committed to innovation and contributing to the field's evolution.


            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing Images
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
