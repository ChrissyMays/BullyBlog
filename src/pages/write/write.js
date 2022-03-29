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
  axios.post('http://127.0.0.1:8080/blog/add', blogPost).then(response => console.log("response",response.data));
  event.preventDefault();
}

render() {
	return (
      <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
        <input type="submit" value="Publish"/>
      </form>
    </div>
  );
 }
}

