import React, { useState } from "react";

const defaultFormField = {
  dispayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormField);
  const { dispayName, email, password, confirmPassword } = formFields; //distructuring component
  const handleChange = ({ event }) => {
    const { name } = event;
  };
  return (
    <div>
      <h1>sign up with your email and password</h1>

      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="dispalyName"
        />

        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
