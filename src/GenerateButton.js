import React from 'react';

// This functional component displays a button.
// It takes two props: 
// handleGenerate (a function to run when the button is clicked),
// and className (a string containing CSS class names).
const GenerateButton = ({ handleGenerate, className }) => (
  <button onClick={handleGenerate} className={className}>Generate Email</button>
);

export default GenerateButton;
