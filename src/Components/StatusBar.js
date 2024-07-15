import React from "react";

export default function StatusBar() {
  return (
    <>
      <div className="bg-light p-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="me-3">Morning, Aayush Goswami</span>
          <span className="badge bg-danger me-3 d-flex align-items-center">
            {/* <i className="bi b i-heart-fill me-1"></i> */}
            252 bpm
          </span>
          <span className="badge bg-success d-flex align-items-center">
            {/* <i className="bi bi-check-circle-fill me-1"></i> */}
            Healthy
          </span>
        </div>
        <div className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
