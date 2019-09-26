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
    <main className={layoutStyles.main}>{props.children}</main>
    <footer>My Gatsby Site 2019</footer>
  </div>
  );
};

export default Layout;