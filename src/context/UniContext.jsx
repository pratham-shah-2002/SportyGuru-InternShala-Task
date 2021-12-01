import { createContext, useContext, useState } from "react";

const uniContext = createContext();

export const useUniContext = () => useContext(uniContext);

export const UniState = (props) => {
  const [country, setCountry] = useState("india");
  const [loading, setLoading] = useState(true);
  const [universities, setUniversities] = useState([]);
  const [page, setPage] = useState(0);
  const url = `http://universities.hipolabs.com/search?country=${country}`;
  const fetchUniversities = async () => {
    let response = await fetch(url);

    response = await response.json();
    setUniversities(response);
    setLoading(false);
  };
  return (
    <uniContext.Provider
      value={{
        fetchUniversities,
        universities,
        page,
        setPage,
        country,
        setCountry,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </uniContext.Provider>
  );
};
