import React, { Component } from 'react';


export default class Display extends Component {

  render() {
    const { name ,img} = this.props;
    return (
      <>
      <div className="poke-container">
        <div><img src={img} /></div>
        <div className="pokename"><p>{name}</p></div>
        
      </div>
      </>
    )
  }
}
