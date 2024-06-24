import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import g3 from "../../Assets/s1.jpeg";
import g4 from "../../Assets/s3.jpeg";
import g5 from "../../Assets/k2.jpeg";

export default function Sc2() {
  return (
    <Styles>
      <Container>
        
        <Row style={{ marginTop: "50px" }}>
          <Col md="4">
            <h2 style={{ fontFamily: "Gaqire" }}>Customer-Centric Approach</h2>
            <img
              src={g3}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                marginTop: "30px",
              }}
            >
              Your satisfaction is our priority. Our dedicated support team is
              here 24/7 to assist you with any inquiries, ensuring you get the
              most out of our tracking solutions.
            </p>
          </Col>

          <Col md="4">
            <h2 style={{ fontFamily: "Gaqire" }}>Innovation for Tomorrow</h2>
            <img
              src={g5}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                marginTop: "30px",
              }}
            >
              Embrace the future with Vishis. We're committed to staying ahead
              of the curve, continuously innovating to bring you the latest
              advancements in tracking technology.
            </p>
          </Col>

          <Col md="4">
            <h2 style={{ fontFamily: "Gaqire" }}>Global Reach, Local Touch</h2>
            <img
              src={g4}
              style={{ width: "75%", height: "auto", borderRadius: "10px" }}
            />
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                marginTop: "30px",
              }}
            >
              With a global reach and a local touch, we provide reliable
              tracking solutions tailored to your specific region or industry
              requirements.
            </p>
          </Col>
        </Row>
        <Row style={{ padding: "50px" }}>
          <center>
            <h2 style={{ fontFamily: "Ginger" }}>Join Us on Your Journey</h2>
            <Col
              md="6"
              style={{
                fontSize: "1.4rem",
                fontWeight: "600",
                marginTop: "30px",
              }}
            >
              Ready to embark on a journey of unparalleled tracking and
              security? Explore our range of tracking solutions and discover the
              power of being in control. Your story is unique; let us help you
              tell it with precision, security, and confidence.
            </Col>
          </center>
        </Row>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  margin-top: 15vh;
`;
