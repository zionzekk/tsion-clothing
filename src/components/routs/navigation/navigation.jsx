import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.scss";
const navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-links-container" to="/">
          <CrownLogo className="logo-container " />
        </Link>

        <div>
          <Link className="nav-links-container" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default navigation;
