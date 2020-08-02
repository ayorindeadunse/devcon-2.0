import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  // formData is our state, an object with the field values, while setFormData is the function used to update the state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // pull form data by destructuring
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({
      // change state of form fields
      ...formData,
      [e.target.name]: e.target.value,
    });

  //on submit
  const onSubmit = async (e) => {
    e.preventDefault();

    console.log("SUCCESS");
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign Into Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
