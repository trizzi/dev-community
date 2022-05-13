import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import PropTypes from 'prop-types';
import containerWrapper from '../layouts/containerWrapper';

const AddEducation = ({ addEducation }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const navigate = useNavigate();

  const {
    school,
    degree,
    fieldofstudy,
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
        Add Your Education
      </h1>
      <p className='lead'>
        <i className='fas fa-code-branch' />
        Add any school or bootcamp that you have attended
      </p>
      <small>* = required Field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData);
          navigate('/dashboard');
        }}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*School or Bootcamp'
            name='school'
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Degree or Certificate'
            name='degree'
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='*Field Of Study'
            name='fieldofstudy'
            value={fieldofstudy}
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
            Current School
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
            placeholder='Program Description'></textarea>
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default containerWrapper(
  connect(null, { addEducation })(AddEducation)
);
