import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  });
  return (
    <div className={nav ? "nav active" : "nav"}>
      <h1>UniFinder</h1>
    </div>
  );
};

export default NavBar;
