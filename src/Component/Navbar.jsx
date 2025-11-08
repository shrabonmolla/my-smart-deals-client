import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  // handleLogOut
  function handleLogOut() {
    logOut()
      .then((res) => {
        console.log(res);
        alert("logout successful");
      })
      .catch((err) => console.log(err.message));
  }
  const list = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allproducts">All Products</NavLink>
      </li>
      <li>
        <NavLink to="/myproducts">My Products</NavLink>
      </li>
      <li>
        <NavLink to="/mybids">My bids</NavLink>
      </li>
      <li>
        <NavLink to="/createproducts">Create Products</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold ">
            Smart <span className="text-smart">Deals</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
        <div className="navbar-end gap-4">
          {user ? (
            <Link
              onClick={handleLogOut}
              className="btn bg-none border-smart text-smart"
            >
              Log Out
            </Link>
          ) : (
            <Link to="/login" className="btn bg-none border-smart text-smart">
              Login
            </Link>
          )}
          <Link to="/register" className="btn bg-smart border-none text-white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
