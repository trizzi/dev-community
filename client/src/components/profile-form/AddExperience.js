import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import PropTypes from 'prop-types';
import containerWrapper from '../layouts/containerWrapper';

const AddExperience = ({ addExperience }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const navigate = useNavigate();

  const {
    company,
    title,
    location,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Fragment>
      <h1 className='large text-primary'>
        Add An Experience
      </h1>
      <p className='lead'>
        <i className='fas fa-code-branch'>
          Add any developer/programming positions that you
          have had in the past{' '}
        </i>
      </p>
      <small>* = required Field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addExperience(formData);
          navigate('/dashboard');
        }}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Job Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Company'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  current: !current,
                });
                toggleDisabled(!toggleDisabled);
              }}
            />
            {''}
            Current Job
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            id='5'
            cols='30'
            rows='10'
            value={description}
            onChange={(e) => onChange(e)}
            placeholder='Job Description'></textarea>
        </div>
        <input
          type='submit'
          className='btn btn-primary my-1'
        />
        <Link
          className='btn btn-light my-1'
          to='dashboard.html'>
          Go back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default containerWrapper(
  connect(null, { addExperience })(AddExperience)
);
