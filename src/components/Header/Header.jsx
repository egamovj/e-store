import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";

import "./header.css";

import UserIcon from "../../assets/images/user-icon.png";
import Bag from "../../assets/shopping-bag-line.svg";
import Heart from "../../assets/heart-line.svg";
import Menu from "../../assets/menu-line.svg";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <p>
                <span>E</span>store
              </p>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink className="nav__item-link" to="/cart">
                    Cart
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <img src={Heart} />
              </span>
              <span className="cart__icon">
                <img src={Bag} />
              </span>
              <span>
                <img src={UserIcon} alt="" />
              </span>
            </div>

            <div className="mobile__menu">
              <span>
              <img src={Menu} alt="" />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
