import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addLike,
  removeLike,
  deletePost,
} from '../../actions/post';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
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
  showActions,
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
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
      {showActions && (
        <Fragment>
          <button
            onClick={(e) => addLike(_id)}
            type='button'
            className='btn btn-light'>
            <i className='fas fa-thumbs-up'></i>{' '}
            console.log('no5', addLike())
            <span>
              {likes.length > 0 && (
                <span>{likes.length}</span>
              )}
              console.log('no 3', likes.length)
            </span>
          </button>
          <button
            onClick={(e) => removeLike(_id)}
            type='button'
            className='btn btn-light'>
            <i className='fas fa-thumbs-down'></i>
            <span>
              {likes}
              console.log('no 1', likes)
            </span>
          </button>
          <Link
            to={`/posts/${_id}`}
            className='btn btn-primary'>
            Discusion
            {comments.length > 0 && (
              <span className='comment-count'>
                {comments.length}
                console.log('no 2', comments.length)
              </span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={(e) => deletePost(_id)}
              type='button'
              className='btn btn-danger'>
              <i className='fas fa-times'></i>
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
})(PostItem);
