import React, { useState } from 'react';
import "./write.css";
import axios from "axios";

export default class Write extends React.Component {

constructor(props) {
	super(props)
	this.state = {
    title: '',
    author: '',
    text: ''

}
	
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  console.log(event, this, "handleSubmit");
  const blogPost = { title: this.state.title, author: this.state.author, text: this.state.text };
  axios.post('https://abbp-ccm.herokuapp.com/blog/add', blogPost).then(response => console.log("response",response.data));
  event.preventDefault();
}

render() {
	return (
      <div className="write">
      <img
        className="writeImg"
        src="https://images.squarespace-cdn.com/content/v1/5b4f8efa12b13fd52801b8b5/1a17f6f4-0833-45f5-8cce-53e35d2e75a7/xl-american-bully.jpg" 
        alt=""
      />
      <form className="writeForm" onSubmit={this.handleSubmit}>  
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input onChange={e => this.setState({ [e.target.name]: e.target.value })} 
            name="title"
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          <input onChange={e => this.setState({ [e.target.name]: e.target.value })} 
            name="author" 
            className="writeInput"
            placeholder="Author"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea onChange={e => this.setState({ [e.target.name]: e.target.value })} 
            name="text"
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <a class= "btn btn-primary" href="#">Publish</a>
      </form>
    </div>
  );
 }
}
