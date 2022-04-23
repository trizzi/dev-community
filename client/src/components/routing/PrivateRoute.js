import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  auth: { isAuthenticated, loading },
}) =>
  isAuthenticated && loading ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  );

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
