import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';

import './App.css';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
};

export default App;
