import { React, useEffect } from "react";
import { useUniContext } from "../../context/UniContext";
import Universities from "../Universities/Universities";
import { useRef } from "react";
import "./Home.css";

const Home = () => {
  const { fetchUniversities, setCountry, country, setLoading } =
    useUniContext();
  useEffect(() => {
    fetchUniversities();
    // eslint-disable-next-line
  }, [country]);
  const searchInput = useRef();
  return (
    <>
      <div className="home">
        <h1>Search for Universities countrywise</h1>
        <div className="search">
          <input
            type="text"
            ref={searchInput}
            autoComplete="off"
            spellCheck="false"
            placeholder="Press the search icon"
          />
          <img
            src="/search.svg"
            alt="search"
            onClick={() => {
              setCountry(searchInput.current.value);
              searchInput.current.value = "";
              setLoading(true);
            }}
          />
        </div>
      </div>
      <div className="University-component">
        <Universities />
      </div>
    </>
  );
};

export default Home;
