import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

import "../components/style.scss";
import NavBar from "../components/navbar";
import image404 from "../images/404.png";

const NotFoundPage = () => (
  <div className="notfound is-flex">
    <div className="left"></div>
    <div className="right"></div>
    <div className="container wrapper is-flex">
      <div className="columns">
        <div className="column">
          <h1 className="title is-2">This page is lost</h1>
          <p>
            The page you are looking for is not available. <br />
            Please return to the Homepage
          </p>
          <a href="/" className="has-text-primary">
            <IoIosArrowRoundBack size={36} color="#000" />
            <span>Go Back</span>
          </a>
        </div>
        <div className="column">
          <figure className="image">
            <img src={image404} alt="404" />
          </figure>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
