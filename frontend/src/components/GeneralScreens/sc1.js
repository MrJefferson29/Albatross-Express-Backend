import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Sc2 from "./Sc2";
import { faBox, faBone, faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import i1 from "../../Assets/g1.jpg";
import g1 from "../../Assets/g2.jpeg";
import g2 from "../../Assets/i1.jpeg";
import j1 from "../../Assets/j1.jpeg";
import j2 from "../../Assets/j2.jpeg";

const IconRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 50px;
  background: aliceblue;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconWrapper = styled.div`
  font-size: 36px;
  color: burlywood;
  padding-right: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Sc1() {
  return (
    <Styles>
      <Container>
        <Row>
          <Col md="5" className="cola">
            <h1 className="brooke">VISHIS..</h1>
            <p className="stay">
              At Vishis, we understand that every journey is a story waiting to
              be told. That's why we bring you cutting-edge tracking solutions
              that go beyond simply monitoring locations. We're here to elevate
              your experience, ensuring safety, efficiency, and peace of mind
              every step of the way.
            </p>
          </Col>
          <Col md="7" className="colb">
            <img
              src={i1}
              style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Row>
          <Col md="5">
            <div className="fort">
              <div className="num">01</div>
              <Col>
                <font className="brow">
                  Real-Time Precision:
                  <br />
                </font>
                <font className="word">
                  Experience a new level of precision with our state-of-the-art
                  tracking technology. Stay connected to your assets, loved
                  ones, or shipments with real-time updates that put you in
                  control.
                </font>
              </Col>
            </div>

            <div className="fort">
              <div className="num">02</div>
              <Col>
                <font className="brow">
                  Versatile Tracking Solutions:
                  <br />
                </font>
                <font className="word">
                  From personal tracking devices to advanced fleet management
                  systems, we offer a diverse range of solutions tailored to
                  your unique needs. No matter the scale, we have you covered.
                </font>
              </Col>
            </div>

            <div className="fort">
              <div className="num">03</div>
              <Col>
                <font className="brow">
                  Peace of Mind, Anytime, Anywhere:
                  <br />
                </font>
                <font className="word">
                  Our commitment to your peace of mind goes beyond borders.
                  Track and monitor from the palm of your hand with our
                  user-friendly mobile app, ensuring you're in control wherever
                  life takes you.
                </font>
              </Col>
            </div>

            <div className="fort">
              <div className="num">04</div>
              <Col>
                <font className="brow">
                  Cutting-Edge Security Features:
                  <br />
                </font>
                <font className="word">
                  Security is at the heart of what we do. Benefit from our
                  advanced security features, including geofencing, tamper
                  alerts, and emergency response protocols, providing an extra
                  layer of protection.
                </font>
              </Col>
            </div>
          </Col>
          <Col md="7">
            <div style={{ display: "flex" }}>
              <img
                className="imag"
                src={g1}
                style={{ width: "50%", padding: "10px", borderRadius: "15px" }}
              />
              <img
                src={g2}
                style={{
                  height: "300px",
                  width: "auto",
                  paddingTop: "10px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row-reverse" }}>
              <img
                className="imag"
                src={j1}
                style={{ width: "50%", padding: "10px", borderRadius: "15px" }}
              />
              <img
                src={j2}
                style={{
                  height: "300px",
                  width: "auto",
                  paddingTop: "10px",
                  borderRadius: "15px",
                }}
              />
            </div>
          </Col>
        </Row>

        <Container>
          <IconRow>
            <IconWrapper>
              <FontAwesomeIcon icon={faBox} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faBone} />
            </IconWrapper>
            <IconWrapper>
              <FontAwesomeIcon icon={faBoxesPacking} />
            </IconWrapper>
          </IconRow>
        </Container>
      </Container>
      <Sc2 />
    </Styles>
  );
}
const Styles = styled.div`
overflow-x: hidden;
margin-top: 30px;
  .cola {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .brooke {
    font-size: 2.6rem;
    font-family: Ginger;
  }
  .stay {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: 700;
  }
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
  .num {
    font-size: 3.7rem;
    font-weight: 600;
    margin-right: 15px;
    margin-top: 7px;
    color: burlywood;
    font-family: Gaqire;
  }
  .fort {
    display: flex;
    margin: 50px;
  }
  .brow {
    font-family: Gaqire;
    font-size: 1.6rem;
    font-weight: 700;
    color: burlywood;
  }
  .word {
    font-size: 1.15rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 860px) {
    .imag {
        display: none;
    }
    `;
