import React, { Component } from 'react';

class ContentBlock extends Component {
  render() {
    return (
      <div className="card text-dark bg-light mb-2">
        <div className="card-header">
          {this.props.title}
        </div>
        <div className="card-body">
          {this.props.body}
        </div>
      </div>
    );
  }
} 

export default ContentBlock;
