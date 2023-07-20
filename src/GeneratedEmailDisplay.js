// GeneratedEmailDisplay.js

import React from 'react';

// This is a functional component that displays the generated email.
// It takes one prop: emailDraft (the text of the generated email).
const GeneratedEmailDisplay = ({ emailDraft }) => (
  <div>
    <h2>Generated Email:</h2>
    <p>{emailDraft}</p>
  </div>
);

export default GeneratedEmailDisplay;

