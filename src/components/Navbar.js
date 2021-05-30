import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
//import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <a href="#home" className="nav-link">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </a>
            </Nav.Item>
            <Nav.Item>
              <a href="#about" className="nav-link">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </a>
            </Nav.Item>
            <Nav.Item>
                <a href="#projects" className="nav-link">
                  <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px" }}
                      />{" "}
                  Projects
                </a>
            </Nav.Item>
            <Nav.Item>
              <a href="#resume" className="nav-link">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </a>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/ArnthorDadi/arnthordadi.github.io"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
/*<Nav.Link
                as={Link}
                to="#projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>*/

export default NavBar;
