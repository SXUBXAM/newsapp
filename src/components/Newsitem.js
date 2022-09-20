import React, { Component } from "react";

export default class Newsitem extends Component {
   

  render() {
    let { title, description, imageURL, nurl} = this.props;
    return (
      <div>
        <div className="card" >
          <img src={imageURL} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">
             {description}....
            </p>
            <a href={nurl} target= "_blank" rel="noreferrer" className="btn btn-primary">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
