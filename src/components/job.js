import React from "react";
import { FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

const Job = ({ data }) => (
  <div className="job has-shadow">
    <div className="columns">
      <div className="column">
        <h4 className="subtitle is-5 is-capitalized has-text-grey-dark">
          {data.position}
        </h4>
      </div>
      <div className="column is-flex">
        <p>
          $1500 - $2300{" "}
          <span className="has-text-primary is-block">/monthly</span>
        </p>
      </div>
    </div>
    <div className="columns">
      <div className="column is-flex about is-two-thirds">
        <figure className="image is-24x24 is-inline-block">
          <img
            src={
              data.company_logo ||
              "https://bulma.io/images/placeholders/128x128.png"
            }
            alt="logo"
          />
        </figure>

        <span className="is-inline-block">{data.company}</span>
        <span className="is-inline-block">
          <FaMapMarkerAlt size={10} color="96a5ff" /> New York
        </span>
        <span className="is-inline-block">
          <FaFileAlt size={10} color="96a5ff" /> Full-time
        </span>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <div className="tags">
          {data.tags.map((tag, index) => (
            <div key={index} className="tag is-rounded has-text-primary">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="column is-flex is-relative">
        <a href={data.url} className="button is-primary">
          Apply
        </a>
      </div>
    </div>
  </div>
);

export default Job;
