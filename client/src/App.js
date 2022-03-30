import { Fragment } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
        <section className='container'>
          <Routes>
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Routes>
        </section>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
