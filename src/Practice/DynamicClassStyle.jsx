import React, { useState } from 'react';
import './DynamicInlineStyle.css'

function DynamicClassStyle() {
  // State to track which button was clicked
  const [clicked, setClicked] = useState(null);

  // Event handlers for button clicks
  const handleYesClick = () => setClicked('yes');
  const handleNoClick = () => setClicked('no');

  // Determine the class based on which button was clicked
  let headingClass = '';
  if (clicked === 'yes') {
    headingClass = 'highlight-green';
  } else if (clicked === 'no') {
    headingClass = 'highlight-red';
  }

  return (
    <div>
      <h1 className={headingClass}>Do you agree?</h1>
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>
    </div>
  );
}

export default DynamicClassStyle;