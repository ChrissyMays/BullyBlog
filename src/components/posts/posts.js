import React from "react";
import Post from "../post/Post";
import "./posts.css";


export default function Posts(props) {
 const blogPosts=props.blogPosts;
 const blogItems=blogPosts.map((blogPost) => 
 <Post img="./images/puppies.jpg" blogPost={blogPost} key={blogPost.title}/>
 ) 
  return (
    <div className="posts">
      
      {blogItems}
      
    </div>
    
  );
}