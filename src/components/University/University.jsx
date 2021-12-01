import React from "react";
import "./University.css";

const University = ({ name, website, sr }) => {
  return (
    <>
      <a href={website} target="_blank" rel="noreferrer">
        <div className="singleUniversity">
          <div className="sr">{sr}</div>
          <div className="university-name">{name}</div>
        </div>
      </a>
    </>
  );
};

export default University;
