import React from "react";
import { Link } from "react-router-dom";
import { HEADER_NAV_LINKS } from "./constants";
import Button from "../components/UI/Button";

const Header = () => {
  return (
    <header className="mx-10 py-5 flex justify-between items-center">
      <div className="font-bold text-3xl">
        <Link to="/">"LOGO"</Link>
      </div>
      <ul className="flex space-x-7">
        {HEADER_NAV_LINKS.map((item) => (
          <Link key={item.name} to={item.url} className="font-semibold">
            {item.name}
          </Link>
        ))}
      </ul>
      <div className="space-x-5">
        <Link to="/signup">
          <Button className="btn btnPrimary">Sign up</Button>
        </Link>
        <Link to="/login">
          <Button className="btn btnPrimary">Log in</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
