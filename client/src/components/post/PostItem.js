import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLike, removeLike } from '../../actions/post';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  post: {
    _id,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date,
  },
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to='profile'>
        <img src={avatar} alt='' className='round-img' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on
        <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>
      <button
        onClick={(e) => addLike(_id)}
        type='button'
        className='btn btn-light'>
        <i className='fas fa-thumbs-up'></i>{' '}
        <span>
          {likes.length > 0 && <span>{likes.length}</span>}
        </span>
      </button>
      <button
        onClick={(e) => removeLike(_id)}
        type='button'
        className='btn btn-light'>
        <i className='fas fa-thumbs-down'></i>
        <span>{likes}</span>
      </button>
      <Link to={`/post/${_id}`} className='btn btn-primary'>
        Discusion
        {comments.length > 0 && (
          <span className='comment-count'>
            {comments.length}
          </span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button type='button' className='btn btn-danger'>
          <i className='fas fa-times'></i>
        </button>
      )}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
})(PostItem);