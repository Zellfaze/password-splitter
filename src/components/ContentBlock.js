import React, { Component } from 'react';

export default function ContentBlock({title, body}) {
  return (
    <div className="card text-dark bg-light mb-2">
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        {body}
      </div>
    </div>
  );
}
