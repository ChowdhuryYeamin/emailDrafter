import React from 'react';

// This is a functional component that displays a dropdown menu for the user to select the type of email they're writing.
// It takes three props: 
// value (the current selected email type), 
// handleChange (a function to run when the selection changes),
// and className (a string containing CSS class names).
const EmailTypeSelect = ({ value, handleChange, className }) => (
  <div className={className}>
    <label>
      Email Type:
      <select value={value} onChange={handleChange}>
        <option value="Business">Business</option>
        <option value="Personal">Personal</option>
        <option value="Support">Support</option>
        {/*Add more email types as needed*/}
      </select>
    </label>
  </div>
);

export default EmailTypeSelect;
