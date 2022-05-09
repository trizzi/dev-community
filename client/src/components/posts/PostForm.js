import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import containerWrapper from '../layouts/containerWrapper';
import PropTypes from 'prop-types';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();

          addPost({ text });

          setText('');
        }}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Create a Post'
          required></textarea>
        <input
          type='submit'
          className='btn btn-dark my-1'
          value='submit'
        />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default containerWrapper(
  connect(null, { addPost })(PostForm)
);
