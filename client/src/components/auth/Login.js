import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect login page to dashboard if logged in
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign in</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>Sign Into Your
        Account
      </p>
      <form
        action='create-profile'
        className='form'
        onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => onChange(e)}
            name='email'
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile
            image, use a Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary'
          value='Login'
        />
      </form>
      <p className='my-1'>
        Don't have an account?{' '}
        <Link to='/register'>Sign Up</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
