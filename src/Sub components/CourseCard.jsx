import React from "react"
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseCard({ title, description, image, onBuy, purchased }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "20px 0", height: "20rem" }}>
      <img src={image} className="card-img-top" alt={`${title} Thumbnail`} style={{ height: "150px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        {purchased ? (
          <Link to = {`/learn/${title}`} className="btn btn-primary mt-2"> Learn Course </Link>
        ) : (
          <button className="btn btn-primary mt-2" onClick={onBuy}>
            Buy Course
          </button>
        )}
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onBuy: PropTypes.func.isRequired,
  purchased: PropTypes.bool.isRequired,
};

export default CourseCard;
