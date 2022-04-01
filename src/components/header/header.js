import React from "react";
import "./header.css";
import bullyHeader from '../images/puppies.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> Crystal's </span>
        <span className="headerTitleLg">American Bullies </span>
      </div>
      <img
        className="headerImg"
        src= {bullyHeader}
        alt="Bully Puppy Header"
      />
    </div>
  );
}

