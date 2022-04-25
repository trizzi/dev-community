import React from 'react';

const containerWrapper = (Component) => {
  return (props) => {
    return (
      <section className='container'>
        <Component {...props} />;
      </section>
    );
  };
};

export default containerWrapper;
