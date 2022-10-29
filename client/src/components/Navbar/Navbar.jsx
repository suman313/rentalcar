import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./logo1.png";
import styled from "styled-components";
import { Col, Row } from "antd";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: whitesmoke;
  font-weight: 600;
  font-size: 15px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function Navbar() {
  const navbarRef = useRef();
  const [navbarH, setNavbarH] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 60) setNavbarH(true);
    else setNavbarH(false);
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <Row>
      <Col xs={24}>
        <nav
          className={
            navbarH
              ? "navbar navbar-expand-sm sticky justify-content-between"
              : "navbar navbar-expand-sm  justify-content-between"
          }
          ref={navbarRef}
        >
          <Link>
            <img src={logo} />
          </Link>
          <div className="nav-links d-flex justify-content-between">
            <ul>
              <li>
                <StyledLink>Home</StyledLink>
              </li>
              <li>
                <StyledLink>user</StyledLink>
              </li>
              <li>
                <StyledLink to="/bookcar">Book a car</StyledLink>
              </li>
              <li>
                <StyledLink>login</StyledLink>
              </li>
              <li>
                <StyledLink>About Us</StyledLink>
              </li>
            </ul>
          </div>
        </nav>
      </Col>
    </Row>
  );
}

export default Navbar;
