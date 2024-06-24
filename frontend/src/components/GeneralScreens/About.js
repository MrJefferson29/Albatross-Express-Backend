import React from "react";
import { ReactDOM } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import styled from "styled-components";
import Sc2 from "./Sc2";

import i2 from "../../Assets/m2.jpeg";
import g6 from "../../Assets/m1.jpeg";
import o1 from "../../Assets/o1.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Styels>
      <Container>
        <Row>
          <Col md="6">
            <img
              src={g6}
              className=""
              style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
            />
          </Col>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                padding: "20px",
                fontSize: "1.6rem",
                fontWeight: "500",
                fontFamily: "Gaqire",
              }}
            >
              Embarking on this journey with a vision to redefine delivery
              tracking, Vishis was born out of the desire to simplify and
              enhance the way we monitor and receive our packages. Established
              by a team of dedicated professionals, we're driven by a shared
              commitment to technological innovation, logistical excellence, and
              unparalleled customer service.
            </p>
          </Col>
        </Row>

        <Row>
          <Col
            md="6"
            className=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                padding: "20px",
                fontSize: "1.6rem",
                fontWeight: "500",
                fontFamily: "Gaqire",
              }}
            >
              At Vishis, we are not just a tracking platform; we are your
              partners in the delivery experience. Our mission is to empower you
              with a tool that doesn’t just show you the route your package
              takes but enriches your overall journey. We want to be the reason
              you smile when your parcel arrives – timely and intact.
            </p>
          </Col>
          <Col>
            <img
              src={i2}
              className=""
              style={{ width: "100%", padding: "10px", borderRadius: "1px" }}
            />
          </Col>
        </Row>
      </Container>
      <Row
        className="5150"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            width: "70vh",
            fontSize: "1.4rem",
            color: "aliceblue",
            fontWeight: "800",
            fontFamily: "Lobster",
          }}
        >
          <p>
            Become a part of the Vishis community – a place where
            tracking becomes an experience, and deliveries become celebrations.
            Whether you're a business optimizing your logistics or an individual
            eagerly awaiting a special package, we invite you to join us on this
            exciting journey. Thank you for choosing Vishis – where
            every delivery is a story waiting to be told!
          </p>

          <Link to="adopt-shelter">
            <button className="bttn">Visit Shelter</button>
          </Link>
        </div>
      </Row>
      {/* <Container> */}
      {/* </Container> */}
      <Sc2 />
    </Styels>
  );
}

const Styels = styled.div`
  overflow-x: hidden;
  .bttn {
    width: 200px;
    height: 70px;
    margin-top: 30px;
    border-radius: 3px;
    border: none;
    background: burlywood;
    font-size: 1.2rem;
    font-weight: 500;
    color: aliceblue;
    &:hover {
      opacity: 0.5;
    }
  }
  @media only screen and (max-width: 767px) {
    .imag {
      height: 70vh;
    }
  }
`;
