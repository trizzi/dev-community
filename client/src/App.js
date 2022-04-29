import React, { Fragment, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import NoMatch from './components/layouts/NoMatch';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/post/Posts';
import { loadUser } from './actions/auth';
import Login from './components/auth/Login';
import Alert from './components/layouts/Alert';
import setAuthToken from './utils/setAuthToken';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />

            <Route
              path='/register'
              element={<Register />}
            />

            <Route path='/login' element={<Login />} />

            <Route
              path='/profiles'
              element={<Profiles />}
            />

            <Route
              path='/profile/:id'
              element={<Profile />}
            />

            <Route
              path='/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path='/create-profile'
              element={
                <PrivateRoute>
                  <CreateProfile />
                </PrivateRoute>
              }
            />

            <Route
              path='/edit-profile'
              element={
                <PrivateRoute>
                  <EditProfile />
                </PrivateRoute>
              }
            />

            <Route
              path='/add-experience'
              element={
                <PrivateRoute>
                  <AddExperience />
                </PrivateRoute>
              }
            />

            <Route
              path='/add-eduction'
              element={
                <PrivateRoute>
                  <AddEducation />
                </PrivateRoute>
              }
            />

            <Route
              path='/posts'
              element={
                <PrivateRoute>
                  <Posts />
                </PrivateRoute>
              }
            />

            <Route path='*' element={<NoMatch />} />
          </Routes>

          <Alert />
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
