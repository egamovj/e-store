import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";

import "../styles/home.css";

import Helmet from "../components/Helmet/Helmet";

import heroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="Hero img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </Helmet>
  );
};

export default Home;
