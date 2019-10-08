import React from "react";
import { FaMediumM, FaTwitter, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import whiteLogo from "../images/logo.png";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter is-flex">
              <div className="txt">
                <h5 className="has-text-white">
                  Does your company need a junior developer?
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <a href="/" className="button is-white has-text-primary">
                Post a job
              </a>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <figure className="image is-32x32">
                <img src={whiteLogo} alt="Logo" />
              </figure>
              <p className="is-marginless is-paddingless">
                We collect awesome junior developer offers to help <br />
                creatives and developers find their first gig.
              </p>
              <div className="social">
                <a href="https://twitter.com/" title="Twitter">
                  <FaTwitter color="#000" size="10" />
                </a>
                <a href="https://medium.com/" title="Medium">
                  <FaMediumM color="#000" size="10" />
                </a>
                <a href="https://github.com/" title="GitHub">
                  <FaGithub color="#000" size="10" />
                </a>
                <a href="mailto:me@sprypixels.com" title="Email us">
                  <IoMdMail color="#000" size="10" />
                </a>
              </div>
            </div>
            <div className="column">
              <nav>
                <li>
                  <a href="/">Our clients</a>
                </li>
                <li>
                  <a href="/">For employers</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <p>{new Date().getFullYear()}. All right reserved.</p>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
