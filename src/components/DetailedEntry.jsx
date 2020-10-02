import React from 'react';

const DetailedEntry = (props) => {
  return (
    <div className="detailed-entry">
      <h1>{props.entry.title}</h1>
    </div>
  )
}

export default DetailedEntry;