// App.js

import React from 'react';
import TextInput from './TextInput';
import EmailTypeSelect from './EmailTypeSelect';
import GenerateButton from './GenerateButton';
import GeneratedEmailDisplay from './GeneratedEmailDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      emailType: 'Business',
      emailDraft: '',
      isDraftGenerated: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleGenerateEmail = this.handleGenerateEmail.bind(this);
  }

  handleInputChange(event) {
    this.setState({userInput: event.target.value});
  }

  handleDropdownChange(event) {
    this.setState({emailType: event.target.value});
  }

  handleGenerateEmail() {
    // This is where you would send the user input and email type to the GPT API and get the generated email.
    // For this MVP, we'll just use dummy text.
    this.setState({
      emailDraft: 'This is a dummy generated email.',
      isDraftGenerated: true,
    });
  }

  render() {
    return (
      <div>
        <h1>Email Drafting Assistant</h1>

        <TextInput
          value={this.state.userInput}
          handleChange={this.handleInputChange}
        />

        <EmailTypeSelect
          value={this.state.emailType}
          handleChange={this.handleDropdownChange}
        />

        <GenerateButton
          handleGenerate={this.handleGenerateEmail}
        />

        {this.state.isDraftGenerated && (
          <GeneratedEmailDisplay
            emailDraft={this.state.emailDraft}
          />
        )}
      </div>
    );
  }
}

export default App;
