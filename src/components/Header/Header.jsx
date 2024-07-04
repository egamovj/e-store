import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import "./header.css";

import UserIcon from "../../assets/images/user-icon.png";
import Bag from "../../assets/shopping-bag-line.svg";
import Heart from "../../assets/heart-line.svg";
import Menu from "../../assets/menu-line.svg";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

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
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : "nav__item-link"
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <img src={Heart} />
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <img src={Bag} />
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={UserIcon} alt="" />
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
