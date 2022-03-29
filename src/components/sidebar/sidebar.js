import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import bullySidebar from '../images/blue-puppies.jpg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={bullySidebar}
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Puppies">
              Females
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Classics">
              Males
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Standard">
              Standard
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Pocket">
              Classic
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=XL">
              XL
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=XenaDior">
              Pocket
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}