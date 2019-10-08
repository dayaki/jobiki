import React from "react";

import "./style.scss";
import Navbar from "./navbar";
import FlashCard from "./flashcard";

const Header = ({ siteTitle }) => (
  <section className="hero is-fullheight-with-navbar">
    <Navbar />
    <div className="hero-body">
      <div className="container">
        <div className="columns level">
          <div className="column level-left">
            <h1 className="title is-1">
              Are you looking for <br /> your first dream
              <span className="has-text-primary"> job</span>?
            </h1>
            <p className="subtitle is-5">We can help you with that!</p>
            <a href="#search-section" className="button is-primary">
              search a job
            </a>
          </div>
          <div className="column level-right">
            <div className="flashcard-wrapper top">
              <FlashCard color={["#b6ecde", "#a9e3d4"]} />
              <FlashCard color={["#96a5ff", "#8b9af9"]} />
            </div>
            <div className="flashcard-wrapper is-hidden-mobile">
              <FlashCard color={["#ffde85", "#f8d57b"]} />
              <FlashCard color={["#f6dfe7", "#f0d6df"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
