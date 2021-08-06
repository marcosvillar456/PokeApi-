import { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import "./NavBar.scss";
export default function NavBar() {
  return (
    <Fragment>
      <div className="NavBar">
        <div className="leftSide">
          <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/home/Crear_Pokemon">Crear Pokemon</Link>
          </div>
        </div>
        <div className="rightSide">
          <SearchBar />
        </div>
      </div>
    </Fragment>
  );
}