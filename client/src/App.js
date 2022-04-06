import { Fragment, useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
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
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route
                path='register'
                element={<Register />}
              />
              <Route path='login' element={<Login />} />
              <Route
                path='dashboard'
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
