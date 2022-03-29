import React from "react";
import { Link } from "react-router-dom";
import "./post.css";
import firstBullyPost from '../images/smiling-bully.jpg';

export default function Post(props) {
  const title= props.blogPost.title;
  const author= props.blogPost.author;
  const text= props.blogPost.text;
  
  return (
    <div className="post">
      <img
        className="postImg"
        src={firstBullyPost}
        alt=""
      />
      <div className="postInfo">
        
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{author}</span>
      </div>
      <p className="postDesc">
        {text}
      </p>
    </div>
  );
}