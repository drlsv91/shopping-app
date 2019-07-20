import React from "react";

const Navbar = ({ counters }) => {
  console.log("Navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="google.com">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {counters.length}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
