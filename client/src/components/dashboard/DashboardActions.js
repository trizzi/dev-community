import React from 'react';
import { Link } from 'react-router-dom';
import containerWrapper from '../layouts/containerWrapper';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'>
          Edit Profile
        </i>
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'>
          Add Experience
        </i>
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'>
          Add Education
        </i>
      </Link>
    </div>
  );
};

export default containerWrapper(DashboardActions);
