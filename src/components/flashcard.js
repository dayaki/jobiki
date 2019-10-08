import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const FlashCard = ({ color }) => {
  const bgStyle = {
    background: `linear-gradient(45deg, ${color[0]} 0%, ${color[1]} 100%)`
  };

  return (
    <div className="flashcard is-relative" style={bgStyle}>
      <div className="timeago is-flex">
        <p>14h ago</p>
      </div>
      <div className="company">
        <figure className="image is-24x24 is-inline-block">
          <img
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="logo"
          />
        </figure>
        <p className="title is-4 is-inline-block">The Nano Foundation</p>
      </div>
      <div className="about">
        <h4>Product Designer</h4>
        <h6>$1300 - $2500</h6>
        <div className="location">
          <FaMapMarkerAlt size={10} color="#010000" />
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className="tags">
        <div className="tag is-rounded">mysql</div>
        <div className="tag is-rounded">.net developer</div>
      </div>
    </div>
  );
};

export default FlashCard;
