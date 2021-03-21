import React, { Component } from 'react';

export default function ContentBlock({title, children}) {
  return (
    <div className="card text-dark bg-light mb-2">
      <div className="card-header">
        {title}
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}
