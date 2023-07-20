// TextInput.js

import React from 'react';

// This is a functional component that displays a textarea for the user to input their main points.
// It takes two props: value (the current value of the textarea) and handleChange (a function to run when the textarea's value changes).
const TextInput = ({ value, handleChange }) => (
  <textarea
    placeholder="Enter your points here"
    value={value}
    onChange={handleChange}
  />
);

export default TextInput;
