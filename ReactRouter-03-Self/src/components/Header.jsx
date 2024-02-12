import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <p>Header</p>

      <div>
        <ul>
          <li>
            <NavLink to={"home"}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"about"}>About</NavLink>
          </li>

          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>

          {/* <li>
            <NavLink to={"user"}>User</NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
