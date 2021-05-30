import React from "react";
import { Container/*, Row, Col*/ } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  //AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <ul className="footer-icons">
        <li className="social-icons">
          <a
            href="https://github.com/ArnthorDadi"
            style={{ color: "white" }}
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://twitter.com/ArnJonasson"
            style={{ color: "white" }}
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/arnthor-dadi-5901b7187/"
            style={{ color: "white" }}
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </Container>
  );
}
        /*<li className="social-icons">
          <a
            href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
            style={{ color: "white" }}
          >
            <AiFillInstagram />
          </a>
        </li>*/

export default Footer;
