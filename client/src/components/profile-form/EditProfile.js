import React, {
  Fragment,
  useEffect,
  useState,
} from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import containerWrapper from '../layouts/containerWrapper';
import {
  createProfile,
  getCurrentProfile,
} from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
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

  const navigate = useNavigate();

  const [
    displaySocialInputs,
    toggleSocialInputs,
  ] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company:
        loading || !profile.company ? '' : profile.company,
      website:
        loading || !profile.website ? '' : profile.website,
      location:
        loading || !profile.location
          ? ''
          : profile.location,
      status:
        loading || !profile.status ? '' : profile.status,
      skills:
        loading || !profile.skills ? '' : profile.skills,
      githubusername:
        loading || !profile.githubusername
          ? ''
          : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter:
        loading || !profile.twitter ? '' : profile.twitter,
      facebook:
        loading || !profile.facebook
          ? ''
          : profile.facebook,
      linkedin:
        loading || !profile.linkedin
          ? ''
          : profile.linkedin,
      youtube:
        loading || !profile.youtube ? '' : profile.youtube,
      instagram:
        loading || !profile.instagram
          ? ''
          : profile.instagram,
    });
  }, [loading]);

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

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();

    createProfile(formData, true);
    navigate('/dashboard');
  };

  // if (!edit) {
  //   navigate('/dashboard');
  // }

  return (
    <Fragment>
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
      {/* <small>* = require field</small> */}
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select
            className='status'
            value={status}
            onChange={(e) => onChange(e)}>
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
            value={company}
            onChange={(e) => onChange(e)}
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
            value={website}
            onChange={(e) => onChange(e)}
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
            value={location}
            onChange={(e) => onChange(e)}
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
            value={skills}
            onChange={(e) => onChange(e)}
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
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            If you want your latest repos and Github link,
            include your username
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}></textarea>
          <small className='form-text'>
            Tell us a little about yourself
          </small>
        </div>
        <div className='form-group'>
          <button
            onClick={() =>
              toggleSocialInputs(!displaySocialInputs)
            }
            type='button'
            className='btn btn-light'>
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fa-brands fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fa-brands fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebooks'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fa-brands fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='Youtube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fa-brands fa-liinkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group social-input'>
              <i className='fa-brands fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input
          type='submit'
          className='btn btn-primary my-1'
        />
        <Link
          to='/dashboard'
          className='btn btn-light my-1'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default containerWrapper(
  connect(mapStateToProps, {
    createProfile,
    getCurrentProfile,
  })(EditProfile)
);