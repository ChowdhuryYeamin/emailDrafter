// EmailTypeSelect.js

import React from 'react';

// This is a functional component that displays a dropdown menu for the user to select the type of email they're writing.
// It takes two props: value (the current selected email type) and handleChange (a function to run when the selection changes).
const EmailTypeSelect = ({ value, handleChange }) => (
  <select value={value} onChange={handleChange}>
    <option value="Business">Business</option>
    <option value="Personal">Personal</option>
    <option value="Support">Support</option>
    {/*Add more email types as needed*/}
  </select>
);

export default EmailTypeSelect;
