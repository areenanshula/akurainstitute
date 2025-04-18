import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import "../App.css";

function Searchbar({ onSearch}) {
  return (
    <div className="searchbar text-center w-100 d-flex justify-content-center mt-3">
      <div
        className="w-50 shadow-sm"
        style={{ overflow: "hidden", borderRadius: "20px" }}
      >
        <div className="position-relative">
          <input
            type="text"
            className="form-control rounded-5 shadow-sm px-4 ps-5"
            placeholder="Search..."
            aria-label=" Search"
            onChange={(e) => onSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Prop type for the search handler function
};

export default Searchbar;
