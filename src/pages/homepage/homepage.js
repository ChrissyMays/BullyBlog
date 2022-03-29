import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useState } from 'react';
import axios from "axios";

export default function Homepage() {
  const [blog, setBlog] = useState("")
  const postBlog = () =>{
    axios.get("http://127.0.0.1:8080/ ")
    .then(response => {
      console.log(response)
      setBlog(response)
    }).catch(error => {
      console.log(error)
    })
  }
  const location = useLocation();
  console.log(location);
  return (
    <div> 
      <Header />
      <div className="home">
        <Posts />
        { blog ? <p>{blog}</p> : null }
        <Sidebar />
      </div>
    </div>
  );
}
