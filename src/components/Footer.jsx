import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunes,
  faFacebook,
  faInstagram,
  faThreads,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Subscribe />
        <div className="socials">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faItunes} />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faThreads} />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
