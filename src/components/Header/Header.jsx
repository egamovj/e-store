import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";

import "./header.css";

import UserIcon from "../../assets/images/user-icon.png";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <p>
                <span>E</span>-store
              </p>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-bag-line"></i>
              </span>
              <span>
                <img src={UserIcon} alt="" />
              </span>
            </div>

            <div className="mobile__menu">
              <span><i class="ri-menu-line"></i></span>
            </div>

          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
