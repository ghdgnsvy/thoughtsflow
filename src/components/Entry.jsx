import React from 'react';

const Entry = (props) => {
  const entryContentArr = props.entry.content.split(' ');
  const shortenedContent = entryContentArr.slice(0, (entryContentArr.length >= 15 ? 15 : entryContentArr.length)).join(' ');
  return (
    <div className="journal__entry">
      <h3>{props.entry.title}</h3>
      <h6>{props.entry.date}</h6>
      <p><em>{shortenedContent}</em></p>
    </div>
  );
}

export default Entry;