import React from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import "./homepage.css";
import { useState, useEffect } from 'react';
import axios from "axios";


export default function Homepage() {
  const [blog, setBlog] = useState("")
  
  useEffect(() => { 
    axios.get("https://breeding-website.herokuapp.com/blog/add")
    .then(response => {
      console.log("blog_data", JSON.stringify(response.data))
      setBlog(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, []);
  
  const location = useLocation();
  console.log(location);
  return (
    <div> 
      <Header />
      <div className="home">
        { blog ?  <Posts blogPosts={blog}/> : null }
        <Sidebar />
      </div>
    </div>
  );
}
