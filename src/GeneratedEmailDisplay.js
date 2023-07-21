import React from 'react';

// This functional component displays the generated email.
// It takes two props: emailDraft (the text of the generated email) and className (a string containing CSS class names).
const GeneratedEmailDisplay = ({ emailDraft, className }) => (
  <div className={className}>
    <h2>Generated Email:</h2>
    <p>{emailDraft}</p>
  </div>
);

export default GeneratedEmailDisplay;
