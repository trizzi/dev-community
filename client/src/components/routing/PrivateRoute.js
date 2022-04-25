import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  auth: { isAuthenticated, loading },
  children,
}) =>
  isAuthenticated && !loading ? (
    // <Outlet />
    children
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
