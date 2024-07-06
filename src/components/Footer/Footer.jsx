import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <NavLink to="/">
                <p className="text-white">
                  <span>E</span>store
                </p>
              </NavLink>
            </div>
            <p className="footer__text mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="link">
                    Mobile Phones
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="link">
                    Modern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="link">
                    Arm Chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="link">
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop" className="link">
                    Shop
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart" className="link">
                    Cart
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login" className="link">
                    Login
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#" className="link">
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>123, Urgench, Khorezm, Uzbekistan</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+998888581319</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>egamovj90@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Egamov J. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
