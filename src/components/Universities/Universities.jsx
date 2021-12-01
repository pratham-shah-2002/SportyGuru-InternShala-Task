import React from "react";
import { useUniContext } from "../../context/UniContext";
import University from "../University/University";
import "./Universities.css";

const Universities = () => {
  const { universities, page, setPage, loading, country } = useUniContext();
  return (
    <>
      {loading ? (
        <img src="/spin.gif" alt="loading" className="spinner" />
      ) : (
        <div className="universities">
          <div className="currentCountry">
            {universities.length > 0
              ? country !== ""
                ? `Currently showing Universities from ${universities[0].country}`
                : `Currently showing Universities from all over the world`
              : "No results found"}
          </div>
          <div className="uni-btn">
            <button
              onClick={() => setPage(page - 10)}
              style={
                page === 0
                  ? { background: "rgba(14,203,192, 0.4)" }
                  : { background: "#0ecbc0" }
              }
              className="prev-btn"
            >
              Previous
            </button>
            <button
              onClick={() => setPage(page + 10)}
              style={
                page + 10 >= universities.length
                  ? { background: "rgba(14,203,192, 0.6)" }
                  : { background: "#0ecbc0" }
              }
              className="next-btn"
            >
              Next
            </button>
          </div>

          {universities &&
            universities.slice(page, page + 10).map((university, index) => {
              return (
                <University
                  name={university.name}
                  website={university.web_pages}
                  key={index}
                  sr={index + page + 1}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Universities;
