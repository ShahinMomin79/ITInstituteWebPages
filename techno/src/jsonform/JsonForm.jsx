// App.js
import React from 'react';
import Form from '@rjsf/core';

const schema = {
  title: "User Information",
  type: "object",
  properties: {
    name: { type: "string", title: "Full Name" },
    email: { type: "string", title: "Email Address", format: "email" }
  },
  required: ["name", "email"]
};

const uiSchema = {
  name: {
    "ui:widget": "text",
    "ui:placeholder": "Enter your full name"
  },
  email: {
    "ui:widget": "email",
    "ui:placeholder": "Enter your email address"
  }
};

const JsonForm = () => {
  const handleSubmit = ({ formData }) => {
    alert(`Form submitted successfully with data: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="App">
      <h1>User Form</h1>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      >
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default JsonForm;
