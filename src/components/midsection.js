import React from "react";

import "./style.scss";
import Job from "./job";
import Quote from "./quote";

const Midsection = () => (
  <React.Fragment>
    <section className="section is-paddingless">
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds is-offset-2">
            <div className="job-nav is-flex">
              <p>We found 25 junior jobs available for you</p>
              <div>
                <p className="is-inline-block">Sort by: </p>{" "}
                <div class="select is-dark is-small">
                  <select>
                    <option>Date of publication</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </section>
    <section className="section lower-footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <h4 className="title is-5">
              What the users said <br /> about us
            </h4>
            <p className="subtitle is-7">
              Finding junior developer jobs is hard, we'r dedicated to junior
              developers looking for jobs. Our goal is to match your skills and
              desired career path with employers who are looking for the same.
            </p>
          </div>
          <div className="column is-relative" style={{ paddingLeft: "2rem" }}>
            <div className="columns">
              <div className="column">
                <Quote name="James Abinibi" company="Fresh LTD" testimony="I just want you to know that you guys did a very good job, i find my
          dream job here." image="https://randomuser.me/api/portraits/men/9.jpg" />
              </div>
              <div className="column">
                <Quote name="Folake Aderibigbe" company="Freelancer" testimony="Wow, I just applied for my first dev job and it was so SIMPLE 🙌🏻" image="https://randomuser.me/api/portraits/men/12.jpg" position="right" />
              </div>
            </div>
            <Quote name="Uche Jombo" company="Freelancer" testimony="You made it so simple to find junior developer jobs, thank you. 😎" image="https://randomuser.me/api/portraits/men/4.jpg" postion="bottom" />
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Midsection;
