import React from 'react';
import {
  Outlet,
  Navigate,
  // useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  // const location = useLocation()
  <Outlet
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Navigate
          to='/login'
          // replace
          // state={{ from: location }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
