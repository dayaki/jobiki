import React from "react";
import ProfileGB from "../assets/shape2.svg";

const Quote = ({ position, name, company, testimony, image }) => {
  let editStyle = {};
  if (position === "right") {
    editStyle = {
      top: "5rem"
    };
  }
  if (position === "bottom") {
    editStyle = {
      left: "2rem"
    };
  }

  return (
    <div className="quotes" style={editStyle}>
      <figure className="image is-64x64">
        <ProfileGB width="90" height="90" />
        <img
          src={image}
          className="is-rounded"
          alt="profile"
        />
      </figure>
      <div className="txt">
        <h4>
          { testimony }
        </h4>
        <h5>{ name }</h5>
        <p>{ company }</p>
      </div>
    </div>
  );
};

export default Quote;
