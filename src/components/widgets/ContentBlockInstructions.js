import React, { Component } from 'react';

export default function ContentBlockInstructions({children}) {
  return (
    <p className="card-text">
      {children}
    </p>
  );
}
 
