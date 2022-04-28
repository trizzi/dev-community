import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

const ProfileEducation = ({
  experience: {
    school,
    degree,
    fieldofstudy,
    current,
    to,
    from,
    description,
  },
}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>
        <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
        {!to ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{to}</Moment>
        )}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
};

ProfileEducation.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileEducation;
