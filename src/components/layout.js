import React from "react";
import Link from "./link";
import layoutStyles from "./layout.module.css";

const Layout = props => {
  return (
  <div>
  <header className={layoutStyles.header}>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </header>
    {props.children}
    <footer>My Gatsby Site 2019</footer>
  </div>
  );
};

export default Layout;