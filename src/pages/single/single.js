import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlepost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}