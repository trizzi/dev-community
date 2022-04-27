import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../layouts/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import PropTypes from 'prop-types';
import containerWrapper from '../layouts/containerWrapper';

const Profiles = ({
  getProfiles,
  profile: { profiles, loading },
}) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i>Browse
            and connect with developers
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem
                  key={profile._id}
                  profile={profile}
                />
              ))
            ) : (
              <h4>No Profiles Found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default containerWrapper(
  connect(mapStateToProps, { getProfiles })(Profiles)
);
