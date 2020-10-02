import React from 'react';
import Entry from './Entry';

const Journal = (props) => {
  return (
    <div className="journal">
      {props.entries.map((entry, i) => <Entry key={`entry-${i}`} entry={entry} />)}
    </div>
  );
}

export default Journal;