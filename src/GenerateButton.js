// GenerateButton.js

import React from 'react';

// This is a functional component that displays a button.
// It takes one prop: handleGenerate (a function to run when the button is clicked).
const GenerateButton = ({ handleGenerate }) => (
  <button onClick={handleGenerate}>Generate Email</button>
);

export default GenerateButton;
