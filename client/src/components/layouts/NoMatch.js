import React from 'react';
import containerWrapper from './containerWrapper';

const NoMatch = () => {
  return <h1>Page not found</h1>;
};

export default containerWrapper(NoMatch);
