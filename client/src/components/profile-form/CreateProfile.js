import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import containerWrapper from '../layouts/containerWrapper';

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  return (
    <div>
      <h1 className='large text-primary'>
        Create Your Profile
      </h1>
      <p className='lead'>
        <i className='fas fa-user'>
          {' '}
          Let's get some information to make your profile
          stand out
        </i>
      </p>
      <small>* = require field</small>
      <form className='form'>
        <div className='form-group'>
          <select className='status'>
            <option value='0'>
              * Select Professional Status
            </option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>
              Junior Developer
            </option>
            <option value='Senior Developer'>
              Senior Developer
            </option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>
              Student or Learning
            </option>
            <option value='Instructor'>
              Instructor or Teacher
            </option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text'>
            Give us an idea of where you are at in your
            career
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company'
            name='company'
          />
          <small className='form-text'>
            Could be your own comapany or one you work for
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Website'
            name='website'
          />
          <small className='form-text'>
            Could be your own or a company website
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
          />
          <small className='form-text'>
            City & state suggested (eg Lagos, Nigeria)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Skills'
            name='skills'
          />
          <small className='form-text'>
            Please use comma separated values (eg. HTML,
            CSS, Javascript)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Github Username'
            name='githubusername'
          />
          <small className='form-text'>
            If you want your latest repos and Github link,
            include your username
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'></textarea>
          <small className='form-text'>
            Tell us a little about yourself
          </small>
        </div>
        <div className='form-group'>
          <button type='button' className='btn btn-light'>
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        <div className='form-group social-input'>
          <i className='fab fa-twitter fa-2x'></i>
          <input
            type='text'
            placeholder='Twitter URL'
            name='twitter'
          />
        </div>
        <div className='form-group social-input'>
          <i className='fab fa-facebook fa-2x'></i>
          <input
            type='text'
            placeholder='Facebook URL'
            name='facebooks'
          />
        </div>
        <div className='form-group social-input'>
          <i className='fab fa-youtube fa-2x'></i>
          <input
            type='text'
            placeholder='Youtube URL'
            name='youtube'
          />
        </div>
        <div className='form-group social-input'>
          <i className='fab fa-liinkedin fa-2x'></i>
          <input
            type='text'
            placeholder='Linkedin URL'
            name='linkedin'
          />
        </div>
        <div className='form-group social-input'>
          <i className='fab fa-instagram fa-2x'></i>
          <input
            type='text'
            placeholder='Instagram URL'
            name='instagram'
          />
        </div>
        <input
          type='submit'
          className='btn btn-primary my-1'
        />
        <a href='dashboard' className='btn btn-light my-1'>
          Go Back
        </a>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default containerWrapper(CreateProfile);
