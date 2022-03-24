import React from "react";
import NavLinks from "../components/NavLinks";

export default function NavBar() {
  return (
    <nav className="navigation">
      <div className="logo">
        <a href="/">
          <h1>Kintsugi</h1>
        </a>
      </div>
      <NavLinks />
    </nav>
  );
}
