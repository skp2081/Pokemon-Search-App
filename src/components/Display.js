import React, { Component } from 'react';


export default class Display extends Component {

  render() {
    const {name, img} = this.props;
    return (
      <div className="container">
        <span className="card">
            <img className="card-header" src={img} />
            <span className="card-title">
              <h3>{name}</h3>
            </span>
        </span>
    </div>  
    )
  }
}